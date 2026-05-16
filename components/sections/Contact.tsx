"use client";
import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle,
  AlertCircle,
  PhoneIcon,
} from "lucide-react";

const emailSubject = encodeURIComponent("Project Collaboration");

const emailBody = encodeURIComponent(
  "Hello Bilal, I'm interested in working with you on a project. Please let me know when you're available to discuss.",
);

const SOCIALS = [
  {
    icon: PhoneIcon,
    href: "https://api.whatsapp.com/send?phone=6281991394591&text=Hello%20Bilal%2C%20I%E2%80%99m%20interested%20in%20working%20with%20you%20on%20a%20project.%20Please%20let%20me%20know%20when%20you%E2%80%99re%20available%20to%20discuss.",
    label: "Whatsapp",
    color: "#22D3EE",
  },
  {
    icon: Mail,
    href: `https://mail.google.com/mail/?view=cm&fs=1&to=dev.bilalhafidz@gmail.com&su=${emailSubject}&body=${emailBody}`,
    label: "Email",
    color: "#8B5CF6",
  },
];

const INFO = [
  {
    icon: Mail,
    label: "Email",
    value: "dev.bilalhafidz@gmail.com",
    color: "#00D9FF",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Available Worldwide · Remote",
    color: "#8B5CF6",
  },
  {
    icon: Phone,
    label: "Response Time",
    value: "Within 24 hours",
    color: "#22D3EE",
  },
];

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [focused, setFocused] = useState<string | null>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    mousePos.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Failed to send message.");
      }

      setStatus("success");

      setTimeout(() => {
        setStatus("idle");
        setForm({ name: "", email: "", subject: "", message: "" });
      }, 4000);
    } catch (error) {
      console.error(error);
      setStatus("error");

      setTimeout(() => {
        setStatus("idle");
      }, 4000);
    }
  };

  const inputClass = (field: string) => `
    w-full bg-white/[0.03] border rounded-xl px-4 py-3 text-sm text-[#F8FAFC] placeholder:text-white/25
    outline-none transition-all duration-300 font-[inherit]
    ${
      focused === field
        ? "border-[rgba(0,217,255,0.5)] shadow-[0_0_20px_rgba(0,217,255,0.12)]"
        : "border-white/8 hover:border-white/15"
    }
  `;

  return (
    <section
      id="contact"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="section-pad relative overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 80%, rgba(139,92,246,0.06) 0%, transparent 60%)",
        }}
      />
      <div className="absolute inset-0 grid-overlay opacity-30" />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="section-title text-gradient mb-4">
            Let&apos;s Build Something Great
          </h2>
          <p className="text-[#F8FAFC]/50 max-w-xl mx-auto">
            Have a project in mind? I&apos;m available for freelance, full-time
            positions, and exciting collaborations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {INFO.map(({ icon: Icon, label, value, color }, i) => (
              <div
                key={label}
                className="glass rounded-xl p-5 flex items-center gap-4 glow-card"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `${color}12`,
                    border: `1px solid ${color}30`,
                  }}
                >
                  <Icon size={18} style={{ color }} />
                </div>
                <div>
                  <div className="text-xs text-[#F8FAFC]/35 mb-0.5 font-mono tracking-wider">
                    {label.toUpperCase()}
                  </div>
                  <div className="text-sm font-medium text-[#F8FAFC]/85">
                    {value}
                  </div>
                </div>
              </div>
            ))}

            {/* Availability badge */}
            <div className="glass rounded-xl p-5 neon-border">
              <div className="flex items-center gap-2 mb-3">
                <div
                  className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse"
                  style={{ boxShadow: "0 0 8px #34D399" }}
                />
                <span className="text-xs font-mono text-[#34D399] tracking-wider">
                  AVAILABLE FOR HIRE
                </span>
              </div>
              <p className="text-xs text-[#F8FAFC]/50 leading-relaxed">
                Currently accepting new projects. Let&apos;s discuss how I can
                help bring your vision to life.
              </p>
            </div>

            {/* Social links */}
            <div>
              <p className="text-xs font-mono text-[#F8FAFC]/30 tracking-widest mb-3">
                FIND ME ON
              </p>

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
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="glass-navy rounded-2xl p-8 space-y-5"
            >
              {/* Name + Email row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-xs font-mono text-[#F8FAFC]/40 tracking-wider mb-1.5"
                    htmlFor="contact-name"
                  >
                    YOUR NAME
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    placeholder="John Smith"
                    className={inputClass("name")}
                    suppressHydrationWarning
                  />
                </div>
                <div>
                  <label
                    className="block text-xs font-mono text-[#F8FAFC]/40 tracking-wider mb-1.5"
                    htmlFor="contact-email"
                  >
                    EMAIL ADDRESS
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    placeholder="john@company.com"
                    className={inputClass("email")}
                    suppressHydrationWarning
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  className="block text-xs font-mono text-[#F8FAFC]/40 tracking-wider mb-1.5"
                  htmlFor="contact-subject"
                >
                  SUBJECT
                </label>
                <select
                  id="contact-subject"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  onFocus={() => setFocused("subject")}
                  onBlur={() => setFocused(null)}
                  className={inputClass("subject")}
                  style={{ appearance: "none" }}
                  suppressHydrationWarning
                >
                  <option value="" style={{ background: "#0B1120" }}>
                    Select a topic...
                  </option>
                  <option value="project" style={{ background: "#0B1120" }}>
                    New Project
                  </option>
                  <option value="freelance" style={{ background: "#0B1120" }}>
                    Freelance Work
                  </option>
                  <option value="fulltime" style={{ background: "#0B1120" }}>
                    Full-Time Position
                  </option>
                  <option value="collab" style={{ background: "#0B1120" }}>
                    Collaboration
                  </option>
                  <option value="other" style={{ background: "#0B1120" }}>
                    Other
                  </option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  className="block text-xs font-mono text-[#F8FAFC]/40 tracking-wider mb-1.5"
                  htmlFor="contact-message"
                >
                  MESSAGE
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  placeholder="Tell me about your project, timeline, and budget..."
                  className={`${inputClass("message")} resize-none`}
                  suppressHydrationWarning
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending" || status === "success"}
                className={`w-full py-3.5 rounded-xl text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                  status === "success"
                    ? "bg-[#34D399]/20 border border-[#34D399]/40 text-[#34D399]"
                    : status === "sending"
                      ? "opacity-70 cursor-wait btn-primary"
                      : "btn-primary"
                }`}
                id="contact-submit"
              >
                {status === "success" ? (
                  <>
                    <CheckCircle size={16} /> Message Sent Successfully!
                  </>
                ) : status === "sending" ? (
                  <>
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    <span className="relative z-10">Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={15} className="relative z-10" />
                  </>
                )}
              </button>

              {status === "error" && (
                <div className="flex items-center gap-2 text-red-400 text-xs">
                  <AlertCircle size={14} /> Failed to send. Please try again or
                  email directly.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
