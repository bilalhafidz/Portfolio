'use client';
import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { User, Cpu, Globe, Heart } from 'lucide-react';
import CountUp from 'react-countup';
import { useInView as useInViewObs } from 'react-intersection-observer';

const STATS = [
  { value: 3, suffix: '+', label: 'Years Experience', color: '#00D9FF' },
  { value: 25, suffix: '+', label: 'Projects Completed', color: '#8B5CF6' },
  { value: 15, suffix: '+', label: 'Technologies', color: '#22D3EE' },
  { value: 20, suffix: '+', label: 'Happy Clients', color: '#A78BFA' },
];

const TECH_STACK = [
  'React', 'Next.js', 'TypeScript', 'Node.js',
  'Laravel', 'MySQL', 'Tailwind', 'Python', 'Docker', 'AWS'
];

const TIMELINE = [
  { year: '2021', title: 'Started Coding Journey', desc: 'Dove into web development with HTML, CSS, and JavaScript.' },
  { year: '2022', title: 'First Full-Stack Project', desc: 'Built a complete e-commerce platform with React and Node.js.' },
  { year: '2023', title: 'Freelance Career', desc: 'Delivered 20+ projects for national clients in Indonesia.' },
  { year: '2024', title: 'Head of Social Media Specialist', desc: 'Lead a team to build trust for Individuals or Organizations on social media.' },
  { year: '2025', title: 'Open Source & Innovation', desc: 'Contributing to the Government  and building next-gen web experiences.' },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' as const },
  }),
};

function StatCard({ value, suffix, label, color, index }: typeof STATS[0] & { index: number }) {
  const { ref, inView } = useInViewObs({ triggerOnce: true, threshold: 0.3 });
  return (
    <motion.div
      ref={ref}
      custom={index} variants={cardVariants} initial="hidden" whileInView="show" viewport={{ once: true }}
      className="glass rounded-2xl p-6 text-center glow-card hud-corner"
    >
      <div
        className="text-4xl font-black mb-1 tabular-nums"
        style={{ color, textShadow: `0 0 20px ${color}60` }}
      >
        {inView ? <CountUp end={value} duration={2} suffix={suffix} /> : `0${suffix}`}
      </div>
      <div className="text-[#F8FAFC]/50 text-sm font-medium">{label}</div>
    </motion.div>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={sectionRef} className="section-pad relative overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 30% 50%, rgba(139,92,246,0.05) 0%, transparent 60%)' }}
      />

      <div className="container relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-gradient mb-4">
            About Me
          </h2>
          <p className="text-[#F8FAFC]/50 max-w-xl mx-auto text-base leading-relaxed">
            Passionate about building technology that makes a difference - one line of code at a time.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
          >
            <div className="glass rounded-2xl p-8 neon-border mb-6">
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(0,217,255,0.1)', border: '1px solid rgba(0,217,255,0.2)' }}
                >
                  <Globe size={18} className="text-[#00D9FF]" />
                </div>
                <h3 className="text-lg font-bold">Who Am I?</h3>
              </div>
              <p className="text-[#F8FAFC]/60 leading-relaxed mb-4 text-sm">
                I&apos;m <span className="text-[#00D9FF] font-semibold">Bilal</span>, a Full Stack Web Developer with 3+ years of
                experience crafting high-performance, scalable digital solutions. I specialize in
                building everything from elegant frontends to robust backend systems and cloud
                infrastructure.
              </p>
              <p className="text-[#F8FAFC]/60 leading-relaxed text-sm">
                My work sits at the intersection of <span className="text-[#8B5CF6] font-medium">design</span>,{' '}
                <span className="text-[#22D3EE] font-medium">engineering</span>, and{' '}
                <span className="text-[#00D9FF] font-medium">innovation</span>. I build products
                that are not just functional, but delightful to use.
              </p>
            </div>

            <div className="glass rounded-2xl p-8 neon-border-purple">
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.2)' }}
                >
                  <Heart size={18} className="text-[#8B5CF6]" />
                </div>
                <h3 className="text-lg font-bold">My Philosophy</h3>
              </div>
              <div className="space-y-3">
                {[
                  { icon: '⚡', text: 'Performance is a feature, not an afterthought.' },
                  { icon: '🎨', text: 'Great design and great code are inseparable.' },
                  { icon: '🔧', text: 'Build systems that scale, not just products that work.' },
                  { icon: '🚀', text: 'Ship fast, iterate faster, never stop learning.' },
                ].map(({ icon, text }, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-[#F8FAFC]/60">
                    <span className="text-base mt-0.5">{icon}</span>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(0,217,255,0.1)', border: '1px solid rgba(0,217,255,0.2)' }}
              >
                <Cpu size={18} className="text-[#00D9FF]" />
              </div>
              <h3 className="text-lg font-bold">My Journey</h3>
            </div>

            <div className="relative pl-6">
              {/* Vertical line */}
              <div
                className="absolute left-2 top-2 bottom-2 w-px"
                style={{ background: 'linear-gradient(180deg, #00D9FF, #8B5CF6, transparent)' }}
              />

              {TIMELINE.map(({ year, title, desc }, i) => (
                <motion.div
                  key={year}
                  custom={i} variants={cardVariants} initial="hidden" whileInView="show" viewport={{ once: true }}
                  className="relative mb-6 last:mb-0"
                >
                  {/* Dot */}
                  <div
                    className="absolute -left-6 top-1.5 w-4 h-4 rounded-full border-2 flex items-center justify-center"
                    style={{
                      borderColor: '#00D9FF',
                      background: '#050505',
                      boxShadow: '0 0 12px rgba(0,217,255,0.5)',
                    }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00D9FF]" />
                  </div>

                  <div className="glass rounded-xl p-4 ml-2 hover:border-[rgba(0,217,255,0.2)] border border-transparent transition-all duration-300">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="tag text-[10px] py-0.5">{year}</span>
                      <h4 className="text-sm font-bold text-[#F8FAFC]">{title}</h4>
                    </div>
                    <p className="text-[#F8FAFC]/50 text-xs leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} {...stat} index={i} />
          ))}
        </div>

        {/* Tech badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-xs font-mono text-[#F8FAFC]/30 tracking-widest mb-5">CORE TECHNOLOGIES</p>
          <div className="flex flex-wrap justify-center gap-3">
            {TECH_STACK.map((tech, i) => (
              <motion.span
                key={tech}
                custom={i} variants={cardVariants} initial="hidden" whileInView="show" viewport={{ once: true }}
                className="px-4 py-2 glass rounded-full text-sm font-medium text-[#F8FAFC]/70 border border-white/5 hover:border-[rgba(0,217,255,0.3)] hover:text-[#00D9FF] transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
