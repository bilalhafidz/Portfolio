'use client';

import { motion } from 'framer-motion';
import {
  Award,
  Briefcase,
  CheckCircle2,
  Code2,
  Headphones,
  Megaphone,
} from 'lucide-react';

const EXPERIENCE = [
  {
    type: 'freelance',
    title: 'Freelance Web Developer',
    company: 'Self-Employed',
    period: '2026 - Present',
    location: 'Project-Based',
    desc: 'Built responsive websites and web-based applications for personal and client projects, focusing on clean UI, reusable components, dashboard systems, and API integration.',
    highlights: [
      'Developed responsive websites using React, TypeScript, Tailwind CSS, and component-based architecture.',
      'Built core features such as authentication, dashboards, CRUD operations, forms, and API integration.',
      'Improved performance, mobile compatibility, accessibility, and long-term code maintainability.',
    ],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'API Integration'],
    color: '#00D9FF',
    icon: Code2,
  },
  {
    type: 'work',
    title: 'IT Support',
    company: 'PT WIMISEC',
    period: '2025 - 2026',
    location: 'On-Site',
    desc: 'Provided technical support for hardware, software, and network issues to support smooth daily operations and reduce downtime.',
    highlights: [
      'Handled troubleshooting for computers, operating systems, printers, software, and network issues.',
      'Installed, configured, and maintained office IT equipment and business applications.',
      'Resolved technical problems through onsite and remote support with efficient response handling.',
    ],
    tech: ['Hardware Support', 'Software Support', 'Networking', 'Troubleshooting'],
    color: '#8B5CF6',
    icon: Headphones,
  },
  {
    type: 'work',
    title: 'Social Media Specialist',
    company: 'PT Flash Tech',
    period: '2024 - 2025',
    location: 'On-Site',
    desc: 'Managed social media content, audience interaction, and advertising campaigns across multiple digital platforms.',
    highlights: [
      'Created, scheduled, and published content for Instagram, Facebook, TikTok, and other platforms.',
      'Managed audience engagement, responded to inquiries, and maintained community communication.',
      'Ran and optimized paid advertising campaigns to improve reach, ROI, and campaign performance.',
    ],
    tech: ['Instagram', 'Facebook', 'TikTok', 'Content Management', 'Paid Ads'],
    color: '#22D3EE',
    icon: Megaphone,
  },
];

const QUICK_SUMMARY = [
  { label: 'Experience', value: '2024–2026' },
  { label: 'Main Focus', value: 'Web Development' },
  { label: 'Strong Area', value: 'Frontend & Dashboard' },
  { label: 'Background', value: 'IT Support + Digital Ops' },
];

const CORE_SKILLS = [
  'React',
  'TypeScript',
  'Tailwind CSS',
  'Next.js',
  'API Integration',
  'Dashboard UI',
  'Troubleshooting',
  'Social Media Ops',
];

const typeLabels: Record<string, string> = {
  work: 'FULL-TIME',
  freelance: 'FREELANCE',
};

export default function Experience() {
  return (
    <section id="experience" className="section-pad relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 20% 50%, rgba(0,217,255,0.04) 0%, transparent 60%)',
        }}
      />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="section-title text-gradient mb-4">Professional Experience</h2>
          <p className="mx-auto max-w-xl text-[#F8FAFC]/50">
            Practical experience in web development, IT support, and digital operations.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="relative pl-8">
              <div
                className="absolute bottom-0 left-3 top-0 w-px"
                style={{
                  background:
                    'linear-gradient(180deg, #00D9FF, #8B5CF6, #22D3EE, rgba(0,217,255,0.1))',
                }}
              />

              {EXPERIENCE.map((exp, i) => {
                const Icon = exp.icon;

                return (
                  <motion.div
                    key={`${exp.company}-${exp.period}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.12 }}
                    className="relative mb-8 last:mb-0"
                  >
                    <div
                      className="absolute -left-8 top-5 flex h-6 w-6 items-center justify-center rounded-full border-2"
                      style={{
                        borderColor: exp.color,
                        background: '#050505',
                        boxShadow: `0 0 16px ${exp.color}60`,
                      }}
                    >
                      <div className="h-2 w-2 rounded-full" style={{ background: exp.color }} />
                    </div>

                    <div
                      className="glass glow-card rounded-2xl p-6"
                      style={{ borderLeft: `2px solid ${exp.color}30` }}
                    >
                      <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                        <div className="flex gap-3">
                          <div
                            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border"
                            style={{
                              color: exp.color,
                              background: `${exp.color}12`,
                              borderColor: `${exp.color}30`,
                            }}
                          >
                            <Icon size={20} />
                          </div>

                          <div>
                            <h3 className="mb-0.5 text-base font-bold">{exp.title}</h3>
                            <div className="flex flex-wrap items-center gap-2 text-sm">
                              <span style={{ color: exp.color }} className="font-semibold">
                                {exp.company}
                              </span>
                              <span className="text-white/20">·</span>
                              <span className="text-xs text-white/40">{exp.location}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col items-start gap-1 sm:items-end">
                          <span
                            className="rounded-full px-2.5 py-1 font-mono text-[9px] font-bold"
                            style={{
                              color: exp.color,
                              background: `${exp.color}15`,
                              border: `1px solid ${exp.color}30`,
                            }}
                          >
                            {typeLabels[exp.type]}
                          </span>
                          <span className="font-mono text-xs text-white/30">{exp.period}</span>
                        </div>
                      </div>

                      <p className="mb-5 text-sm leading-relaxed text-[#F8FAFC]/55">
                        {exp.desc}
                      </p>

                      <div className="mb-5 space-y-2.5">
                        {exp.highlights.map((item) => (
                          <div key={item} className="flex gap-2.5">
                            <CheckCircle2
                              size={15}
                              className="mt-0.5 shrink-0"
                              style={{ color: exp.color }}
                            />
                            <p className="text-xs leading-relaxed text-[#F8FAFC]/50">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {exp.tech.map((tech) => (
                          <span key={tech} className="tag py-0.5 text-[10px]">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="mb-6 flex items-center gap-2 text-sm font-semibold text-[#F8FAFC]/70">
              <Award size={16} className="text-[#00D9FF]" />
              Career Summary
            </h3>

            <div className="neon-border glass rounded-2xl p-5">
              <h4 className="mb-4 font-mono text-xs tracking-widest text-[#F8FAFC]/30">
                QUICK OVERVIEW
              </h4>

              {QUICK_SUMMARY.map(({ label, value }) => (
                <div
                  key={label}
                  className="flex items-center justify-between border-b border-white/5 py-2 last:border-0"
                >
                  <span className="text-xs text-[#F8FAFC]/50">{label}</span>
                  <span className="text-right text-sm font-bold text-[#00D9FF]">{value}</span>
                </div>
              ))}
            </div>

            <div className="glass mt-5 rounded-2xl p-5">
              <h4 className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#F8FAFC]/40">
                <Briefcase size={14} className="text-[#00D9FF]" />
                Core Skills
              </h4>

              <div className="flex flex-wrap gap-2">
                {CORE_SKILLS.map((skill) => (
                  <span key={skill} className="tag-purple tag py-0.5 text-[10px]">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass mt-5 rounded-2xl p-5">
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#F8FAFC]/40">
                Professional Value
              </h4>

              <p className="text-sm leading-relaxed text-[#F8FAFC]/50">
                Able to combine web development, technical support, and digital operations
                experience to build practical, user-focused, and maintainable digital products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}