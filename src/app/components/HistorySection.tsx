import { motion } from 'motion/react';
import { useInView } from './useInView';
import { Calendar } from 'lucide-react';
import boatOfLifeImg from '../../assets/boat-of-life.jpg';
import fishermanImg from '../../assets/fisherman-working.jpg';

export function HistorySection() {
  const { ref, inView } = useInView();

  const timelineEvents = [
    { year: 'Ancient Times', event: 'Indigenous settlements around the lake' },
    { year: '1700s', event: 'Spanish colonial influence and early documentation' },
    { year: '1900s', event: 'Establishment of fishing communities' },
    { year: '1980s', event: 'Peak sinarapan population' },
    { year: 'Present', event: 'Conservation and heritage preservation efforts' },
  ];

  return (
    <section id="history" ref={ref} className="py-20 bg-gradient-to-b from-slate-800 via-slate-900 to-amber-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Echoes of Time
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full mx-auto mb-6 shadow-[0_0_10px_rgba(251,191,36,0.5)]" />
          <p className="text-xl text-amber-100/80 max-w-4xl mx-auto font-light leading-relaxed">
            Lake Bato, the 7th largest lake in the Philippines, offers a glimpse into the region’s rich history and unique biodiversity. Originally known as <span className="text-amber-400 font-normal italic">Sadit na Ranow</span>, it has been a vital resource for local communities since pre-Spanish times, fostering the growth of Bato town.
            <span className="block mt-4 text-[10px] uppercase tracking-[0.4em] text-amber-500/40 font-bold">(Wikipedia)</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group overflow-hidden rounded-2xl border border-amber-400/20 shadow-2xl shadow-amber-950/40"
          >
            <img 
              src={boatOfLifeImg} 
              alt="Boat of Life on Lake Bato" 
              className="w-full h-full object-cover aspect-video transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-4 left-6">
              <span className="text-amber-400 text-xs font-bold uppercase tracking-[0.2em] bg-slate-900/60 backdrop-blur-md px-3 py-1 rounded-full border border-amber-400/30">
                Boat of Life
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative group overflow-hidden rounded-2xl border border-amber-400/20 shadow-2xl shadow-amber-950/40"
          >
            <img 
              src={fishermanImg} 
              alt="Fisherman at Lake Bato" 
              className="w-full h-full object-cover aspect-video transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-4 left-6">
              <span className="text-amber-400 text-xs font-bold uppercase tracking-[0.2em] bg-slate-900/60 backdrop-blur-md px-3 py-1 rounded-full border border-amber-400/30">
                Struggles in Waters
              </span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-400 via-orange-400 to-transparent opacity-30" />
          <div className="space-y-10 pl-16 md:pl-24">
            {timelineEvents.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-[3.5rem] md:-left-[5.5rem] top-2 w-6 h-6 rounded-full bg-amber-500 border-4 border-slate-900 shadow-[0_0_15px_rgba(251,191,36,0.5)] z-10" />
                <div className="bg-gradient-to-br from-slate-800/50 to-amber-900/10 backdrop-blur-md border border-white/5 rounded-2xl p-6 hover:border-amber-400/30 transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
                    <span className="text-amber-300 font-bold text-xl tracking-wide">{item.year}</span>
                  </div>
                  <p className="text-amber-100/70 font-light leading-relaxed">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}


