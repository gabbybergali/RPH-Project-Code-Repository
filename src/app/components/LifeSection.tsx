import { motion } from 'motion/react';
import { useInView } from './useInView';
import { Fish, AlertTriangle, Film } from 'lucide-react';
import sinarapanMainImg from '../../assets/sinarapan-main.jpg';
import sinarapanCoinImg from '../../assets/sinarapan-coin.jpg';

export function LifeSection() {
  const { ref, inView } = useInView();

  return (
    <section id="life" ref={ref} className="py-24 bg-gradient-to-b from-slate-900 via-cyan-950/20 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(6,182,212,0.1)_0%,_transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJidWJibGVzIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB3aWR0aD0iODAiIGhlaWdodD0iODAiPjxjaXJjbGUgY3g9IjQwIiBjeT0iNDAiIHI9IjIiIGZpbGw9InJnYmEoMTAzLCAyMzIsIDI0OSwgMC4xKSIvPjxjaXJjbGUgY3g9IjIwIiBjeT0iNjAiIHI9IjEuNSIgZmlsbD0icmdiYSgxMDMsIDIzMiwgMjQ5LCAwLjA4KSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNidWJibGVzKSIvPjwvc3ZnPg==')] opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Sinarapan
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full mx-auto mb-6 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
          <p className="text-lg text-cyan-100/80 max-w-3xl mx-auto font-light">
            The world's smallest commercially harvested fish, a unique treasure endemic to the waters of Lake Bato.
          </p>
        </motion.div>

        {/* Main Observation Deck */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
          className="relative bg-slate-900/40 backdrop-blur-3xl border border-white/10 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]"
        >
          {/* Header Status Bar */}
          <div className="bg-red-500/10 border-b border-red-500/20 px-6 md:px-10 py-5 md:py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
              <span className="text-red-400 font-black tracking-[0.2em] text-[8px] md:text-[10px] uppercase">Alert: Ecological Crisis</span>
            </div>
            <div className="flex items-center gap-4 md:gap-6">
              <div className="text-center md:text-right">
                <div className="text-white font-bold text-base md:text-lg leading-none uppercase tracking-tighter">Critically Endangered</div>
                <div className="text-red-400/60 text-[8px] md:text-[9px] font-bold tracking-[0.2em] mt-1">OFFICIAL CLASSIFICATION - DENR</div>
              </div>
              <div className="h-8 w-px bg-red-500/20 hidden md:block" />
              <div className="text-red-400 font-black text-xl md:text-2xl italic tracking-tighter">-99% <span className="text-[9px] uppercase tracking-widest not-italic opacity-60">Loss</span></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-12">
            {/* Left Column: Specimen Viewer */}
            <div className="lg:col-span-8 p-6 md:p-12 border-b lg:border-b-0 lg:border-r border-white/5 relative">
              {/* Viewfinder Corners - Scaled for Mobile */}
              <div className="absolute top-8 md:top-12 left-8 md:left-12 w-6 h-6 md:w-8 md:h-8 border-t-2 border-l-2 border-cyan-500/30" />
              <div className="absolute top-8 md:top-12 right-8 md:right-12 w-6 h-6 md:w-8 md:h-8 border-t-2 border-r-2 border-cyan-500/30" />
              <div className="absolute bottom-8 md:bottom-12 left-8 md:left-12 w-6 h-6 md:w-8 md:h-8 border-b-2 border-l-2 border-cyan-500/30" />
              <div className="absolute bottom-8 md:bottom-12 right-8 md:right-12 w-6 h-6 md:w-8 md:h-8 border-b-2 border-r-2 border-cyan-500/30" />
              
              <div className="relative aspect-[16/10] bg-black/40 rounded-3xl flex items-center justify-center p-8 overflow-hidden group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(6,182,212,0.1)_0%,_transparent_70%)]" />
                <motion.img 
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  src={sinarapanMainImg} 
                  alt="Sinarapan Macro" 
                  className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_50px_rgba(34,211,238,0.2)]"
                />
                
                {/* Coordinates & Metadata */}
                <div className="absolute top-6 left-6 text-[8px] font-mono text-cyan-500/40 tracking-[0.2em] space-y-1">
                  <div>LAT: 13.3333° N</div>
                  <div>LNG: 123.3667° E</div>
                </div>
                <div className="absolute bottom-6 right-6 text-[8px] font-mono text-cyan-500/40 tracking-[0.2em]">
                  SCAN_01 // BIOME: LAKE_BATO
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight italic">
                  Mistichthys luzonensis
                </h3>
                <p className="text-cyan-100/40 text-lg font-light leading-relaxed max-w-2xl">
                  The world's smallest commercially harvested fish. A biological miracle so fragile its entire existence hangs in a delicate balance within the Bicol ecosystem.
                </p>
              </div>
            </div>

            {/* Right Column: Data & Analytics */}
            <div className="lg:col-span-4 bg-white/5 flex flex-col h-full">
              {/* Stats Grid */}
              <div className="p-8 md:p-12 flex-grow space-y-10">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <Fish className="w-5 h-5 text-cyan-400" />
                    <span className="text-cyan-400 font-black tracking-[0.3em] text-[10px] uppercase">Biological Data</span>
                  </div>
                  <ul className="space-y-6">
                    {[
                      { label: "Species", value: "Endemic to Bato" },
                      { label: "Avg. Length", value: "12.5 Millimeters" },
                      { label: "Physiology", value: "Translucent Skin" },
                      { label: "Market Status", value: "Global Rarity" }
                    ].map((stat, i) => (
                      <li key={i} className="flex justify-between items-end border-b border-white/5 pb-3">
                        <span className="text-white/40 text-xs font-bold uppercase tracking-widest">{stat.label}</span>
                        <span className="text-cyan-100 font-medium text-sm">{stat.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Film className="w-5 h-5 text-cyan-400" />
                    <span className="text-cyan-400 font-black tracking-[0.3em] text-[10px] uppercase">Scale Reference</span>
                  </div>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 group">
                    <img 
                      src={sinarapanCoinImg} 
                      alt="Scale" 
                      className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-[10px] font-bold text-white uppercase tracking-widest">
                      VS. Philippine One-Peso
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom CTA Area */}
              <div className="p-8 border-t border-white/5 bg-cyan-500/5">
                <p className="text-[10px] text-cyan-400/60 font-bold uppercase tracking-[0.2em] leading-relaxed">
                  Observation complete. Critical action required to prevent total species loss.
                </p>
              </div>
            </div>
          </div>
        </motion.div>


      </div>
    </section>
  );
}

