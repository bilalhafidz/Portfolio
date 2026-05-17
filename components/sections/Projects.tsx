"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  Bot,
  Camera,
  ChevronLeft,
  ChevronRight,
  Globe2,
  LayoutDashboard,
  LucideIcon,
  MapPin,
  Radar,
  ServerCrash,
  ShieldCheck,
  ShoppingBag,
  UsersRound,
  X,
} from "lucide-react";

type ProjectCategory =
  | "security"
  | "automation"
  | "social"
  | "monitoring"
  | "ecommerce";

type ProjectShot = {
  label: string;
  src: string;
};

type Project = {
  id: number;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  desc: string;
  role: string;
  tech: string[];
  gradient: string;
  icon: LucideIcon;
  thumbnail: string;
  screenshots: ProjectShot[];
  metrics: { label: string; value: string }[];
};

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Wimisec IDS",
    category: "security",
    categoryLabel: "IoT Security",
    desc: "An IDS website for detecting signs of port scanning on IoT devices in real time, complete with alerts, activity logs, and a summary of at-risk devices.",
    role: "IoT intrusion detection dashboard",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Python"],
    gradient: "from-[#22D3EE] via-[#2563EB] to-[#8B5CF6]",
    icon: Radar,
    thumbnail: "/projects/wimisec/thumbnail.png",
    screenshots: [
      { label: "Dashboard Overview", src: "/projects/wimisec/thumbnail.png" },
      { label: "Devices Management", src: "/projects/wimisec/devices.png" },
      { label: "Port Scan Logs", src: "/projects/wimisec/logs.png" },
    ],
    metrics: [
      { label: "Focus", value: "IoT IDS" },
      { label: "Detection", value: "Port Scan" },
      { label: "Mode", value: "Realtime" },
    ],
  },
  {
    id: 2,
    title: "Socialize",
    category: "social",
    categoryLabel: "Social Manager",
    desc: "A website for managing social media account data—such as TikTok, Instagram, Facebook, and other platforms—including account status (active, suspended, and archived).",
    role: "Social account management system",
    tech: ["React.js", "TypeScript", "Laravel", "MySQL", "Tailwind CSS"],
    gradient: "from-[#EC4899] via-[#8B5CF6] to-[#22D3EE]",
    icon: UsersRound,
    thumbnail: "/projects/socialize/thumbnail.png",
    screenshots: [
      { label: "Webmail", src: "/projects/socialize/thumbnail.png" },
      { label: "2FA Generator", src: "/projects/socialize/2fa.png" },
      { label: "Username Checker", src: "/projects/socialize/username.png" },
    ],
    metrics: [
      { label: "Platforms", value: "Multi" },
      { label: "Status", value: "Active/Suspend" },
      { label: "Data", value: "Accounts" },
    ],
  },
  {
    id: 3,
    title: "Phishing Geolocation + Cam",
    category: "security",
    categoryLabel: "Security Research",
    desc: "An investigative bot designed to assist in the process of identifying perpetrators through a controlled feed page that concisely displays location data, camera information, access times, and technical traces.",
    role: "Controlled investigation dashboard",
    tech: ["PHP", "Telegram Bot", "Geolocation API"],
    gradient: "from-[#F97316] via-[#EF4444] to-[#EC4899]",
    icon: Camera,
    thumbnail: "/projects/phishing-geolocation-cam/thumbnail.png",
    screenshots: [
      {
        label: "Backend Overview",
        src: "/projects/phishing-geolocation-cam/thumbnail.png",
      },
      {
        label: "Result",
        src: "/projects/phishing-geolocation-cam/result.png",
      },
    ],
    metrics: [
      { label: "Focus", value: "Attribution" },
      { label: "Signal", value: "Geo + Cam" },
      { label: "Output", value: "Evidence" },
    ],
  },
  {
    id: 4,
    title: "Instagram Automation",
    category: "automation",
    categoryLabel: "Automation",
    desc: "An automation system for managing engagement workflows, such as automated comments and likes on Instagram, with plans to expand to TikTok, X, and YouTube.",
    role: "Social media workflow automation",
    tech: ["Python", "Playwright", "JavaScript", "Queue System", "REST API"],
    gradient: "from-[#A855F7] via-[#EC4899] to-[#F97316]",
    icon: Bot,
    thumbnail: "/projects/instagram-automation/thumbnail.png",
    screenshots: [
      {
        label: "Dashboard Automation",
        src: "/projects/instagram-automation/thumbnail.png",
      },
      {
        label: "Services Page",
        src: "/projects/instagram-automation/orders.png",
      },
      {
        label: "History Automation Task",
        src: "/projects/instagram-automation/automation.png",
      },
    ],
    metrics: [
      { label: "Workflow", value: "Auto Engage" },
      { label: "Target", value: "Multi App" },
      { label: "Status", value: "In Dev" },
    ],
  },
  {
    id: 5,
    title: "DDoS System",
    category: "security",
    categoryLabel: "Traffic Lab",
    desc: "A lab system for controlled traffic stress testing, used to monitor server responses, track load, and evaluate infrastructure resilience.",
    role: "Controlled traffic stress testing panel",
    tech: ["Python", "React.js", "TypeScript", "REST API", "Tailwind CSS"],
    gradient: "from-[#EF4444] via-[#F59E0B] to-[#FACC15]",
    icon: ServerCrash,
    thumbnail: "/projects/ddos/thumbnail.png",
    screenshots: [
      {
        label: "Dashboard",
        src: "/projects/ddos/thumbnail.png",
      },
      {
        label: "Configure Attack",
        src: "/projects/ddos/configure.png",
      },
      {
        label: "Running Target",
        src: "/projects/ddos/attack.png",
      },
    ],
    metrics: [
      { label: "Focus", value: "Stress Test" },
      { label: "Scope", value: "Controlled" },
      { label: "Output", value: "Metrics" },
    ],
  },
  {
    id: 6,
    title: "MBG System",
    category: "monitoring",
    categoryLabel: "Reporting",
    desc: "There are issues with the SPPG reporting and monitoring website, ranging from delays in distribution, food quality, and taste to inadequate portion validation.",
    role: "SPPG issue reporting dashboard",
    tech: [
      "React.js",
      "TypeScript",
      "MySQL",
      "CodeIgniter",
      "Chart.js",
      "Tailwind CSS",
    ],
    gradient: "from-[#10B981] via-[#22D3EE] to-[#2563EB]",
    icon: LayoutDashboard,
    thumbnail: "/projects/mbg-system/thumbnail.png",
    screenshots: [
      { label: "Main Page", src: "/projects/mbg-system/thumbnail.png" },
      { label: "Create Report", src: "/projects/mbg-system/report.png" },
      { label: "Track Report", src: "/projects/mbg-system/track.png" },
    ],
    metrics: [
      { label: "Reports", value: "SPPG" },
      { label: "Issue", value: "Quality" },
      { label: "View", value: "Dashboard" },
    ],
  },
  {
    id: 7,
    title: "Skincare E-Commerce",
    category: "ecommerce",
    categoryLabel: "E-Commerce",
    desc: "An e-commerce website for selling skincare products, featuring a product catalog, item details, a shopping cart, a checkout process, and a storefront design optimized for conversions.",
    role: "Skincare online storefront",
    tech: ["Next.js", "Tailwind CSS", "Laravel", "MySQL", "Payment Gateway"],
    gradient: "from-[#FB7185] via-[#F472B6] to-[#A855F7]",
    icon: ShoppingBag,
    thumbnail: "/projects/skincare-ecommerce/thumbnail.png",
    screenshots: [
      {
        label: "Storefront",
        src: "/projects/skincare-ecommerce/thumbnail.png",
      },
      {
        label: "Product Detail",
        src: "/projects/skincare-ecommerce/product.png",
      },
      {
        label: "Blog",
        src: "/projects/skincare-ecommerce/blog.png",
      },
    ],
    metrics: [
      { label: "Type", value: "Store" },
      { label: "Product", value: "Skincare" },
      { label: "Flow", value: "Checkout" },
    ],
  },
];

const FILTERS: { id: "all" | ProjectCategory; label: string }[] = [
  { id: "all", label: "All Projects" },
  { id: "security", label: "Security" },
  { id: "automation", label: "Automation" },
  { id: "social", label: "Social" },
  { id: "monitoring", label: "Monitoring" },
  { id: "ecommerce", label: "E-Commerce" },
];

function ProjectImage({
  src,
  alt,
  gradient,
  icon: Icon,
  className = "",
  imageClassName = "object-cover",
  fallbackLabel = "Screenshot belum tersedia",
}: {
  src: string;
  alt: string;
  gradient: string;
  icon: LucideIcon;
  className?: string;
  imageClassName?: string;
  fallbackLabel?: string;
}) {
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsError(false);
  }, [src]);

  return (
    <div className={`relative overflow-hidden bg-[#020617] ${className}`}>
      {!isError ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setIsError(true)}
          className={`absolute inset-0 h-full w-full ${imageClassName}`}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-20`}
          />
          <div className="absolute inset-0 cyber-grid opacity-20" />

          <div
            className={`relative mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} shadow-lg`}
          >
            <Icon size={28} className="text-white" />
          </div>

          <p className="relative text-sm font-semibold text-white">
            {fallbackLabel}
          </p>
          <p className="relative mt-2 max-w-sm break-all text-[11px] leading-relaxed text-white/35">
            Simpan gambar di: {src}
          </p>
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020617]/80 via-[#020617]/10 to-transparent" />
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<"all" | ProjectCategory>("all");
  const [selected, setSelected] = useState<Project | null>(null);
  const [activeShot, setActiveShot] = useState(0);

  useEffect(() => {
    if (!selected) return;

    const scrollY = window.scrollY;

    const originalBodyPosition = document.body.style.position;
    const originalBodyTop = document.body.style.top;
    const originalBodyWidth = document.body.style.width;
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.position = originalBodyPosition;
      document.body.style.top = originalBodyTop;
      document.body.style.width = originalBodyWidth;
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;

      window.scrollTo(0, scrollY);
    };
  }, [selected]);

  const filtered =
    filter === "all"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === filter);

  const openProject = (project: Project) => {
    setSelected(project);
    setActiveShot(0);
  };

  const nextShot = () => {
    if (!selected) return;
    setActiveShot((current) => (current + 1) % selected.screenshots.length);
  };

  const prevShot = () => {
    if (!selected) return;
    setActiveShot(
      (current) =>
        (current - 1 + selected.screenshots.length) %
        selected.screenshots.length,
    );
  };

  return (
    <section id="projects" className="section-pad relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(139,92,246,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="section-title text-gradient mb-4">Real Projects</h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-[#F8FAFC]/50 sm:text-base">
            Selected systems I have built across security, automation,
            monitoring, social media management, and e-commerce.
          </p>
        </motion.div>

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {FILTERS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setFilter(id)}
              id={`project-filter-${id}`}
              className={`rounded-lg border px-4 py-2 text-xs font-medium transition-all duration-300 ${
                filter === id
                  ? "border-[rgba(0,217,255,0.3)] bg-[rgba(0,217,255,0.15)] text-[#00D9FF] shadow-[0_0_28px_rgba(0,217,255,0.12)]"
                  : "glass border-white/5 text-[#F8FAFC]/50 hover:border-white/15 hover:text-white"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => {
              const Icon = project.icon;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.92, y: 16 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92, y: 16 }}
                  transition={{ duration: 0.35, delay: index * 0.045 }}
                  className="group glass glow-card cursor-pointer overflow-hidden rounded-2xl border border-white/5"
                  onClick={() => openProject(project)}
                  id={`project-card-${project.id}`}
                >
                  <div className="relative h-52 overflow-hidden bg-[#020617]">
                    <ProjectImage
                      src={project.thumbnail}
                      alt={`${project.title} thumbnail`}
                      gradient={project.gradient}
                      icon={Icon}
                      className="absolute inset-0 h-full w-full"
                      imageClassName="object-cover transition-transform duration-700 group-hover:scale-105"
                      fallbackLabel="Thumbnail belum tersedia"
                    />

                    <div
                      className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 transition-opacity duration-500 group-hover:opacity-20`}
                    />

                    {/* Top shadow */}
                    <div className="pointer-events-none absolute inset-x-0 top-0 z-[5] h-24 bg-gradient-to-b from-[#020617]/70 via-[#020617]/35 to-transparent" />

                    {/* Bottom shadow */}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-28 bg-gradient-to-t from-[#020617]/75 via-[#020617]/40 to-transparent" />

                    {/* Soft inner vignette */}
                    <div className="pointer-events-none absolute inset-0 z-[6] shadow-[inset_0_0_55px_rgba(2,6,23,0.38)]" />

                    <div className="absolute left-4 right-4 top-4 z-10 flex items-center justify-between gap-3">
                      <span className="tag border-white/15 bg-black/50 text-[10px] text-white shadow-lg backdrop-blur-md">
                        {project.categoryLabel.toUpperCase()}
                      </span>

                      <span className="rounded-full border border-white/15 bg-black/55 px-2.5 py-1 text-[10px] text-white/75 shadow-lg backdrop-blur-md">
                        View Screenshot
                      </span>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 z-10 p-5">
                      <div className="flex items-end justify-between gap-4">
                        <div>
                          <p className="mb-2 text-[10px] uppercase tracking-[0.22em] text-white/60 drop-shadow">
                            {project.role}
                          </p>
                          <h3 className="text-lg font-bold text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
                            {project.title}
                          </h3>
                        </div>

                        <div
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${project.gradient} shadow-[0_10px_30px_rgba(0,0,0,0.55)]`}
                        >
                          <Icon size={22} className="text-white drop-shadow" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-5">
                    <p className="mb-4 line-clamp-2 text-xs leading-relaxed text-[#F8FAFC]/50">
                      {project.desc}
                    </p>

                    <div className="mb-4 flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="tag-purple tag py-0.5 text-[9px]"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="tag py-0.5 text-[9px]">
                          +{project.tech.length - 4}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between border-t border-white/10 pt-4">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                        {project.categoryLabel}
                      </span>
                      <span className="text-xs font-medium text-[#00D9FF] opacity-70 transition-opacity group-hover:opacity-100">
                        Open
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] overflow-hidden bg-black/85 backdrop-blur-xl md:flex md:items-center md:justify-center md:p-5"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 80, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 80, scale: 0.98 }}
              transition={{ duration: 0.32, ease: "easeOut" }}
              className="glass-navy neon-border fixed inset-x-0 bottom-0 flex max-h-[92svh] flex-col overflow-hidden rounded-t-[28px] md:relative md:inset-auto md:my-6 md:max-h-[88vh] md:w-full md:max-w-6xl md:rounded-3xl"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex shrink-0 flex-col border-b border-white/10 bg-[#020617]/80 px-4 pb-4 pt-3 backdrop-blur-xl md:px-6 md:py-5">
                <div className="mx-auto mb-3 h-1.5 w-12 rounded-full bg-white/20 md:hidden" />

                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <span className="tag text-[9px] md:text-[10px]">
                        {selected.categoryLabel.toUpperCase()}
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[9px] text-white/40 md:text-[10px]">
                        Screenshot Preview
                      </span>
                    </div>

                    <h3 className="truncate text-lg font-bold text-white md:text-2xl">
                      {selected.title}
                    </h3>

                    <p className="mt-1 line-clamp-2 max-w-3xl text-xs leading-relaxed text-[#F8FAFC]/50 md:mt-2 md:text-sm">
                      {selected.desc}
                    </p>
                  </div>

                  <button
                    onClick={() => setSelected(null)}
                    className="shrink-0 rounded-xl border border-white/10 bg-white/[0.04] p-2 text-white/50 transition-colors hover:text-white"
                    id="project-modal-close"
                    aria-label="Close project preview"
                  >
                    <X size={19} />
                  </button>
                </div>
              </div>

              <div
                className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-4 md:p-6"
                style={{ WebkitOverflowScrolling: "touch" }}
              >
                <div className="grid gap-5 md:grid-cols-[0.34fr_0.66fr] md:gap-6">
                  <div className="order-2 space-y-4 md:order-1 md:space-y-5">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 md:p-5">
                      <p className="mb-3 text-[10px] font-mono uppercase tracking-[0.22em] text-[#F8FAFC]/30 md:text-xs">
                        Screenshots
                      </p>

                      <div className="flex gap-2 overflow-x-auto pb-1 md:flex-col md:overflow-visible md:pb-0">
                        {selected.screenshots.map((shot, index) => (
                          <button
                            key={shot.src}
                            onClick={() => setActiveShot(index)}
                            className={`shrink-0 rounded-xl border px-3 py-2 text-left text-xs transition-all md:w-full ${
                              activeShot === index
                                ? "border-[rgba(0,217,255,0.35)] bg-[rgba(0,217,255,0.12)] text-[#00D9FF]"
                                : "border-white/10 bg-white/[0.03] text-white/45 hover:border-white/20 hover:text-white"
                            }`}
                          >
                            {shot.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 md:p-5">
                      <p className="mb-3 text-[10px] font-mono uppercase tracking-[0.22em] text-[#F8FAFC]/30 md:text-xs">
                        Tech Stack
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {selected.tech.map((tech) => (
                          <span key={tech} className="tag text-[10px]">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 md:grid-cols-1 md:gap-3">
                      {selected.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="rounded-xl border border-white/10 bg-white/[0.03] p-3 md:p-4"
                        >
                          <p className="truncate text-[9px] uppercase tracking-widest text-white/35 md:text-[10px]">
                            {metric.label}
                          </p>
                          <p className="mt-1 truncate text-xs font-semibold text-white md:text-sm">
                            {metric.value}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="hidden rounded-2xl border border-white/10 bg-white/[0.03] p-4 md:block">
                      <div className="mb-3 flex items-center justify-between">
                        <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-white/35">
                          Preview Status
                        </p>

                        {selected.category === "ecommerce" ? (
                          <Globe2 size={16} className="text-[#00D9FF]" />
                        ) : selected.category === "security" ? (
                          <ShieldCheck size={16} className="text-[#00D9FF]" />
                        ) : selected.category === "monitoring" ? (
                          <Activity size={16} className="text-[#00D9FF]" />
                        ) : selected.category === "automation" ? (
                          <Bot size={16} className="text-[#00D9FF]" />
                        ) : (
                          <MapPin size={16} className="text-[#00D9FF]" />
                        )}
                      </div>

                      <div className="grid gap-3">
                        <div className="rounded-xl border border-white/10 bg-black/20 p-3">
                          <p className="text-[10px] text-white/35">
                            Current View
                          </p>
                          <p className="mt-1 truncate text-xs font-semibold text-white">
                            {selected.screenshots[activeShot].label}
                          </p>
                        </div>

                        <div className="rounded-xl border border-white/10 bg-black/20 p-3">
                          <p className="text-[10px] text-white/35">
                            Preview Type
                          </p>
                          <p className="mt-1 text-xs font-semibold text-white">
                            Real Screenshot
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="order-1 space-y-3 md:order-2 md:space-y-4">
                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#020617] shadow-2xl">
                      <div className="flex items-center justify-between gap-4 border-b border-white/10 bg-white/[0.03] px-3 py-2.5 md:px-4 md:py-3">
                        <div className="flex items-center gap-1.5 md:gap-2">
                          <span className="h-2 w-2 rounded-full bg-red-400/80 md:h-2.5 md:w-2.5" />
                          <span className="h-2 w-2 rounded-full bg-yellow-400/80 md:h-2.5 md:w-2.5" />
                          <span className="h-2 w-2 rounded-full bg-emerald-400/80 md:h-2.5 md:w-2.5" />
                        </div>

                        <p className="truncate text-[9px] font-mono uppercase tracking-[0.18em] text-white/35 md:text-[10px] md:tracking-[0.25em]">
                          {selected.screenshots[activeShot].label}
                        </p>
                      </div>

                      <ProjectImage
                        src={selected.screenshots[activeShot].src}
                        alt={`${selected.title} - ${selected.screenshots[activeShot].label}`}
                        gradient={selected.gradient}
                        icon={selected.icon}
                        className="aspect-[4/3] w-full sm:aspect-video md:aspect-[16/10]"
                        imageClassName="object-contain"
                        fallbackLabel="Screenshot belum tersedia"
                      />
                    </div>

                    <div className="flex items-center justify-between gap-3">
                      <button
                        onClick={prevShot}
                        className="rounded-xl border border-white/10 bg-white/[0.04] p-3 text-white/55 transition-colors hover:text-white"
                        aria-label="Previous screenshot"
                      >
                        <ChevronLeft size={18} />
                      </button>

                      <div className="flex items-center gap-2">
                        {selected.screenshots.map((shot, index) => (
                          <button
                            key={shot.src}
                            onClick={() => setActiveShot(index)}
                            className={`h-2.5 rounded-full transition-all ${
                              activeShot === index
                                ? "w-8 bg-[#00D9FF]"
                                : "w-2.5 bg-white/20 hover:bg-white/40"
                            }`}
                            aria-label={`Open ${shot.label}`}
                          />
                        ))}
                      </div>

                      <button
                        onClick={nextShot}
                        className="rounded-xl border border-white/10 bg-white/[0.04] p-3 text-white/55 transition-colors hover:text-white"
                        aria-label="Next screenshot"
                      >
                        <ChevronRight size={18} />
                      </button>
                    </div>

                    <p className="text-center text-[10px] leading-relaxed text-white/30 md:hidden">
                      Swipe area locked. Scroll only happens inside this
                      preview.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
