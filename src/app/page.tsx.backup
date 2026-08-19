import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { GlowButton } from "@/components/ui/GlowButton";

const EDITORIAL_SECTIONS = [
  {
    id: "detection",
    number: "01",
    tag: "01 — DETECTION",
    title: "SEE BEYOND\nTHE IMAGE.",
    subtitle: "AI-GENERATED MEDIA IDENTIFICATION",
    description:
      "Modern generative models produce hyper-realistic visual artifacts that deceive the human eye. VERITAS evaluates subtle statistical anomalies across spatial and latent dimensions to detect diffusion, transformer, and GAN-based synthesis.",
    points: [
      "Diffusion artifact profiling",
      "Latent noise distribution analysis",
      "Frequency spectrum decomposition",
    ],
  },
  {
    id: "forensics",
    number: "02",
    tag: "02 — FORENSICS",
    title: "EVERY FILE\nLEAVES EVIDENCE.",
    subtitle: "MULTI-LAYERED STRUCTURAL INSPECTION",
    description:
      "Authentic camera sensors impart physical characteristics—from sensor noise patterns to unique quantization tables. Every digital file preserves an immutable fingerprint of its creation environment.",
    points: [
      "Discrete Cosine Transform (DCT) anomaly mapping",
      "Error Level Analysis (ELA) verification",
      "EXIF and container metadata cross-validation",
    ],
  },
  {
    id: "investigation",
    number: "03",
    tag: "03 — INVESTIGATION",
    title: "FROM SUSPICION\nTO EVIDENCE.",
    subtitle: "INVESTIGATOR-FOCUSED WORKFLOW",
    description:
      "Built for intelligence analysts, journalists, and digital forensics professionals. VERITAS transforms probabilistic AI outputs into structured, transparent indicators suited for rigorous investigative evaluation.",
    points: [
      "Defensible probabilistic scoring",
      "Transparent multi-signal indicators",
      "Audit-ready technical documentation",
    ],
  },
];

const FEATURE_CARDS = [
  {
    number: "01",
    title: "AI DETECTION",
    headline: "Synthetic Signal Isolation",
    description:
      "Identifies structural markers characteristic of state-of-the-art generative models and automated manipulation pipelines.",
  },
  {
    number: "02",
    title: "FORENSIC ANALYSIS",
    headline: "Pixel & Frequency Decomposition",
    description:
      "Examines compression quantization, sensor noise consistency, and frequency distributions at the byte level.",
  },
  {
    number: "03",
    title: "INVESTIGATION",
    headline: "Structured Evidence Synthesis",
    description:
      "Correlates independent forensic signals into a cohesive, probabilistic report designed for human verification.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-neutral-100 selection:bg-crimson selection:text-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-between pt-32 pb-20 px-6 sm:px-8 lg:px-12 border-b border-white/[0.08] overflow-hidden">
        {/* Subtle monochromatic background visual */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] sm:h-[600px] rounded-full bg-radial-gradient from-white/[0.03] via-crimson/[0.03] to-transparent blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
        </div>

        {/* Top Tagline */}
        <div className="relative max-w-7xl mx-auto w-full mb-12">
          <div className="inline-flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-crimson" />
            <span className="text-[10px] sm:text-xs font-sans tracking-[0.25em] text-neutral-400 uppercase">
              AUTHENTICITY INTELLIGENCE & DIGITAL MEDIA FORENSICS
            </span>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto w-full my-auto py-8">
          <div className="max-w-5xl">
            <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-white font-normal leading-[0.92] uppercase">
              Verify what <br />
              <span className="italic font-serif font-light text-neutral-300">you can't</span> trust.
            </h1>

            <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
              <div className="md:col-span-7">
                <p className="font-sans text-base sm:text-lg text-neutral-400 font-light leading-relaxed max-w-xl">
                  AI-assisted digital media forensics for detecting potentially manipulated and AI-generated content with mathematical rigor.
                </p>
              </div>

              <div className="md:col-span-5 flex flex-col sm:flex-row md:flex-col lg:flex-row items-start sm:items-center md:items-start lg:items-center gap-4">
                <Link href="/analyze" className="w-full sm:w-auto">
                  <GlowButton variant="white" size="lg" className="w-full sm:w-auto">
                    ANALYZE MEDIA
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </GlowButton>
                </Link>
                <Link
                  href="#investigations"
                  className="inline-flex items-center gap-2 text-xs font-sans tracking-[0.2em] uppercase text-neutral-400 hover:text-white transition-colors py-3 px-2"
                >
                  EXPLORE VERITAS
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Bottom Specification Bar */}
        <div className="relative max-w-7xl mx-auto w-full pt-12 border-t border-white/[0.06] grid grid-cols-2 md:grid-cols-4 gap-6 text-[11px] font-sans text-neutral-400 tracking-wider">
          <div>
            <span className="block text-neutral-400 text-[9px] uppercase tracking-[0.2em]">CAPABILITY</span>
            <span className="text-neutral-200">MULTI-SIGNAL AI FORENSICS</span>
          </div>
          <div>
            <span className="block text-neutral-400 text-[9px] uppercase tracking-[0.2em]">TARGET DOMAINS</span>
            <span className="text-neutral-200">DIFFUSION / GAN / HYBRID</span>
          </div>
          <div>
            <span className="block text-neutral-400 text-[9px] uppercase tracking-[0.2em]">EVIDENCE ARTIFACTS</span>
            <span className="text-neutral-200">8+ INDEPENDENT SIGNALS</span>
          </div>
          <div>
            <span className="block text-neutral-400 text-[9px] uppercase tracking-[0.2em]">EVALUATION ENGINE</span>
            <span className="text-neutral-200">VERITAS-NET V2.1</span>
          </div>
        </div>
      </section>

      {/* Feature Cards Grid (01 / 02 / 03) */}
      <section id="features" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-[10px] font-sans tracking-[0.3em] text-crimson uppercase block mb-3">
                CORE CAPABILITIES
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal">
                Structured Forensic Intelligence
              </h2>
            </div>
            <p className="font-sans text-xs sm:text-sm text-neutral-400 max-w-md leading-relaxed">
              Designed to replace intuition with quantifiable forensic indicators, isolating synthetic generation artifacts across the entire image pipeline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURE_CARDS.map((card) => (
              <div
                key={card.number}
                className="group relative bg-surface border border-white/10 p-8 sm:p-10 flex flex-col justify-between min-h-[340px] hover:border-white/25 transition-all duration-300"
              >
                <div>
                  <div className="flex items-baseline justify-between border-b border-white/[0.06] pb-6 mb-8">
                    <span className="font-serif text-3xl sm:text-4xl text-neutral-400 group-hover:text-white transition-colors">
                      {card.number}
                    </span>
                    <span className="text-[10px] font-sans tracking-[0.25em] text-neutral-400 uppercase">
                      {card.title}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl text-white mb-4">
                    {card.headline}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {card.description}
                  </p>
                </div>
                <div className="pt-8 flex items-center justify-between border-t border-white/[0.04]">
                  <span className="text-[9px] font-sans tracking-[0.2em] text-neutral-400 uppercase">
                    SYSTEM COMPONENT
                  </span>
                  <div className="w-1.5 h-1.5 bg-neutral-600 group-hover:bg-crimson transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Sections (01, 02, 03) */}
      <section id="investigations" className="divide-y divide-white/[0.08]">
        {EDITORIAL_SECTIONS.map((section, idx) => (
          <div key={section.id} className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left col: Big editorial header */}
              <div className="lg:col-span-6 space-y-6">
                <span className="text-[10px] sm:text-xs font-sans tracking-[0.3em] text-crimson uppercase block font-medium">
                  {section.tag}
                </span>
                <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-[1.05] whitespace-pre-line">
                  {section.title}
                </h2>
                <div className="w-12 h-[1px] bg-white/20" />
              </div>

              {/* Right col: Detailed explanation & points */}
              <div className="lg:col-span-6 space-y-8 lg:pt-4">
                <span className="text-[10px] font-sans tracking-[0.25em] text-neutral-400 uppercase block">
                  {section.subtitle}
                </span>
                <p className="font-sans text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                  {section.description}
                </p>

                <div className="space-y-3 pt-4 border-t border-white/[0.06]">
                  {section.points.map((point) => (
                    <div key={point} className="flex items-center gap-3">
                      <div className="w-1 h-1 bg-crimson" />
                      <span className="font-sans text-xs sm:text-sm text-neutral-400">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Editorial CTA Section */}
      <section id="reports" className="py-28 sm:py-36 px-6 sm:px-8 lg:px-12 border-t border-white/[0.08] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-radial-gradient from-crimson/[0.08] to-transparent blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto text-center space-y-8">
          <span className="text-[10px] sm:text-xs font-sans tracking-[0.3em] text-neutral-400 uppercase block">
            PROVENANCE INTELLIGENCE
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-white font-normal tracking-tight">
            Ready to inspect media authenticity?
          </h2>
          <p className="font-sans text-sm sm:text-base text-neutral-400 max-w-xl mx-auto leading-relaxed font-light">
            Upload any digital image to receive an immediate, multi-signal probabilistic assessment and detailed forensic breakdown.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/analyze">
              <GlowButton variant="white" size="lg">
                ANALYZE MEDIA
                <ArrowRight className="w-4 h-4 ml-1" />
              </GlowButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}