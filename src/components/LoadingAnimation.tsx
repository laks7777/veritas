"use client";
import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const PROCESS_STEPS = [
  { number: "01", label: "Receiving media", detail: "Validating file container and cryptographic hash" },
  { number: "02", label: "Preprocessing", detail: "Decomposing spatial color channels and frequency coefficients" },
  { number: "03", label: "AI assessment", detail: "Evaluating neural synthesis markers and noise distributions" },
  { number: "04", label: "Preparing findings", detail: "Compiling probabilistic scores and forensic indicators" },
];

export function LoadingAnimation() {
  const [stepIndex, setStepIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setStepIndex((i) => Math.min(i + 1, PROCESS_STEPS.length - 1));
    }, 750);

    const progressInterval = setInterval(() => {
      setProgress((p) => Math.min(p + 1.1, 100));
    }, 35);

    return () => {
      clearInterval(stepInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="py-16 sm:py-24 max-w-xl mx-auto space-y-12">
      {/* Editorial Title */}
      <div className="text-center space-y-3">
        <span className="text-[10px] font-sans tracking-[0.3em] text-crimson uppercase block">
          EVALUATION IN PROGRESS
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal">
          ANALYZING EVIDENCE
        </h2>
        <p className="font-sans text-xs sm:text-sm text-neutral-400 font-light">
          Simulated multi-signal forensic pipeline executing.
        </p>
      </div>

      {/* Sleek Minimalist Progress Line */}
      <div className="space-y-2">
        <div className="flex justify-between text-[11px] font-sans tracking-wider text-neutral-400">
          <span>PROGRESS</span>
          <span className="text-white font-medium">{progress.toFixed(0)}%</span>
        </div>
        <div className="h-[2px] w-full bg-white/10 overflow-hidden">
          <div
            className="h-full bg-crimson transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Vertical Step Process List */}
      <div className="space-y-4 pt-4 border-t border-white/[0.08]">
        {PROCESS_STEPS.map((step, idx) => {
          const isComplete = idx < stepIndex;
          const isCurrent = idx === stepIndex;
          const isPending = idx > stepIndex;

          return (
            <div
              key={step.number}
              className={cn(
                "p-4 border transition-all duration-300 flex items-start justify-between gap-4",
                isCurrent
                  ? "bg-surface-100 border-white/20 text-white"
                  : isComplete
                  ? "bg-surface border-white/[0.06] text-neutral-400"
                  : "bg-surface/50 border-transparent text-neutral-600"
              )}
            >
              <div className="flex items-start gap-4">
                <span
                  className={cn(
                    "text-xs font-sans tracking-widest uppercase font-medium mt-0.5",
                    isCurrent ? "text-crimson" : isComplete ? "text-neutral-400" : "text-neutral-600"
                  )}
                >
                  {step.number}
                </span>
                <div>
                  <h4 className={cn("text-sm font-sans tracking-wide", isCurrent ? "text-white font-medium" : isComplete ? "text-neutral-300" : "text-neutral-500")}>
                    {step.label}
                  </h4>
                  <p className="text-[11px] font-sans text-neutral-400 font-light mt-0.5">
                    {step.detail}
                  </p>
                </div>
              </div>

              <div className="mt-1">
                {isComplete ? (
                  <Check className="w-4 h-4 text-neutral-400" />
                ) : isCurrent ? (
                  <div className="w-2 h-2 rounded-full bg-crimson animate-ping" />
                ) : (
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-700" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}