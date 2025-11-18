import { CheckCircle2, ClipboardList, Wrench, SprayCan, ShieldCheck, Car } from 'lucide-react'

export default function Process(){
  const steps = [
    {icon: ClipboardList, title: 'Digital Check-in', desc: 'Damage assessment, photos, and estimate. We keep you updated at every stage.'},
    {icon: ShieldCheck, title: 'Insurance Coordination', desc: 'We manage approvals and align on OEM repair procedures.'},
    {icon: Wrench, title: 'Structural & Parts', desc: 'Disassembly, frame work, part ordering, and fitment to spec.'},
    {icon: SprayCan, title: 'Paint & Reassembly', desc: 'Color match, blend, and reassemble with torque specs and QC checks.'},
    {icon: CheckCircle2, title: 'Calibration & Road Test', desc: 'ADAS calibration, safety systems verification, and test drive.'},
    {icon: Car, title: 'Detail & Delivery', desc: 'Final inspection, warranty documentation, and a freshly detailed vehicle.'},
  ]

  return (
    <section id="process" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_bottom,rgba(59,130,246,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">How it works</h2>
          <p className="mt-3 text-blue-200/80">Transparent steps from drop-off to delivery.</p>
        </div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map(({icon:Icon, title, desc}, i) => (
            <li key={title} className="group rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl transition hover:border-blue-500/30">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
                  <Icon className="h-5 w-5 text-blue-300" />
                </div>
                <span className="text-xs font-semibold text-blue-300/80">Step {i+1}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-blue-200/80">{desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
