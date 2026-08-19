"use client";
import { useCallback, useRef, useState, useEffect } from "react";
import { Upload, X, AlertCircle } from "lucide-react";
import { GlowButton } from "./ui/GlowButton";
import { formatBytes } from "@/lib/utils";
import { cn } from "@/lib/utils";

const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/webp"];
const MAX_SIZE_MB = 15;
const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024;

interface ImageUploaderProps {
  onAnalyze: (file: File) => void;
}

export function ImageUploader({ onAnalyze }: ImageUploaderProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  const validateFile = (f: File): string | null => {
    if (!ACCEPTED_TYPES.includes(f.type)) {
      return "Unsupported format. Please upload JPG, JPEG, PNG, or WEBP.";
    }
    if (f.size > MAX_SIZE_BYTES) {
      return `File size exceeds ${MAX_SIZE_MB}MB limit. Selected file: ${formatBytes(f.size)}.`;
    }
    return null;
  };

  const handleFile = useCallback((f: File) => {
    setError(null);
    const err = validateFile(f);
    if (err) {
      setError(err);
      setFile(null);
      setPreview(null);
      return;
    }
    setFile(f);
    const url = URL.createObjectURL(f);
    setPreview(url);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);
      const dropped = e.dataTransfer.files?.[0];
      if (dropped) handleFile(dropped);
    },
    [handleFile]
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const selected = e.target.files?.[0];
      if (selected) handleFile(selected);
      e.target.value = "";
    },
    [handleFile]
  );

  const handleRemove = () => {
    setFile(null);
    if (preview) URL.revokeObjectURL(preview);
    setPreview(null);
    setError(null);
  };

  return (
    <div className="space-y-6">
      {!file ? (
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={cn(
            "relative border border-dashed rounded-none cursor-pointer transition-all duration-300",
            "flex flex-col items-center justify-center min-h-[360px] p-10 sm:p-14 text-center group",
            isDragging
              ? "border-white/50 bg-white/[0.04]"
              : error
              ? "border-crimson/50 bg-crimson/[0.03]"
              : "border-white/15 bg-surface hover:border-white/30 hover:bg-surface-100"
          )}
        >
          <div className="w-14 h-14 rounded-none border border-white/10 flex items-center justify-center mb-6 text-neutral-400 group-hover:text-white group-hover:border-white/30 transition-all">
            <Upload className="w-6 h-6 stroke-[1.5]" />
          </div>

          <span className="text-[10px] font-sans tracking-[0.25em] text-neutral-400 uppercase mb-2">
            SELECT EVIDENCE FILE
          </span>

          <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal mb-3 tracking-wide">
            {isDragging ? "Drop Media to Upload" : "DROP MEDIA HERE"}
          </h3>

          <p className="font-sans text-neutral-400 text-xs sm:text-sm max-w-sm mb-6 font-light">
            Drag and drop your image file here, or browse from your device storage.
          </p>

          <GlowButton
            variant="outline"
            size="md"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              fileInputRef.current?.click();
            }}
            className="mb-8"
          >
            CHOOSE FILE
          </GlowButton>

          <div className="flex items-center gap-3 text-[11px] font-sans text-neutral-400 tracking-wider">
            <span>JPG · JPEG · PNG · WEBP</span>
            <span>—</span>
            <span>MAX {MAX_SIZE_MB}MB</span>
          </div>
        </div>
      ) : (
        /* Preview State */
        <div className="border border-white/10 bg-surface">
          {/* Header Bar */}
          <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-crimson" />
              <span className="text-xs font-sans tracking-[0.2em] text-neutral-300 uppercase">
                EVIDENCE READY FOR ANALYSIS
              </span>
            </div>
            <button
              onClick={handleRemove}
              className="text-xs font-sans tracking-[0.15em] text-neutral-400 hover:text-white uppercase transition-colors flex items-center gap-1.5 py-1 px-2"
            >
              <X className="w-3.5 h-3.5" />
              REMOVE
            </button>
          </div>

          {/* Media Viewport */}
          <div className="p-6 sm:p-8 bg-black/60 flex items-center justify-center min-h-[320px]">
            <img
              src={preview!}
              alt="Evidence Preview"
              className="max-h-96 max-w-full object-contain border border-white/10"
            />
          </div>

          {/* File Meta & Action Row */}
          <div className="p-6 sm:p-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="text-[10px] font-sans tracking-[0.2em] text-neutral-400 uppercase block">
                FILE DETAILS
              </span>
              <p className="font-sans text-sm text-white font-medium truncate max-w-md">
                {file.name}
              </p>
              <p className="text-xs font-sans text-neutral-400">
                {formatBytes(file.size)} &nbsp;·&nbsp; {file.type.toUpperCase()}
              </p>
            </div>

            <div className="flex items-center gap-4 w-full sm:w-auto">
              <GlowButton
                variant="outline"
                size="md"
                onClick={handleRemove}
                className="w-1/3 sm:w-auto"
              >
                RE-UPLOAD
              </GlowButton>
              <GlowButton
                variant="primary"
                size="lg"
                onClick={() => onAnalyze(file)}
                className="flex-1 sm:flex-initial"
              >
                ANALYZE MEDIA
              </GlowButton>
            </div>
          </div>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="flex items-start gap-3 p-4 bg-crimson/10 border border-crimson/30">
          <AlertCircle className="w-4 h-4 text-crimson-light shrink-0 mt-0.5" />
          <p className="text-xs font-sans text-neutral-200">{error}</p>
        </div>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        onChange={handleInputChange}
        className="hidden"
      />
    </div>
  );
}