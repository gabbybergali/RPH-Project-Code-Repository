import { motion } from 'motion/react';
import { useInView } from './useInView';
import { InteractiveMap } from './InteractiveMap';

export function AboutSection() {
  const { ref, inView } = useInView();

  return (
    <section id="about" ref={ref} className="py-24 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                A Living Heritage
              </h2>
              <div className="h-1.5 w-24 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full" />
            </div>
            
            <div className="space-y-6 text-lg text-cyan-100/80 leading-relaxed font-light">
              <p>
                Lake Bato is the <span className="text-cyan-300 font-medium">7th largest lake in the Philippines</span>, a vital ecosystem pulsing in the heart
                of the Rinconada region. For centuries, its waters have sustained communities, nurtured
                unique biodiversity, and forged the resilient cultural identity of the Bicolano people.
              </p>
              <p>
                This lake is not merely a body of water—it is a living archive of stories, traditions, and
                ancestral wisdom. From the tiny <span className="italic text-cyan-300 underline decoration-cyan-500/30 underline-offset-4">Sinarapan</span> to the grand fluvial processions, 
                Lake Bato remains the lifeblood that connects Rinconada's past to its future.
              </p>
            </div>

            <div className="flex gap-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">7th</div>
                <div className="text-xs uppercase tracking-widest text-cyan-500/60 mt-1">Largest Lake</div>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="text-center">
                <div className="text-3xl font-bold text-white">3,800</div>
                <div className="text-xs uppercase tracking-widest text-cyan-500/60 mt-1">Hectares</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            {/* Ambient Background Glow */}
            <div className="absolute -inset-10 bg-cyan-500/10 blur-[100px] rounded-full opacity-50" />
            
            <InteractiveMap />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

