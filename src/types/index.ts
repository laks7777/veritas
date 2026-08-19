export interface AnalysisResult {
  classification: "AI_GENERATED" | "HUMAN_CREATED" | "INCONCLUSIVE";
  confidence: number;
  modelName: string;
  processingTime: number;
  fileInfo: FileInfo;
  forensicIndicators: ForensicIndicator[];
  metadata: ImageMetadata;
}

export interface FileInfo {
  name: string;
  size: number;
  type: string;
  dimensions: { width: number; height: number };
  lastModified: number;
}

export interface ForensicIndicator {
  id: string;
  name: string;
  value: string;
  status: "suspicious" | "clean" | "warning" | "info";
  description: string;
  weight: number;
}

export interface ImageMetadata {
  hasExif: boolean;
  colorProfile: string;
  bitDepth: number;
  compression: string;
  noisePattern: string;
  frequencyAnomaly: boolean;
  thumbnailMatch: boolean;
}

export type UploadState = "idle" | "dragging" | "preview" | "analyzing" | "results" | "error";