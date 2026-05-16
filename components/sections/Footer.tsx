"use client";
import { motion } from "framer-motion";
import { Mail, PhoneIcon, ArrowUp, Heart } from "lucide-react";
import Image from "next/image";

const FOOTER_LINKS = [
  {
    title: "Navigation",
    links: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
    ],
  },
  {
    title: "More",
    links: [
      { label: "Experience", href: "#experience" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

const emailSubject = encodeURIComponent("Project Collaboration");

const emailBody = encodeURIComponent(
  "Hello Bilal, I'm interested in working with you on a project. Please let me know when you're available to discuss.",
);

const SOCIALS = [
  {
    icon: PhoneIcon,
    href: "https://api.whatsapp.com/send?phone=6281991394591&text=Hello%20Bilal%2C%20I%E2%80%99m%20interested%20in%20working%20with%20you%20on%20a%20project.%20Please%20let%20me%20know%20when%20you%E2%80%99re%20available%20to%20discuss.",
    label: "Whatsapp",
  },
  {
    icon: Mail,
    href: `https://mail.google.com/mail/?view=cm&fs=1&to=dev.bilalhafidz@gmail.com&su=${emailSubject}&body=${emailBody}`,
    label: "Email",
    color: "#8B5CF6",
  },
];

const scrollTo = (href: string) => {
  document
    .getElementById(href.replace("#", ""))
    ?.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5">
      {/* Background */}
      <div className="absolute inset-0 bg-[#030508]" />
      <div className="absolute inset-0 grid-overlay opacity-20" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(0,217,255,0.04) 0%, transparent 60%)",
        }}
      />

      {/* Top glowing divider */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(0,217,255,0.4), rgba(139,92,246,0.4), transparent)",
        }}
      />

      <div className="container relative z-10 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-9 h-9 flex items-center justify-center">
                <div
                  className="absolute inset-0 rounded-lg animate-spin-slow"
                  style={{
                    background: "linear-gradient(135deg, #00D9FF, #8B5CF6)",
                    padding: "1px",
                  }}
                >
                  <div className="w-full h-full rounded-lg bg-[#030508]" />
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
            </div>
            <p className="text-[#F8FAFC]/40 text-sm leading-relaxed mb-5 max-w-xs">
              Full Stack Developer crafting intelligent, high-performance
              digital experiences that push the boundaries of what&apos;s
              possible on the web.
            </p>

            {/* Social icons */}
            <div>
              <div className="flex gap-3">
                {SOCIALS.map(({ icon: Icon, href, label, color }) => {
                  const isMailto = href.startsWith("mailto:");

                  return (
                    <a
                      key={label}
                      href={href}
                      target={isMailto ? undefined : "_blank"}
                      rel={isMailto ? undefined : "noopener noreferrer"}
                      aria-label={label}
                      id={`contact-social-${label.toLowerCase()}`}
                      className="w-10 h-10 rounded-xl glass border border-white/8 flex items-center justify-center text-[#F8FAFC]/50 hover:border-[rgba(0,217,255,0.3)] transition-all duration-300 group"
                      style={{ "--hover-color": color } as React.CSSProperties}
                    >
                      <Icon
                        size={16}
                        className="group-hover:text-[#00D9FF] transition-colors"
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_LINKS.map(({ title, links }) => (
            <div key={title}>
              <h4 className="text-xs font-mono text-[#F8FAFC]/30 tracking-widest mb-4">
                {title.toUpperCase()}
              </h4>
              <ul className="space-y-2">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <button
                      onClick={() => scrollTo(href)}
                      id={`footer-link-${label.toLowerCase()}`}
                      className="text-sm text-[#F8FAFC]/50 hover:text-[#00D9FF] transition-colors duration-200 text-left"
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 text-xs text-[#F8FAFC]/30">
            <span>© {new Date().getFullYear()} Bilal AlHafidz</span>
          </div>

          {/* HUD details */}
          <div className="hidden md:flex items-center gap-4 text-[9px] font-mono text-[#F8FAFC]/20 tracking-widest">
            <span>NEXT.JS 16</span>
            <span className="text-[#00D9FF]/30">·</span>
            <span>REACT 19</span>
            <span className="text-[#00D9FF]/30">·</span>
            <span>TAILWIND v4</span>
            <span className="text-[#00D9FF]/30">·</span>
            <span>FRAMER MOTION</span>
          </div>

          {/* Scroll to top */}
          <motion.button
            whileHover={{ y: -3 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-9 h-9 rounded-xl glass border border-white/10 flex items-center justify-center text-[#F8FAFC]/40 hover:text-[#00D9FF] hover:border-[rgba(0,217,255,0.3)] transition-all duration-300"
            id="footer-scroll-top"
            aria-label="Scroll to top"
          >
            <ArrowUp size={15} />
          </motion.button>
        </div>
      </div>

      {/* Bottom decorative elements */}
      <div className="flex items-center justify-center gap-2 py-3 border-t border-white/[0.03]">
        {Array.from({ length: 7 }).map((_, i) => (
          <div
            key={i}
            className="rounded-full"
            style={{
              width: i === 3 ? 24 : i === 2 || i === 4 ? 12 : 6,
              height: 2,
              background:
                i === 3
                  ? "linear-gradient(90deg, #00D9FF, #8B5CF6)"
                  : "rgba(255,255,255,0.08)",
            }}
          />
        ))}
      </div>
    </footer>
  );
}
