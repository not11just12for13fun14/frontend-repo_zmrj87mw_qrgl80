import React from 'react';
import { Link as LinkIcon, Briefcase, QrCode, Search } from 'lucide-react';

const features = [
  {
    icon: LinkIcon,
    title: 'Profile Links',
    desc: 'Centralize your identity with a single link that routes to everything that matters.'
  },
  {
    icon: Briefcase,
    title: 'Portfolio Showcase',
    desc: 'Present projects with clean cards, rich media, and elegant case studies.'
  },
  {
    icon: QrCode,
    title: 'QR Business Cards',
    desc: 'Share instantly with branded QR codes—perfect for events and meetings.'
  },
  {
    icon: Search,
    title: 'Discovery Search',
    desc: 'Get found by students, clients, and partners in our smart directory.'
  }
];

export default function Features() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl" style={{ fontFamily: 'Montserrat, Inter, system-ui, sans-serif' }}>
          Designed for students and small businesses
        </h2>
        <p className="mt-3 text-white/70" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
          Build trust, showcase work, and convert interest into opportunities.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div key={f.title} className="group rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 backdrop-blur-md transition shadow-lg hover:bg-white/7.5 hover:shadow-xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/10">
              <f.icon className="h-6 w-6 text-white" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-white" style={{ fontFamily: 'Montserrat, Inter, system-ui, sans-serif' }}>{f.title}</h3>
            <p className="mt-2 text-sm text-white/70" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
