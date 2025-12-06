'use client';
import Image from 'next/image';
import GlassCard from '../../components/GlassCard';
import AnimateOnScroll from '../../components/AnimateOnScroll';
const education = [
  { degree: 'B.Tech in AIML', institution: 'Gharda Institute of Technology', status: 'Pursuing' },
  { degree: 'Diploma in Computer Engineering', institution: 'Dr. BATU Lonere', status: 'SGPA: 7.25' },
  { degree: 'Secondary Schooling', institution: 'N.M. Joshi Vidyabhavan', status: '81%' }
];

export default function AboutPage() {
  return (
    <div className="section-wrapper" id="about">
      <section className="card-surface p-6 md:p-8">
        <p className="section-title">About</p>
        <h2 className="section-heading">A short story.</h2>

        <div className="mb-8 flex flex-col items-start gap-4 md:flex-row md:items-center">
          <div className="h-24 w-24 shrink-0 border-2 border-white/70 overflow-hidden" style={{ borderRadius: 0 }}>
            <Image src="/me.jpeg" alt="Ayush" width={96} height={96} className="h-full w-full object-cover" />
          </div>

          <p className="section-description mb-0">
            Eager and passionate AI/ML engineering student skilled in Python, ML, problem-solving, and building AI-powered applications. Developed a smart Healthcare Chatbot and an AI-powered Gate Guardian system, combining computer vision and machine learning to solve real problems.
          </p>
        </div>

        <div className="mb-8">
          <AnimateOnScroll>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400 mb-4 text-contrast">Education</p>
          </AnimateOnScroll>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <AnimateOnScroll key={edu.degree} delay={index * 80}>
                <GlassCard className="p-5">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-slate-900 mb-1">{edu.degree}</h3>
                      <p className="text-sm text-slate-500">{edu.institution}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-slate-700">{edu.status}</p>
                    </div>
                  </div>
                </GlassCard>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="space-y-2 text-sm text-muted">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Background</p>
            <p>I started with a Diploma in Computer Engineering and am now pursuing B.Tech in AIML. I focus on building practical AI solutions—chatbots, CV systems—that solve real problems.</p>
          </div>

          <div className="space-y-2 text-sm text-muted">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Strengths</p>
            <p>Analytical thinking, rapid learning, and translating technical concepts into user-focused solutions.</p>
          </div>

          <div className="space-y-2 text-sm text-muted">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">How I Work</p>
            <p>I break problems into clear steps, test solutions quickly, iterate based on feedback, and collaborate with teammates through clear, practical communication.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
