import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Aisha, Design Student',
    quote:
      'I landed two freelance projects after sharing my profile link at a campus meetup. The QR card feature is genius.',
  },
  {
    name: 'Rahul, Café Owner',
    quote:
      'Our menu, reviews, and contact buttons in one link—customers love the simplicity and the clean look.',
  },
  {
    name: 'Maya, Frontend Developer',
    quote:
      'The portfolio tabs and soft card layout make my projects shine. It feels premium without the hassle.',
  },
];

export default function Testimonials() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 pb-16 md:pb-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl" style={{ fontFamily: 'Montserrat, Inter, system-ui, sans-serif' }}>
          Loved by creators and small businesses
        </h2>
        <p className="mt-3 text-white/70" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
          Real stories from early users.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <div key={t.name} className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-md shadow-lg">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="mt-4 text-white/90" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              “{t.quote}”
            </p>
            <p className="mt-4 text-sm text-white/60" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>— {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
