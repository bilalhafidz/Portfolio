"use client";
import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      // Active section tracking
      const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = useCallback((href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 inset-x-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(5,5,5,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(0,217,255,0.08)" : "none",
          boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.5)" : "none",
        }}
      >
        <div className="container flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <button
            onClick={() => scrollTo("#home")}
            className="flex items-center gap-2 group"
            id="nav-logo"
          >
            <div className="relative w-9 h-9 flex items-center justify-center">
              <div
                className="absolute inset-0 rounded-lg animate-spin-slow"
                style={{
                  background: "linear-gradient(135deg, #00D9FF, #8B5CF6)",
                  padding: "1px",
                }}
              >
                <div className="w-full h-full rounded-lg bg-[#050505]" />
              </div>
              <div className="relative w-[18px] h-[18px]">
                <Image
                  src="/logo.png"
                  alt="Bilal Logo"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>
            <span
              className="text-lg font-black tracking-tight text-gradient-static"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              BILAL ALHAFIDZ
            </span>
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ label, href }) => {
              const id = href.replace("#", "");
              return (
                <li key={href}>
                  <button
                    onClick={() => scrollTo(href)}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 relative group ${
                      active === id
                        ? "text-[#00D9FF]"
                        : "text-[#F8FAFC]/60 hover:text-[#F8FAFC]"
                    }`}
                    id={`nav-${id}`}
                  >
                    {active === id && (
                      <span
                        className="absolute inset-0 rounded-lg"
                        style={{
                          background: "rgba(0,217,255,0.08)",
                          border: "1px solid rgba(0,217,255,0.15)",
                        }}
                      />
                    )}
                    <span className="relative">{label}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scrollTo("#contact")}
              className="btn-primary px-5 py-2 text-sm"
              id="nav-cta"
            >
              <span>Hire Me</span>
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-[rgba(0,217,255,0.2)] text-[#00D9FF] hover:bg-[rgba(0,217,255,0.08)] transition-all"
            id="nav-mobile-toggle"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className="fixed inset-0 z-40 md:hidden transition-all duration-400"
        style={{
          pointerEvents: menuOpen ? "all" : "none",
          opacity: menuOpen ? 1 : 0,
        }}
      >
        <div
          className="absolute inset-0 bg-[#050505]/80"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className="absolute top-16 inset-x-4 rounded-2xl glass-navy p-6 flex flex-col gap-2"
          style={{
            transform: menuOpen
              ? "translateY(0) scale(1)"
              : "translateY(-10px) scale(0.97)",
            transition: "transform 0.3s ease, opacity 0.3s ease",
            opacity: menuOpen ? 1 : 0,
          }}
        >
          {NAV_LINKS.map(({ label, href }) => {
            const id = href.replace("#", "");
            return (
              <button
                key={href}
                onClick={() => scrollTo(href)}
                className={`w-full text-left px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 ${
                  active === id
                    ? "bg-[rgba(0,217,255,0.1)] text-[#00D9FF] border border-[rgba(0,217,255,0.2)]"
                    : "text-[#F8FAFC]/70 hover:bg-white/5 hover:text-white"
                }`}
                id={`nav-mobile-${id}`}
              >
                {label}
              </button>
            );
          })}
          <div className="pt-2 border-t border-white/5">
            <button
              onClick={() => scrollTo("#contact")}
              className="btn-primary w-full py-3 text-sm justify-center"
            >
              <span>Hire Me</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
