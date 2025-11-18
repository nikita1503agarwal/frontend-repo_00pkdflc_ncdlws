import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <CTA />
        <footer id="contact" className="border-t border-white/10 py-12">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <h3 className="text-white font-semibold">Apex Collision</h3>
                <p className="mt-2 text-sm text-blue-200/80">1230 Velocity Ave, Suite A, Metro City</p>
              </div>
              <div className="text-blue-200/80 text-sm">
                <p>Mon–Fri: 8am–6pm</p>
                <p>Sat: 9am–2pm</p>
              </div>
              <div className="text-sm text-blue-200/80">
                <p>(800) 555-1234</p>
                <p>hello@apexcollision.com</p>
              </div>
            </div>
            <p className="mt-8 text-center text-xs text-blue-200/60">© {new Date().getFullYear()} Apex Collision. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App