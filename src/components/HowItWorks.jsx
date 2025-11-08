import React from 'react';
import { UserPlus, LayoutGrid, Share2 } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: 'Create your profile',
    desc: 'Add your details, skills, and brand visuals in a guided flow.'
  },
  {
    icon: LayoutGrid,
    title: 'Showcase your work',
    desc: 'Upload projects, add links, and highlight achievements.'
  },
  {
    icon: Share2,
    title: 'Share and get discovered',
    desc: 'Use your link or QR card and appear in the public directory.'
  }
];

export default function HowItWorks() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl" style={{ fontFamily: 'Montserrat, Inter, system-ui, sans-serif' }}>
          How it works
        </h2>
        <p className="mt-3 text-white/70" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
          Three simple steps to your modern profile link.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {steps.map((s, i) => (
          <div key={s.title} className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-md shadow-lg">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/10">
                <s.icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-white/60" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Step {i + 1}</p>
                <h3 className="text-lg font-semibold text-white" style={{ fontFamily: 'Montserrat, Inter, system-ui, sans-serif' }}>{s.title}</h3>
              </div>
            </div>
            <p className="mt-4 text-sm text-white/70" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
