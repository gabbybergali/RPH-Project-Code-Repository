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

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-red-950/60 to-orange-950/40 backdrop-blur-md border-l-4 border-orange-500 rounded-2xl p-8 mb-16 shadow-2xl shadow-red-950/50"
        >
          <div className="flex items-start gap-6">
            <div className="p-3 bg-orange-500/20 rounded-xl">
              <AlertTriangle className="w-8 h-8 text-orange-500" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-orange-100 mb-2 uppercase tracking-wide">Vulnerable Status</h3>
              <p className="text-orange-200 text-lg font-light leading-relaxed">
                Population decline of over <span className="font-bold text-white underline decoration-orange-500 decoration-2 underline-offset-4 text-2xl italic">99%</span> since the 1980s.
              </p>
              <p className="text-orange-200/60 mt-3 italic">
                The sinarapan is now in a vulnerable state, facing existential threats from overfishing,
                habitat degradation, and ecological imbalance.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left: Featured Macro Detail */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-7 relative group"
          >
            <div className="bg-slate-900/40 backdrop-blur-md rounded-3xl border border-white/5 overflow-hidden shadow-2xl relative min-h-[500px] flex flex-col">
              <img 
                src={sinarapanMainImg} 
                alt="Sinarapan Close-up" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-8 left-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 backdrop-blur-md flex items-center justify-center border border-cyan-400/30 shadow-lg">
                  <Fish className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-cyan-400 uppercase tracking-[0.3em] mb-1">Scientific Insight</div>
                  <div className="text-2xl font-bold text-white tracking-tight">Macro Biological Detail</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Info & Comparison */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            {/* About Card */}
            <div className="bg-slate-800/30 backdrop-blur-md border border-white/5 rounded-3xl p-8 hover:border-cyan-400/30 transition-all duration-500">
              <h3 className="text-xl font-semibold text-white uppercase tracking-widest mb-6 border-b border-white/5 pb-4">
                The Sinarapan
              </h3>
              <ul className="space-y-4">
                {[
                  "Smallest commercially harvested fish globally",
                  "Endemic to Lake Bato's unique ecosystem",
                  "Average length: 12.5 millimeters",
                  "Distinctive transparent physiology"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 group/item">
                    <span className="w-2 h-2 rounded-full bg-cyan-500 mt-1.5 group-hover/item:scale-125 transition-transform shadow-[0_0_8px_rgba(6,182,212,0.6)]" />
                    <span className="text-cyan-100/70 font-light leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Comparison Image */}
            <div className="aspect-[4/3] bg-slate-900/60 rounded-3xl border border-white/5 overflow-hidden group shadow-xl relative">
              <img 
                src={sinarapanCoinImg} 
                alt="Sinarapan Size Comparison" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <div className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest mb-1">Scale Reference</div>
                <div className="text-white font-medium">Comparison vs. Philippine Coin</div>
              </div>
            </div>
          </motion.div>
        </div>


      </div>
    </section>
  );
}

