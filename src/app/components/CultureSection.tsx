import { motion } from 'motion/react';
import { useInView } from './useInView';
import { Music, Sparkles, Film, Image as ImageIcon } from 'lucide-react';
import { HymnPlayer } from './HymnPlayer';

export function CultureSection() {
  const { ref, inView } = useInView();

  return (
    <section id="culture" ref={ref} className="py-20 bg-gradient-to-b from-slate-900 via-purple-950/20 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_rgba(168,85,247,0.1)_0%,_transparent_50%)] pointer-events-none" />

      <motion.div
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-20 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute bottom-20 right-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Faith & Celebration
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-6" />
          <p className="text-lg text-purple-100/80 max-w-3xl mx-auto">
            The spiritual heart of the community, expressed through devotion and tradition
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-400/30 backdrop-blur-sm overflow-hidden mb-6">
              <div className="h-full flex items-center justify-center">
                <div className="text-center space-y-3">
                  <Film className="w-16 h-16 text-purple-400 mx-auto" />
                  <div className="text-purple-200 text-sm">
                    [VIDEO PLACEHOLDER – FLUVIAL PROCESSION]
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-semibold text-white">Fluvial Procession</h3>
              </div>
              <p className="text-purple-100/80 leading-relaxed mb-4">
                Every year, the lake becomes a floating cathedral as boats adorned with flowers
                and candles carry the image of Our Lady of Peñafrancia across the sacred waters.
              </p>
              <p className="text-purple-100/80 leading-relaxed">
                This tradition binds faith, family, and community—a moment when the entire lake
                shimmers with devotion, and the people's prayers rise like incense over the water.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="aspect-video bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-xl border border-purple-400/30 backdrop-blur-sm overflow-hidden">
              <div className="h-full flex items-center justify-center">
                <div className="text-center space-y-3">
                  <ImageIcon className="w-16 h-16 text-purple-400 mx-auto" />
                  <div className="text-purple-200 text-sm">
                    [IMAGE PLACEHOLDER – PEÑAFRANCIA DEVOTION]
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <HymnPlayer />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
