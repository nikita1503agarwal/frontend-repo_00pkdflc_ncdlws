import { SprayCan, PanelsTopLeft, Wrench, ShieldCheck, Camera, Car} from 'lucide-react'

export default function Services(){
  const items = [
    { icon: PanelsTopLeft, title: 'Structural & Frame', desc: 'Computerized measuring, OEM specifications, aluminum & high-strength steel repair.' },
    { icon: SprayCan, title: 'Paint & Finish', desc: 'Color-matched refinishing in downdraft spray booths with waterborne systems.' },
    { icon: Camera, title: 'ADAS Calibration', desc: 'In-house radar, lidar, and camera calibration to factory standards.' },
    { icon: Wrench, title: 'Bumper & Panel Repair', desc: 'Plastic welding, dent removal, panel blending, and fitment optimization.' },
    { icon: ShieldCheck, title: 'Insurance Assistance', desc: 'Direct work with major carriers, digital estimates, and photo claims.' },
    { icon: Car, title: 'Detail & Delivery', desc: 'Multi-point quality inspection and complimentary detailing on pickup.' },
  ]

  return (
    <section id="services" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_top,rgba(59,130,246,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">What we do</h2>
          <p className="mt-3 text-blue-200/80">A seamless, technology-driven repair experience end to end.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({icon:Icon, title, desc}) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-xl backdrop-blur-xl transition hover:border-blue-500/30 hover:bg-slate-900/70">
              <div className="relative">
                <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/0 opacity-0 blur-2xl transition duration-500 group-hover:opacity-30" />
                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                  <Icon className="h-6 w-6 text-blue-300" />
                </div>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-blue-200/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
