"use client";
import { useState, useEffect } from "react";
import { AnalysisResult as AnalysisResultType } from "@/types";
import { formatBytes, formatDate, getAssessment } from "@/lib/utils";
import { GlowButton } from "./ui/GlowButton";
import { Badge } from "./ui/Badge";
import { Download, AlertCircle } from "lucide-react";

interface Props {
  result: AnalysisResultType;
  imageUrl: string;
  file: File;
  onReset: () => void;
}

async function computeSHA256(file: File): Promise<string> {
  const buffer = await file.arrayBuffer();
  const hashBuffer = await crypto.subtle.digest("SHA-256", buffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

export function AnalysisResultView({ result, imageUrl, file, onReset }: Props) {
  const [fileHash, setFileHash] = useState<string>("Computing...");
  const assessment = getAssessment(result.confidence);
  const isAI = assessment.severity === "ai";
  const isHuman = assessment.severity === "human";

  useEffect(() => {
    computeSHA256(file)
      .then(setFileHash)
      .catch(() => setFileHash("Hash computation failed"));
  }, [file]);

  return (
    <div className="space-y-12">

      {/* ── 01. DOMINANT VERDICT BLOCK ──────────────────────────────────── */}
      <div className="border border-white/10 bg-surface p-8 sm:p-12 space-y-6">
        {/* Label */}
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 bg-crimson flex-shrink-0" />
          <span className="text-xs font-sans tracking-[0.2em] text-neutral-400 uppercase">
            Media Authenticity Assessment
          </span>
        </div>

        {/* Giant verdict */}
        <h2
          className={`font-serif text-6xl sm:text-8xl lg:text-9xl font-normal leading-[0.95] tracking-tight ${
            isAI ? "text-white" : isHuman ? "text-neutral-200" : "text-neutral-300"
          }`}
        >
          {assessment.displayText.toUpperCase()}
        </h2>

        {/* Confidence row */}
        <div className="flex items-baseline gap-4 pt-2">
          <span className="font-serif text-4xl text-white font-normal">
            {result.confidence.toFixed(1)}
            <span className="text-xl text-crimson ml-0.5">%</span>
          </span>
          <span className="text-xs font-sans text-neutral-400 uppercase tracking-wider">
            AI-Generated Probability
          </span>
          <Badge variant={isAI ? "crimson" : isHuman ? "neutral" : "gray"} className="ml-auto">
            {assessment.label}
          </Badge>
        </div>

        {/* Confidence bar */}
        <div className="space-y-2">
          <div className="h-[3px] w-full bg-white/10 overflow-hidden">
            <div
              className="h-full bg-crimson transition-all duration-1000 ease-out"
              style={{ width: `${result.confidence}%` }}
            />
          </div>
          <div className="grid grid-cols-3 text-[10px] font-sans text-neutral-500">
            <span>0–40% Likely Human</span>
            <span className="text-center">41–70% Uncertain</span>
            <span className="text-right">71–100% Likely AI</span>
          </div>
        </div>
      </div>

      {/* ── 02. IMAGE + FILE SPEC ───────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

        {/* Image panel */}
        <div className="lg:col-span-5 border border-white/10 bg-surface">
          <div className="px-5 py-3 border-b border-white/10">
            <span className="text-[10px] font-sans tracking-[0.2em] text-neutral-400 uppercase">
              Examined Media
            </span>
          </div>
          <div className="p-4 bg-black/60 flex items-center justify-center min-h-[260px]">
            <img
              src={imageUrl}
              alt="Examined evidence"
              className="max-h-64 max-w-full object-contain border border-white/10"
            />
          </div>
          <div className="px-5 py-3 border-t border-white/10">
            <p className="text-xs font-sans text-neutral-400 truncate">
              {result.fileInfo.name}
            </p>
          </div>
        </div>

        {/* File spec panel */}
        <div className="lg:col-span-7 border border-white/10 bg-surface">
          <div className="px-5 py-3 border-b border-white/10">
            <span className="text-[10px] font-sans tracking-[0.2em] text-neutral-400 uppercase">
              Evidence Specification
            </span>
          </div>

          <div className="p-6 grid grid-cols-2 gap-y-5 gap-x-8">
            <div className="space-y-1">
              <span className="text-[10px] font-sans text-neutral-500 uppercase tracking-wider block">File Name</span>
              <p className="font-sans text-sm text-white font-medium break-all">{result.fileInfo.name}</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-sans text-neutral-500 uppercase tracking-wider block">Format</span>
              <p className="font-sans text-sm text-white font-medium">{result.fileInfo.type.toUpperCase()}</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-sans text-neutral-500 uppercase tracking-wider block">File Size</span>
              <p className="font-sans text-sm text-white font-medium">{formatBytes(result.fileInfo.size)}</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-sans text-neutral-500 uppercase tracking-wider block">Dimensions</span>
              <p className="font-sans text-sm text-white font-medium">
                {result.fileInfo.dimensions.width} × {result.fileInfo.dimensions.height} px
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-sans text-neutral-500 uppercase tracking-wider block">Timestamp</span>
              <p className="font-sans text-xs text-neutral-300">{formatDate(result.fileInfo.lastModified)}</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-sans text-neutral-500 uppercase tracking-wider block">Forensic Engine</span>
              <p className="font-sans text-xs text-neutral-300">{result.modelName}</p>
            </div>
            <div className="col-span-2 space-y-1.5 pt-3 border-t border-white/[0.06]">
              <span className="text-[10px] font-sans text-neutral-500 uppercase tracking-wider block">
                SHA-256 Cryptographic Hash
              </span>
              <p className="font-mono text-[11px] text-neutral-300 break-all select-all bg-black/40 px-3 py-2 border border-white/[0.06]">
                {fileHash}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── 03. FORENSIC SIGNALS — compact table ────────────────────────── */}
      <div className="space-y-4">
        <div className="flex items-baseline justify-between border-b border-white/[0.08] pb-4">
          <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal">
            Forensic Findings
          </h3>
          <span className="text-xs font-sans text-neutral-500">
            {result.forensicIndicators.length} signals evaluated
          </span>
        </div>

        <div className="border border-white/10 bg-surface">
          {/* Table header */}
          <div className="grid grid-cols-12 px-5 py-2 border-b border-white/10 text-[10px] font-sans text-neutral-500 uppercase tracking-wider">
            <span className="col-span-2">Status</span>
            <span className="col-span-3">Signal</span>
            <span className="col-span-4 hidden sm:block">Description</span>
            <span className="col-span-2 text-right">Value</span>
            <span className="col-span-1 text-right">Weight</span>
          </div>

          {/* Signal rows */}
          {result.forensicIndicators.map((indicator, idx) => (
            <div
              key={indicator.id}
              className={`grid grid-cols-12 px-5 py-3 items-center gap-2 text-xs font-sans ${
                idx < result.forensicIndicators.length - 1
                  ? "border-b border-white/[0.04]"
                  : ""
              } hover:bg-surface-100 transition-colors`}
            >
              <div className="col-span-2">
                <Badge
                  variant={
                    indicator.status === "suspicious"
                      ? "crimson"
                      : indicator.status === "warning"
                      ? "yellow"
                      : "neutral"
                  }
                >
                  {indicator.status}
                </Badge>
              </div>
              <span className="col-span-3 text-white font-medium truncate">
                {indicator.name}
              </span>
              <span className="col-span-4 text-neutral-500 truncate hidden sm:block">
                {indicator.description}
              </span>
              <span className="col-span-2 text-neutral-300 text-right truncate">
                {indicator.value}
              </span>
              <div className="col-span-1 flex items-center justify-end gap-1.5">
                {indicator.weight > 0 && (
                  <>
                    <div className="w-10 h-[2px] bg-white/10 overflow-hidden">
                      <div
                        className={`h-full ${
                          indicator.status === "suspicious"
                            ? "bg-crimson"
                            : indicator.status === "warning"
                            ? "bg-neutral-400"
                            : "bg-neutral-200"
                        }`}
                        style={{ width: `${indicator.weight * 100}%` }}
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 04. DISCLAIMER + ACTIONS ────────────────────────────────────── */}
      <div className="pt-2 space-y-6">
        <div className="flex items-start gap-3 px-4 py-3 border border-white/[0.06] bg-surface">
          <AlertCircle className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
          <p className="text-xs font-sans text-neutral-500 font-light leading-relaxed">
            AI-assisted assessment. Results should be interpreted alongside other forensic evidence and are not definitive proof of authenticity.
          </p>
        </div>

        <div className="flex items-center justify-between">
          <button
            onClick={onReset}
            className="text-xs font-sans text-neutral-400 underline underline-offset-4 hover:text-white transition-colors uppercase tracking-wider"
          >
            Analyze new image
          </button>

          <GlowButton
            variant="primary"
            size="lg"
            onClick={() => console.log("Report generation coming soon")}
          >
            <Download className="w-4 h-4" />
            GENERATE FORENSIC REPORT
          </GlowButton>
        </div>
      </div>
    </div>
  );
}
