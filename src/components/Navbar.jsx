import { Menu, Phone, Wrench, Car, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl">
          <div className="flex items-center justify-between px-4 py-3 md:px-6">
            <a href="#" className="flex items-center gap-2">
              <div className="relative">
                <div className="absolute inset-0 rounded-xl bg-blue-500/40 blur-md" />
                <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 ring-1 ring-white/10">
                  <Car className="h-5 w-5 text-blue-300" />
                </div>
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1">
                  <span className="text-lg font-semibold tracking-tight text-white">Apex Collision</span>
                  <Sparkles className="h-4 w-4 text-blue-300" />
                </div>
                <span className="text-xs text-blue-200/70">Precision Auto Body</span>
              </div>
            </a>

            <nav className="hidden items-center gap-8 md:flex">
              <a href="#services" className="text-sm text-blue-100/80 hover:text-white transition">Services</a>
              <a href="#process" className="text-sm text-blue-100/80 hover:text-white transition">Process</a>
              <a href="#testimonials" className="text-sm text-blue-100/80 hover:text-white transition">Reviews</a>
              <a href="#contact" className="text-sm text-blue-100/80 hover:text-white transition">Contact</a>
            </nav>

            <div className="hidden md:block">
              <a href="tel:+18005551234" className="group inline-flex items-center gap-2 rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-500/20 to-blue-400/10 px-4 py-2 text-sm font-medium text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)] transition hover:border-blue-500/40 hover:from-blue-500/30">
                <Phone className="h-4 w-4 text-blue-200" />
                (800) 555-1234
              </a>
            </div>

            <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-white">
              <Menu className="h-5 w-5" />
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3">
              <div className="grid gap-2">
                <a onClick={() => setOpen(false)} href="#services" className="rounded-lg px-3 py-2 text-sm text-blue-100/90 hover:bg-white/5">Services</a>
                <a onClick={() => setOpen(false)} href="#process" className="rounded-lg px-3 py-2 text-sm text-blue-100/90 hover:bg-white/5">Process</a>
                <a onClick={() => setOpen(false)} href="#testimonials" className="rounded-lg px-3 py-2 text-sm text-blue-100/90 hover:bg-white/5">Reviews</a>
                <a onClick={() => setOpen(false)} href="#contact" className="rounded-lg px-3 py-2 text-sm text-blue-100/90 hover:bg-white/5">Contact</a>
                <a href="tel:+18005551234" className="mt-2 inline-flex items-center gap-2 rounded-xl border border-blue-500/20 bg-blue-500/10 px-3 py-2 text-sm text-white">
                  <Phone className="h-4 w-4 text-blue-200" /> Call us
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
