'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Server, Database, Cloud, Smartphone, Paintbrush } from 'lucide-react';

const CATEGORIES = [
  {
    id: 'frontend', label: 'Frontend', icon: Code2, color: '#00D9FF',
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'HTML5 / CSS3', level: 98 },
      { name: 'Framer Motion', level: 82 },
    ],
  },
  {
    id: 'backend', label: 'Backend', icon: Server, color: '#8B5CF6',
    skills: [
      { name: 'Node.js / Express', level: 92 },
      { name: 'Laravel / PHP', level: 88 },
      { name: 'REST & GraphQL', level: 90 },
      { name: 'Python / FastAPI', level: 80 },
      { name: 'WebSockets', level: 77 },
    ],
  },
  {
    id: 'database', label: 'Database', icon: Database, color: '#22D3EE',
    skills: [
      { name: 'PostgreSQL', level: 88 },
      { name: 'MySQL', level: 90 },
      { name: 'MongoDB', level: 82 },
      { name: 'Redis', level: 75 },
    ],
  },
  {
    id: 'mobile', label: 'Mobile', icon: Smartphone, color: '#34D399',
    skills: [
      { name: 'React Native', level: 78 },
      { name: 'PWA', level: 88 },
      { name: 'Flutter (Basics)', level: 55 },
    ],
  },
  {
    id: 'uiux', label: 'UI/UX', icon: Paintbrush, color: '#F472B6',
    skills: [
      { name: 'Figma', level: 85 },
    ],
  },
];

const ALL_TECHS = [
  { name: 'React', cat: 'frontend' }, { name: 'Next.js', cat: 'frontend' },
  { name: 'TypeScript', cat: 'frontend' }, { name: 'Tailwind', cat: 'frontend' },
  { name: 'Node.js', cat: 'backend' },
  { name: 'Laravel', cat: 'backend' }, { name: 'PHP', cat: 'backend' },
  { name: 'Python', cat: 'backend' }, { name: 'GraphQL', cat: 'backend' },
  { name: 'PostgreSQL', cat: 'database' }, { name: 'MongoDB', cat: 'database' },
  { name: 'Redis', cat: 'database' }, { name: 'MySQL', cat: 'database' },
  { name: 'React Native', cat: 'mobile' }, { name: 'PWA', cat: 'mobile' },
  { name: 'Dart', cat: 'mobile' },
  { name: 'Figma', cat: 'uiux' }, { name: 'Framer Motion', cat: 'frontend' },
];

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="mb-4"
    >
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-[#F8FAFC]/80 font-medium">{name}</span>
        <span className="text-xs font-mono" style={{ color }}>{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: delay + 0.2, ease: 'easeOut' }}
          style={{
            background: `linear-gradient(90deg, ${color}, ${color}99)`,
            boxShadow: `0 0 10px ${color}60`,
          }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState('frontend');
  const active = CATEGORIES.find(c => c.id === activeTab)!;

  return (
    <section id="skills" className="section-pad relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 70% 50%, rgba(0,217,255,0.04) 0%, transparent 60%)' }}
      />
      <div className="absolute inset-0 grid-overlay opacity-50" />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title text-gradient mb-4">Skills & Technologies</h2>
          <p className="text-[#F8FAFC]/50 max-w-xl mx-auto text-base">
            A comprehensive toolkit built over years of building production-grade applications.
          </p>
        </motion.div>

        {/* Tab navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map(({ id, label, icon: Icon, color }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              id={`skills-tab-${id}`}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeTab === id ? 'text-[#050505]' : 'glass text-[#F8FAFC]/60 hover:text-white border border-white/5'
              }`}
              style={
                activeTab === id
                  ? { background: `linear-gradient(135deg, ${color}, ${color}99)`, boxShadow: `0 0 20px ${color}40` }
                  : {}
              }
            >
              <Icon size={14} />
              {label}
            </button>
          ))}
        </div>

        {/* Skills panel */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Skill bars */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="glass rounded-2xl p-8"
              style={{ border: `1px solid ${active.color}20` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: `${active.color}15`, border: `1px solid ${active.color}30` }}
                >
                  <active.icon size={18} style={{ color: active.color }} />
                </div>
                <div>
                  <h3 className="font-bold text-base">{active.label} Development</h3>
                  <p className="text-xs text-[#F8FAFC]/40">{active.skills.length} technologies</p>
                </div>
              </div>

              {active.skills.map((s, i) => (
                <SkillBar key={s.name} name={s.name} level={s.level} color={active.color} delay={i * 0.08} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Tech cards grid */}
          <div>
            <h3 className="text-sm font-mono text-[#F8FAFC]/40 tracking-widest mb-5">ALL TECHNOLOGIES</h3>
            <div className="grid grid-cols-3 gap-3">
              {ALL_TECHS.map((tech, i) => {
                const cat = CATEGORIES.find(c => c.id === tech.cat);
                const isActive = tech.cat === activeTab;
                return (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.03 }}
                    className="glass rounded-xl p-3 text-center text-xs font-medium transition-all duration-300 cursor-default"
                    style={{
                      border: isActive ? `1px solid ${cat?.color}40` : '1px solid rgba(255,255,255,0.05)',
                      background: isActive ? `${cat?.color}08` : undefined,
                      color: isActive ? cat?.color : 'rgba(248,250,252,0.6)',
                      boxShadow: isActive ? `0 0 16px ${cat?.color}20` : undefined,
                    }}
                  >
                    {tech.name}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Proficiency legend */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 text-xs text-[#F8FAFC]/40"
        >
          {[
            { range: '90-100%', label: 'Expert', color: '#00D9FF' },
            { range: '75-89%', label: 'Advanced', color: '#8B5CF6' },
            { range: '60-74%', label: 'Proficient', color: '#22D3EE' },
            { range: '<60%', label: 'Learning', color: '#A78BFA' },
          ].map(({ range, label, color }) => (
            <div key={label} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ background: color, boxShadow: `0 0 6px ${color}` }} />
              <span>{range} - {label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
