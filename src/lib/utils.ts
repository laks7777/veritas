import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatBytes(bytes: number, decimals = 2): string {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}

export function formatDate(timestamp: number): string {
  return new Date(timestamp).toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

export type AssessmentSeverity = 'human' | 'uncertain' | 'ai';

export interface AssessmentResult {
  label: string;
  severity: AssessmentSeverity;
  displayText: string;
}

export function getAssessment(probability: number): AssessmentResult {
  if (probability <= 40) {
    return {
      label: 'LIKELY HUMAN',
      severity: 'human',
      displayText: 'Likely Human',
    };
  }
  if (probability <= 70) {
    return {
      label: 'UNCERTAIN',
      severity: 'uncertain',
      displayText: 'Uncertain',
    };
  }
  return {
    label: 'POTENTIALLY AI-GENERATED',
    severity: 'ai',
    displayText: 'Potentially AI-Generated',
  };
}