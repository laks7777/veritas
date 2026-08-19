import { AnalysisResult } from "@/types";

export const MOCK_AI_RESULT: AnalysisResult = {
  classification: "AI_GENERATED",
  confidence: 94.7,
  modelName: "VERITAS-ForensicNet v2.1",
  processingTime: 2847,
  fileInfo: {
    name: "uploaded_image.jpg",
    size: 0,
    type: "image/jpeg",
    dimensions: { width: 1024, height: 1024 },
    lastModified: Date.now(),
  },
  metadata: {
    hasExif: false,
    colorProfile: "sRGB",
    bitDepth: 8,
    compression: "JPEG/DCT",
    noisePattern: "Uniform (synthetic)",
    frequencyAnomaly: true,
    thumbnailMatch: false,
  },
  forensicIndicators: [
    {
      id: "noise-analysis",
      name: "Noise Pattern Analysis (Mock)",
      value: "Synthetic Uniform",
      status: "suspicious",
      description:
        "[DEMO DATA] Statistical uniformity is commonly simulated in AI synthesis. This is a simulated finding.",
      weight: 0.92,
    },
    {
      id: "exif-data",
      name: "EXIF Metadata (Mock)",
      value: "Absent",
      status: "suspicious",
      description:
        "[DEMO DATA] No camera metadata found. This is a simulated finding.",
      weight: 0.85,
    },
    {
      id: "frequency-domain",
      name: "Frequency Domain Analysis (Mock)",
      value: "Anomalous Peaks Detected",
      status: "suspicious",
      description:
        "[DEMO DATA] DCT frequency coefficients show simulated grid artifacts - a hallmark of GAN-based image generation.",
      weight: 0.88,
    },
    {
      id: "color-coherence",
      name: "Color Coherence (Mock)",
      value: "Inconsistent",
      status: "warning",
      description:
        "[DEMO DATA] Local color transitions deviate from natural photographic distributions in 3 simulated regions of interest.",
      weight: 0.71,
    },
    {
      id: "edge-analysis",
      name: "Edge Consistency (Mock)",
      value: "Over-smoothed",
      status: "warning",
      description:
        "[DEMO DATA] Simulated edge sharpness and micro-texture patterns indicating post-processing.",
      weight: 0.78,
    },
    {
      id: "thumbnail-match",
      name: "Embedded Thumbnail Match (Mock)",
      value: "N/A - No Thumbnail",
      status: "info",
      description:
        "[DEMO DATA] No embedded thumbnail to cross-validate against full-resolution image data.",
      weight: 0.0,
    },
    {
      id: "compression",
      name: "Compression Artifacts (Mock)",
      value: "Atypical Distribution",
      status: "suspicious",
      description:
        "[DEMO DATA] JPEG compression block artifacts show irregular quantization tables. This is a simulated finding.",
      weight: 0.83,
    },
    {
      id: "ela-analysis",
      name: "Error Level Analysis (ELA) (Mock)",
      value: "Uniform Error Levels",
      status: "clean",
      description:
        "[DEMO DATA] ELA shows relatively uniform error levels with no localized splicing artifacts detected.",
      weight: 0.4,
    },
  ],
};

export function generateMockResult(fileInfo: {
  name: string;
  size: number;
  type: string;
  lastModified: number;
}): AnalysisResult {
  return {
    ...MOCK_AI_RESULT,
    fileInfo: {
      ...MOCK_AI_RESULT.fileInfo,
      name: fileInfo.name,
      size: fileInfo.size,
      type: fileInfo.type,
      lastModified: fileInfo.lastModified,
    },
  };
}