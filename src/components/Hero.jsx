import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, ArrowRight } from 'lucide-react';

const primary = '#2A5DB0';

export default function Hero({ onCreateClick, onExploreClick }) {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-10 md:pt-28 md:pb-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 shadow-sm backdrop-blur-md">
              <Rocket className="h-4 w-4 text-white/90" />
              <span className="text-xs font-medium text-white/90" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Launch your profile in minutes</span>
            </div>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-6xl" style={{ fontFamily: 'Montserrat, Inter, system-ui, sans-serif' }}>
              One Profile. <span className="text-white">Infinite Opportunities.</span>
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-white/80 md:text-lg" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              Showcase skills, projects, and your business in a single beautiful link. Connect instantly and grow your network.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button onClick={onCreateClick} className="group inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:shadow-md">
                Create Profile
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              <button onClick={onExploreClick} className="inline-flex items-center justify-center rounded-2xl bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md ring-1 ring-white/25 transition hover:bg-white/15">
                Explore Profiles
              </button>
            </div>
          </div>

          <div className="relative aspect-[4/3] w-full rounded-3xl bg-white/5 shadow-2xl ring-1 ring-white/10 backdrop-blur-md">
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0f1b33] to-transparent" />
          </div>
        </div>
      </div>

      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute left-1/2 top-[-10%] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(42,93,176,0.35),transparent_60%)]" />
      </div>

      <style>{`
        body { background: linear-gradient(180deg, #0b1326, #0d1630 20%, #0f1b33 60%); }
      `}</style>
    </section>
  );
}
