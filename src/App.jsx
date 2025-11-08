import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const primary = '#2A5DB0';

export default function App() {
  const handleCreate = () => {
    // In a full app, navigate to signup/create flow
    alert('Create Profile coming soon');
  };
  const handleExplore = () => {
    // In a full app, navigate to directory page
    alert('Explore Profiles coming soon');
  };

  return (
    <div className="min-h-screen text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(42,93,176,0.25),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(42,93,176,0.18),transparent_45%),linear-gradient(180deg,#0b1326,#0f1b33_60%)]" />

      <header className="sticky top-0 z-50 backdrop-blur-md/50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl" style={{ backgroundColor: primary }} />
            <span className="text-lg font-semibold" style={{ fontFamily: 'Montserrat, Inter, system-ui, sans-serif' }}>OneLink</span>
          </div>
          <div className="hidden items-center gap-6 md:flex" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            <a className="text-white/80 hover:text-white" href="#features">Features</a>
            <a className="text-white/80 hover:text-white" href="#how">How it works</a>
            <a className="text-white/80 hover:text-white" href="#testimonials">Stories</a>
            <button onClick={handleCreate} className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:shadow-md">Create Profile</button>
          </div>
        </div>
      </header>

      <main>
        <Hero onCreateClick={handleCreate} onExploreClick={handleExplore} />
        <div id="features"><Features /></div>
        <div id="how"><HowItWorks /></div>
        <div id="testimonials"><Testimonials /></div>
      </main>

      <Footer />
    </div>
  );
}
