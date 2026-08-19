"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "HOME" },
  { href: "/analyze", label: "ANALYZE" },
  { href: "/#investigations", label: "INVESTIGATIONS" },
  { href: "/#reports", label: "REPORTS" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Brand */}
          <Link href="/" className="flex flex-col group">
            <span className="font-serif text-xl sm:text-2xl tracking-[0.25em] text-white font-medium group-hover:text-neutral-300 transition-colors">
              VERITAS
            </span>
            <span className="text-[8px] sm:text-[9px] font-sans tracking-[0.35em] text-neutral-400 uppercase -mt-0.5">
              DIGITAL MEDIA FORENSICS
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={label}
                  href={href}
                  className={cn(
                    "text-xs font-sans tracking-[0.2em] transition-colors relative py-1",
                    isActive
                      ? "text-white"
                      : "text-neutral-400 hover:text-white"
                  )}
                >
                  {label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-crimson" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Status / CTA */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-crimson animate-pulse" />
              <span className="text-[10px] font-sans tracking-[0.2em] text-neutral-400 uppercase">
                SYSTEM ACTIVE
              </span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-neutral-300 hover:text-white p-2"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-surface px-6 py-6 space-y-4">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "block text-sm font-sans tracking-[0.2em] py-2",
                pathname === href ? "text-white font-medium" : "text-neutral-400"
              )}
            >
              {label}
            </Link>
          ))}
          <div className="pt-4 border-t border-white/10 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-crimson" />
            <span className="text-[10px] font-sans tracking-[0.2em] text-neutral-400 uppercase">
              SYSTEM ACTIVE
            </span>
          </div>
        </div>
      )}
    </nav>
  );
}