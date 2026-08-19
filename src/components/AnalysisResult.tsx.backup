"use client";
import { useState } from "react";
import { AnalysisResult as AnalysisResultType } from "@/types";
import { formatBytes, formatDate, getAssessment } from "@/lib/utils";
import { GlowButton } from "./ui/GlowButton";
import { Badge } from "./ui/Badge";
import {
  FileText,
  Clock,
  Cpu,
  BarChart2,
  Info,
  Download,
  Fingerprint,
  Check,
  AlertCircle
} from "lucide-react";

interface Props {
  result: AnalysisResultType;
  imageUrl: string;
  onReset: () => void;
}

export function AnalysisResultView({ result, imageUrl, onReset }: Props) {
  const [showReportNotice, setShowReportNotice] = useState(false);
  const assessment = getAssessment(result.confidence);
  const isAI = assessment.severity === "ai";
  const isHuman = assessment.severity === "human";

  const mockHash = "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";

  return (
    <div className="space-y-16">
      {/* 01. Top Editorial Assessment Header */}
      <div className="border border-white/10 bg-surface p-8 sm:p-12 space-y-8 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-crimson" />
              <span className="text-[10px] sm:text-xs font-sans tracking-[0.25em] text-neutral-400 uppercase">
                MEDIA AUTHENTICITY ASSESSMENT
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-white font-normal leading-[1.02] tracking-tight">
              {assessment.displayText}
            </h2>

            <p className="font-sans text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
              Multi-signal evaluation indicates structural artifacts consistent with algorithmic image synthesis and neural processing.
            </p>
          </div>

          {/* Large Probability Display */}
          <div className="border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-10 flex flex-col justify-between min-w-[200px]">
            <div>
              <span className="text-[10px] font-sans tracking-[0.2em] text-neutral-400 uppercase block mb-1">
                AI-GENERATED PROBABILITY
              </span>
              <div className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-white">
                {result.confidence.toFixed(1)}<span className="text-3xl text-crimson">%</span>
              </div>
            </div>
            <div className="pt-4">
              <Badge variant={isAI ? "crimson" : isHuman ? "neutral" : "gray"}>
                {assessment.label}
              </Badge>
            </div>
          </div>
        </div>

        {/* Minimalist Probability Range Rail */}
        <div className="pt-6 border-t border-white/[0.06] space-y-3">
          <div className="h-[3px] w-full bg-white/10 relative overflow-hidden">
            <div
              className="h-full bg-crimson transition-all duration-1000 ease-out"
              style={{ width: `${result.confidence}%` }}
            />
          </div>
          <div className="grid grid-cols-3 text-center text-[10px] sm:text-xs font-sans text-neutral-400 tracking-wider">
            <div className="text-left">
              <span className="text-neutral-300 block font-medium">0-40%</span>
              <span className="text-neutral-400 text-[9px] uppercase">LIKELY HUMAN</span>
            </div>
            <div className="text-center">
              <span className="text-neutral-300 block font-medium">41-70%</span>
              <span className="text-neutral-400 text-[9px] uppercase">UNCERTAIN</span>
            </div>
            <div className="text-right">
              <span className="text-crimson-light block font-medium">71-100%</span>
              <span className="text-neutral-400 text-[9px] uppercase">POTENTIALLY AI-GENERATED</span>
            </div>
          </div>
        </div>
      </div>

      {/* 02. Two-Column Layout: Evidence & Media View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Visual Evidence Preview */}
        <div className="lg:col-span-5 border border-white/10 bg-surface">
          <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
            <span className="text-[10px] font-sans tracking-[0.25em] text-neutral-400 uppercase">
              EXAMINED MEDIA
            </span>
            <span className="text-[10px] font-sans text-neutral-400">
              ORIGINAL SOURCE
            </span>
          </div>
          <div className="p-6 bg-black/60 flex items-center justify-center min-h-[300px]">
            <img
              src={imageUrl}
              alt="Examined evidence"
              className="max-h-80 max-w-full object-contain border border-white/10"
            />
          </div>
          <div className="p-6 border-t border-white/10 text-center">
            <p className="text-xs font-sans text-neutral-400 truncate">
              {result.fileInfo.name}
            </p>
          </div>
        </div>

        {/* Right Column: Evidence Data Grid */}
        <div className="lg:col-span-7 border border-white/10 bg-surface">
          <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
            <span className="text-[10px] font-sans tracking-[0.25em] text-neutral-400 uppercase">
              EVIDENCE SPECIFICATION
            </span>
            <span className="text-[10px] font-sans text-neutral-400">
              FILE PARAMETERS
            </span>
          </div>

          <div className="p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
            <div className="space-y-1">
              <span className="text-[10px] font-sans tracking-[0.2em] text-neutral-400 uppercase block">
                FILE NAME
              </span>
              <p className="font-sans text-sm text-white font-medium break-all">
                {result.fileInfo.name}
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-sans tracking-[0.2em] text-neutral-400 uppercase block">
                FILE FORMAT
              </span>
              <p className="font-sans text-sm text-white font-medium">
                {result.fileInfo.type.toUpperCase()}
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-sans tracking-[0.2em] text-neutral-400 uppercase block">
                FILE SIZE
              </span>
              <p className="font-sans text-sm text-white font-medium">
                {formatBytes(result.fileInfo.size)}
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-sans tracking-[0.2em] text-neutral-400 uppercase block">
                DIMENSIONS
              </span>
              <p className="font-sans text-sm text-white font-medium">
                {result.fileInfo.dimensions.width} × {result.fileInfo.dimensions.height} PX
              </p>
            </div>

            <div className="space-y-1 sm:col-span-2 pt-2 border-t border-white/[0.06]">
              <span className="text-[10px] font-sans tracking-[0.2em] text-neutral-400 uppercase block">
                CRYPTOGRAPHIC HASH (SHA-256 MOCK)
              </span>
              <p className="font-mono text-xs text-neutral-300 break-all select-all bg-black/40 p-2.5 border border-white/[0.06]">
                {mockHash}
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-sans tracking-[0.2em] text-neutral-400 uppercase block">
                EVALUATION TIMESTAMP
              </span>
              <p className="font-sans text-xs text-neutral-300">
                {formatDate(result.fileInfo.lastModified)}
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-sans tracking-[0.2em] text-neutral-400 uppercase block">
                FORENSIC ENGINE
              </span>
              <p className="font-sans text-xs text-neutral-300">
                {result.modelName}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 03. Forensic Findings Section */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-white/[0.08] pb-4 gap-2">
          <div>
            <span className="text-[10px] font-sans tracking-[0.3em] text-crimson uppercase block mb-1">
              SIGNAL BREAKDOWN
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal">
              FORENSIC FINDINGS
            </h3>
          </div>
          <span className="text-[11px] font-sans text-neutral-400">
            8 INDEPENDENT FORENSIC VECTORS EVALUATED
          </span>
        </div>

        <div className="border border-white/10 bg-surface divide-y divide-white/[0.06]">
          {result.forensicIndicators.map((indicator) => (
            <div
              key={indicator.id}
              className="p-6 hover:bg-surface-100 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="space-y-1.5 max-w-2xl">
                <div className="flex items-center gap-3">
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
                  <h4 className="font-serif text-lg text-white font-normal tracking-wide">
                    {indicator.name}
                  </h4>
                </div>
                <p className="font-sans text-xs text-neutral-400 font-light leading-relaxed">
                  {indicator.description}
                </p>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-6 sm:min-w-[200px]">
                <span className="text-xs font-sans text-neutral-300 text-right">
                  {indicator.value}
                </span>
                {indicator.weight > 0 && (
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-[2px] bg-white/10 overflow-hidden">
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
                    <span className="text-[10px] font-sans text-neutral-400 w-7 text-right">
                      {(indicator.weight * 100).toFixed(0)}%
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 04. Model Assessment & Technical Summary */}
      <div className="border border-white/10 bg-surface p-8 space-y-6">
        <div className="border-b border-white/[0.08] pb-4 flex items-center justify-between">
          <h3 className="font-serif text-xl sm:text-2xl text-white font-normal">
            MODEL ASSESSMENT
          </h3>
          <span className="text-[10px] font-sans tracking-[0.2em] text-neutral-400 uppercase">
            SYNTHESIS SUMMARY
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs font-sans">
          <div className="space-y-1">
            <span className="text-[10px] tracking-[0.2em] text-neutral-400 uppercase block">MODEL IDENTIFIER</span>
            <span className="text-white font-medium">{result.modelName}</span>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] tracking-[0.2em] text-neutral-400 uppercase block">AI PROBABILITY WEIGHT</span>
            <span className="text-crimson-light font-medium">{result.confidence.toFixed(1)}%</span>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] tracking-[0.2em] text-neutral-400 uppercase block">HUMAN PROBABILITY WEIGHT</span>
            <span className="text-white font-medium">{(100 - result.confidence).toFixed(1)}%</span>
          </div>
        </div>

        <div className="pt-4 border-t border-white/[0.06] flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
          <p className="text-[11px] font-sans text-neutral-400 font-light leading-relaxed">
            AI-assisted assessment. Results should be interpreted alongside other forensic evidence and are not definitive proof of authenticity.
          </p>
        </div>
      </div>

      {/* 05. Action Area */}
      <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6">
        <GlowButton variant="outline" size="md" onClick={onReset}>
          ANALYZE NEW IMAGE
        </GlowButton>

        <GlowButton
          variant="primary"
          size="lg"
          onClick={() => setShowReportNotice(true)}
        >
          <Download className="w-4 h-4 mr-2" />
          GENERATE FORENSIC REPORT
        </GlowButton>
      </div>

      {/* Demo Report Modal Notice */}
      {showReportNotice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-surface border border-white/20 max-w-md w-full p-8 space-y-6 text-center">
            <div className="w-12 h-12 border border-white/10 mx-auto flex items-center justify-center text-white">
              <Download className="w-5 h-5 stroke-[1.5]" />
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-2xl text-white font-normal">
                Forensic Report Export
              </h3>
              <p className="font-sans text-xs text-neutral-400 leading-relaxed font-light">
                Court-admissible PDF generation with full cryptographic verification and chain-of-custody metadata is scheduled for a future release of VERITAS.
              </p>
            </div>

            <GlowButton
              variant="white"
              size="md"
              onClick={() => setShowReportNotice(false)}
              className="w-full"
            >
              DISMISS
            </GlowButton>
          </div>
        </div>
      )}
    </div>
  );
}