import { motion } from 'motion/react';
import { useInView } from './useInView';
import { Anchor, ShoppingBag, Wheat, Hammer, ArrowRight, Play, Volume2, Film } from 'lucide-react';
import { useState, useRef } from 'react';
import cutting1 from '../../assets/fish-cutting-1.mp4';
import cutting2 from '../../assets/fish-cutting-2.mp4';
import spotOn from '../../assets/fish-spot-on.mp4';

export function LivelihoodSection() {
  const { ref, inView } = useInView();
  const videoRefs = [
    useRef<HTMLVideoElement>(null),
    useRef<HTMLVideoElement>(null),
    useRef<HTMLVideoElement>(null)
  ];

  const industries = [
    {
      title: 'Artisanal Fishing',
      description: 'The primary backbone of the local economy, using ancestral techniques to harvest Sinarapan and Tabios.',
      icon: Anchor,
      stats: '70% of households',
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      title: 'Net Weaving',
      description: 'A delicate traditional craft passed through generations, transitioning from manual labor to efficient sourcing.',
      icon: Hammer,
      stats: 'Heritage Craft',
      color: 'from-amber-500/20 to-orange-500/20'
    },
    {
      title: 'Lake Agriculture',
      description: 'The fertile banks of the lake support sustainable crop production, feeding both the town and neighboring regions.',
      icon: Wheat,
      stats: 'Diverse Yields',
      color: 'from-emerald-500/20 to-lime-500/20'
    }
  ];

  const videoSources = [cutting1, cutting2, spotOn];

  return (
    <section id="livelihood" ref={ref} className="py-24 bg-gradient-to-b from-slate-900 via-blue-950/10 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,_rgba(59,130,246,0.05)_0%,_transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-blue-500/50" />
            <span className="text-blue-400 font-bold tracking-[0.3em] text-xs uppercase">Economic Pulse</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 italic tracking-tight">
            The Lifeblood of Bato
          </h2>
          <p className="text-xl text-blue-100/60 max-w-2xl font-light leading-relaxed">
            Exploring the traditional industries that have sustained the community for centuries, blending ancestral wisdom with modern adaptation.
          </p>
        </motion.div>

        {/* Industry Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {industries.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              className={`group bg-gradient-to-br ${item.color} backdrop-blur-3xl border border-white/5 rounded-[2.5rem] p-10 hover:border-blue-500/30 transition-all duration-500 shadow-2xl hover:-translate-y-2`}
            >
              <div className="mb-8 relative">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-500">
                  <item.icon className="w-8 h-8 text-blue-400" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{item.title}</h3>
              <p className="text-blue-100/50 leading-relaxed mb-8 font-light italic">
                "{item.description}"
              </p>
              
              <div className="flex items-center justify-between pt-6 border-t border-white/5">
                <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">{item.stats}</span>
                <ArrowRight className="w-5 h-5 text-blue-500/40 group-hover:text-blue-400 group-hover:translate-x-2 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process in Action Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <Film className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 font-bold tracking-[0.3em] text-xs uppercase">Process in Action</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 italic tracking-tight">
            Harvesting Heritage
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {videoSources.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
              className="group relative aspect-[9/16] bg-black rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl"
            >
              <video
                ref={videoRefs[index]}
                src={src}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
