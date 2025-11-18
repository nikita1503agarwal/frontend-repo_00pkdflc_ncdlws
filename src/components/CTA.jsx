export default function CTA(){
  return (
    <section id="quote" className="relative py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_circle_at_center,rgba(59,130,246,0.10),transparent_60%)]" />
      <div className="relative mx-auto max-w-5xl rounded-3xl border border-blue-500/20 bg-gradient-to-br from-slate-900/80 to-slate-800/80 p-8 shadow-2xl backdrop-blur-xl sm:p-12">
        <div className="grid gap-8 md:grid-cols-2 md:gap-10">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Need an estimate?</h2>
            <p className="mt-3 text-blue-200/80">Upload photos and details. We’ll text you a quote within hours.</p>
            <ul className="mt-6 space-y-2 text-sm text-blue-200/80">
              <li>• Photo-based estimates</li>
              <li>• OEM procedures and parts</li>
              <li>• Lifetime paint warranty</li>
            </ul>
          </div>

          <form className="grid gap-3">
            <input className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="Full name" />
            <input className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="Phone number" />
            <textarea rows={4} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="Describe the damage" />
            <button type="button" className="mt-1 inline-flex items-center justify-center rounded-xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-400">Request my quote</button>
            <p className="text-xs text-blue-200/60">By submitting, you agree to be contacted with your estimate.</p>
          </form>
        </div>
      </div>
    </section>
  )
}
