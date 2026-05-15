import { motion } from 'motion/react';
import { useInView } from './useInView';
import { Facebook, Instagram, ExternalLink } from 'lucide-react';
import { FacebookEmbed } from './FacebookEmbed';

export function PeopleSection() {
  const { ref, inView } = useInView();

  return (
    <section id="people" ref={ref} className="py-24 bg-gradient-to-b from-slate-900 via-emerald-950/20 to-slate-900 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-6 py-2 mb-6 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
            <Facebook className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 font-bold tracking-[0.2em] text-[10px] uppercase">Live Community Feed</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 italic tracking-tight">
            Voices of the Lake
          </h2>
          <p className="text-xl text-emerald-100/60 max-w-3xl mx-auto font-light leading-relaxed">
            Direct from our community. Witness the life and beauty of Lake Bato through the lens of local creators.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto mb-24">
          {/* Authentic Live Embed Section - Blaremazing Video */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-emerald-500/10 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative">
                <div className="mb-6 flex items-center justify-between px-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-600 rounded-lg">
                      <Facebook className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white font-bold tracking-widest text-xs uppercase">Verified Video - Blaremazing</span>
                  </div>
                  <a 
                    href="https://www.facebook.com/Blaremazing/videos/1356821355724697/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-colors"
                  >
                    View on Facebook <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <FacebookEmbed url="https://www.facebook.com/Blaremazing/videos/1356821355724697/" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8 italic">Want to see more of Lake Bato?</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="flex items-center gap-3 bg-[#1877F2] hover:bg-[#166fe5] text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-[#1877f2]/20 hover:-translate-y-1">
              <Facebook className="w-5 h-5" />
              Follow us on Facebook
            </button>
            <button className="flex items-center gap-3 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-pink-500/20 hover:-translate-y-1">
              <Instagram className="w-5 h-5" />
              Lake Bato Instagram
            </button>
          </div>
          <p className="text-white/30 text-[10px] font-bold uppercase tracking-[0.4em] mt-12">
            Share your story using #LakeBatoHeritage
          </p>
        </motion.div>

      </div>
    </section>
  );
}
