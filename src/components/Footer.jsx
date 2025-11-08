import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-white/5/50 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-6 md:grid-cols-4">
          <div>
            <p className="text-lg font-semibold text-white" style={{ fontFamily: 'Montserrat, Inter, system-ui, sans-serif' }}>OneLink</p>
            <p className="mt-2 text-sm text-white/70" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              Your digital identity, simplified.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-white" style={{ fontFamily: 'Montserrat, Inter, system-ui, sans-serif' }}>Product</p>
            <ul className="mt-3 space-y-2 text-sm text-white/70" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              <li>Features</li>
              <li>Pricing</li>
              <li>Directory</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-white" style={{ fontFamily: 'Montserrat, Inter, system-ui, sans-serif' }}>Company</p>
            <ul className="mt-3 space-y-2 text-sm text-white/70" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-white" style={{ fontFamily: 'Montserrat, Inter, system-ui, sans-serif' }}>Support</p>
            <ul className="mt-3 space-y-2 text-sm text-white/70" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              <li>Help Center</li>
              <li>Status</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/60 md:flex-row" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
          <p>© {new Date().getFullYear()} OneLink. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
