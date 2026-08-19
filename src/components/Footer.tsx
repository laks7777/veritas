import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-background mt-auto">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-3">
            <span className="font-serif text-2xl tracking-[0.25em] text-white block">
              VERITAS
            </span>
            <p className="text-xs font-sans text-neutral-400 max-w-sm leading-relaxed">
              AI-assisted digital media forensics platform. Advancing provenance verification and authenticity intelligence for investigative workflows.
            </p>
          </div>

          {/* Nav Links Col */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[10px] font-sans tracking-[0.25em] text-neutral-400 uppercase block">
              PLATFORM
            </span>
            <div className="flex flex-col space-y-2">
              <Link
                href="/"
                className="text-xs font-sans text-neutral-300 hover:text-white transition-colors"
              >
                Overview
              </Link>
              <Link
                href="/analyze"
                className="text-xs font-sans text-neutral-300 hover:text-white transition-colors"
              >
                Analyze Media
              </Link>
              <Link
                href="/#investigations"
                className="text-xs font-sans text-neutral-300 hover:text-white transition-colors"
              >
                Forensic Methodology
              </Link>
            </div>
          </div>

          {/* Meta Col */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-[10px] font-sans tracking-[0.25em] text-neutral-400 uppercase block">
              SPECIFICATION
            </span>
            <p className="text-[11px] font-sans text-neutral-400 leading-relaxed">
              VERSION 2.1 — FORENSIC SUITE<br />
              DEVELOPMENT PROTOTYPE — PROBABILISTIC ANALYSIS
            </p>
          </div>
        </div>

        <div className="pt-12 mt-12 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-sans text-neutral-400">
          <p>© {new Date().getFullYear()} VERITAS LABS. ALL RIGHTS RESERVED.</p>
          <p className="tracking-wider text-neutral-400">FOR INVESTIGATIVE EVALUATION</p>
        </div>
      </div>
    </footer>
  );
}