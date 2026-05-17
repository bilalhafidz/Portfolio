"use client";
import { useEffect, useState, useRef } from "react";
import { PhoneIcon, Mail, ArrowDown, ExternalLink } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";

const TYPING_STRINGS = [
  "Full Stack Developer",
  "UI/UX Engineer",
  "React Specialist",
  "Next.js Expert",
  "API Architect",
  "Cloud Innovator",
];

const emailSubject = encodeURIComponent("Project Collaboration");

const emailBody = encodeURIComponent(
  "Hello Bilal, I'm interested in working with you on a project. Please let me know when you're available to discuss.",
);

const SOCIAL_LINKS = [
  {
    icon: PhoneIcon,
    href: "https://api.whatsapp.com/send?phone=6281991394591&text=Hello%20Bilal%2C%20I%E2%80%99m%20interested%20in%20working%20with%20you%20on%20a%20project.%20Please%20let%20me%20know%20when%20you%E2%80%99re%20available%20to%20discuss.",
    label: "Whatsapp",
  },
  {
    icon: Mail,
    href: `https://mail.google.com/mail/?view=cm&fs=1&to=dev.bilalhafidz@gmail.com&su=${emailSubject}&body=${emailBody}`,
    label: "Email",
  },
];

function useTypingEffect(strings: string[], speed = 80, pause = 1800) {
  const [text, setText] = useState("");
  const [strIdx, setStrIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = strings[strIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setStrIdx((s) => (s + 1) % strings.length);
    }

    setText(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, strIdx, strings, speed, pause]);

  return text;
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  const typedText = useTypingEffect(TYPING_STRINGS);
  const sectionRef = useRef<HTMLElement>(null);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 md:pt-28"
    >
      {/* Background layers */}
      <div className="absolute inset-0 grid-overlay" />
      <div className="absolute inset-0" />

      {/* Floating orbs */}
      <div className="absolute top-20 right-[15%] w-72 h-72 rounded-full pointer-events-none animate-float" />
      <div className="absolute bottom-32 left-[10%] w-56 h-56 rounded-full pointer-events-none animate-float2" />

      {/* Main content */}
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Left: Text */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Headline */}
            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="max-w-[12ch] mx-auto lg:mx-0 text-[2.5rem] leading-[1.05] sm:text-5xl md:text-6xl xl:text-7xl font-black tracking-tight mb-5 md:mb-6"
            >
              Building <span className="text-gradient">Intelligent</span>
              <br />
              Digital{" "}
              <span className="relative inline-block">
                Experiences
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  preserveAspectRatio="none"
                  style={{ height: 8 }}
                >
                  <path
                    d="M0 8 Q75 2 150 8 Q225 14 300 8"
                    stroke="url(#underline-grad)"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="underline-grad"
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="0"
                    >
                      <stop offset="0%" stopColor="#00D9FF" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </motion.h1>

            {/* Typing */}
            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="flex items-center justify-center lg:justify-start gap-2 mb-3 min-h-[32px]"
            >
              <span className="text-[#00D9FF] font-mono text-lg font-medium">
                &gt;
              </span>
              <span
                className="text-base sm:text-lg md:text-2xl font-semibold text-[#F8FAFC]/80"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {typedText}
              </span>
              <span
                className="hidden sm:inline-block w-0.5 h-6 bg-[#00D9FF] animate-blink"
                style={{ boxShadow: "0 0 8px #00D9FF" }}
              />
            </motion.div>

            {/* Description */}
            <motion.p
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-[#F8FAFC]/60 text-sm sm:text-base md:text-lg leading-relaxed mb-7 md:mb-8 max-w-md mx-auto lg:mx-0"
            >
              I craft high-performance web applications that merge elegant
              design with cutting-edge technology. Turning complex problems into
              seamless digital experiences that scale.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 md:mb-10"
            >
              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-primary w-full sm:w-auto justify-center px-6 py-3.5 text-sm font-bold"
                id="hero-view-projects"
              >
                <span>View Projects</span>
                <ExternalLink size={15} className="relative z-10" />
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-outline w-full sm:w-auto justify-center px-6 py-3.5 text-sm"
                id="hero-contact"
              >
                <Mail size={15} />
                Contact Me
              </button>
            </motion.div>

            {/* Social links */}
            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="flex flex-wrap items-center justify-center gap-3 lg:justify-start"
            >
              <span className="text-xs font-mono text-[#F8FAFC]/30 tracking-widest">
                CONNECT
              </span>

              <div className="hidden sm:block h-px max-w-[60px] flex-1 bg-gradient-to-r from-[rgba(0,217,255,0.3)] to-transparent" />

              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  id={`hero-social-${label.toLowerCase()}`}
                  className="group flex h-9 w-9 items-center justify-center rounded-lg border border-white/8 text-[#F8FAFC]/50 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(0,217,255,0.35)] hover:bg-[rgba(0,217,255,0.08)] hover:text-[#00D9FF] hover:shadow-[0_0_22px_rgba(0,217,255,0.18)]"
                  style={{ backdropFilter: "blur(8px)" }}
                >
                  <Icon
                    size={16}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="relative order-1 lg:order-2 flex items-center justify-center mb-2 lg:mb-0"
          >
            {/* Profile frame */}
            <div className="relative w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] md:w-80 md:h-80 mx-auto">
              {/* Rotating border ring */}
              <div
                className="absolute -inset-5 rounded-full animate-spin-slow"
                style={{
                  background:
                    "conic-gradient(from 0deg, #00D9FF, #8B5CF6, #22D3EE, transparent, #00D9FF)",
                  opacity: 0.4,
                  filter: "blur(1px)",
                }}
              />
              <div
                className="absolute -inset-3 rounded-full animate-spin-reverse"
                style={{
                  background:
                    "conic-gradient(from 180deg, #8B5CF6, transparent, #00D9FF, transparent)",
                  opacity: 0.25,
                }}
              />

              {/* Avatar container */}
              <div
                className="relative w-full h-full rounded-full overflow-hidden"
                style={{
                  border: "2px solid rgba(0,217,255,0.25)",
                  boxShadow:
                    "0 0 40px rgba(0,217,255,0.18), 0 0 80px rgba(139,92,246,0.12)",
                }}
              >
                {/* Image */}
                <Image
                  src="/profile.png"
                  alt="Bilal portrait"
                  fill
                  priority
                  sizes="(max-width: 640px) 240px,
                    (max-width: 768px) 280px,
                    (max-width: 1024px) 320px,
                    320px"
                  className="object-cover scale-[1.02]"
                />

                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(5,5,5,0.25), transparent 35%)",
                  }}
                />

                {/* Futuristic glow */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(circle at top right, rgba(0,217,255,0.15), transparent 40%)",
                    mixBlendMode: "screen",
                  }}
                />

                {/* Scan line */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 0%, rgba(0,217,255,0.03) 50%, transparent 100%)",
                    animation: "scan 5s linear infinite",
                  }}
                />
              </div>

              {/* HUD corners */}
              {[
                "top-0 left-0",
                "top-0 right-0 rotate-90",
                "bottom-0 left-0 -rotate-90",
                "bottom-0 right-0 rotate-180",
              ].map((cls, i) => (
                <div key={i} className={`absolute ${cls} w-5 h-5`}>
                  <svg viewBox="0 0 20 20" fill="none">
                    <path
                      d="M1 10 L1 1 L10 1"
                      stroke="#00D9FF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      opacity="0.7"
                    />
                  </svg>
                </div>
              ))}

              {/* Floating badges */}
              <div
                className="absolute right-0 top-4 md:-right-8 md:top-8 glass-blue rounded-xl p-2.5 md:p-3 animate-float"
                style={{ boxShadow: "0 4px 20px rgba(0,217,255,0.15)" }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#00D9FF] animate-pulse" />
                  <span className="text-[10px] font-mono text-[#00D9FF]">
                    FREELANCER
                  </span>
                </div>
              </div>
              <div
                className="absolute left-0 bottom-8 md:-left-6 md:bottom-12 glass-blue rounded-xl px-2.5 py-1.5 md:px-3 md:py-2 animate-float-delay text-xs font-mono font-bold text-[#8B5CF6]"
                style={{
                  boxShadow: "0 4px 20px rgba(139,92,246,0.15)",
                  border: "1px solid rgba(139,92,246,0.2)",
                }}
              >
                3+ yrs
              </div>
            </div>

            {/* Code snippet card */}
            <div
              className="absolute -bottom-4 -right-4 md:right-0 glass-navy rounded-xl p-4 w-52 hidden lg:block"
              style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.5)" }}
            >
              <div className="flex items-center gap-1.5 mb-2">
                {["#FF5F57", "#FFBD2E", "#28CA41"].map((c, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full"
                    style={{ background: c }}
                  />
                ))}
              </div>
              <pre className="text-[9px] font-mono leading-relaxed text-[#F8FAFC]/50 whitespace-pre-wrap overflow-hidden">
                <span className="text-[#8B5CF6]">const</span>
                <span className="text-[#00D9FF]"> developer</span>
                <span className="text-white/40"> = {"{"}</span>
                {"\n"}
                <span className="text-white/40"> name: </span>
                <span className="text-[#22D3EE]">"Bilal AlHafidz"</span>
                {",\n"}
                <span className="text-white/40"> stack: </span>
                <span className="text-[#22D3EE]">["Next","React"]</span>
                {",\n"}
                <span className="text-white/40"> status: </span>
                <span className="text-green-400">true ✓</span>
                {"\n"}
                <span className="text-white/40">{"}"}</span>
              </pre>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          onClick={scrollToAbout}
          className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white/30 hover:text-[#00D9FF] transition-colors group"
          id="hero-scroll-down"
        >
          <span className="text-xs font-mono tracking-widest">SCROLL</span>
          <ArrowDown size={16} className="animate-bounce" />
        </motion.button>
      </div>
    </section>
  );
}
