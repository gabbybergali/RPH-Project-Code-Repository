import { motion } from 'motion/react';
import { useInView } from './useInView';
import { Sprout, MessageCircle, Film, Quote, Music, Play } from 'lucide-react';
import youthVideo from '../../assets/trash-on-waters.mov';
import perspectiveVideo from '../../assets/farmer-perspectives.mov';

export function PamanaSection() {
  const { ref, inView } = useInView();

  const quotes = [
    {
      text: "We need to protect what our ancestors left us, not just for ourselves but for those who will come after.",
      author: "Maria, 19",
      role: "University Student",
    },
    {
      text: "The lake taught me patience and respect. I want future generations to learn the same lessons.",
      author: "Carlos, 22",
      role: "Young Fisherman",
    },
    {
      text: "Technology can help us share our stories. The world needs to know about Lake Bato.",
      author: "Ana, 20",
      role: "Digital Creator",
    },
  ];

  return (
    <section id="pamana" ref={ref} className="py-24 bg-gradient-to-b from-slate-900 via-lime-950/10 to-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 bg-lime-500/10 border border-lime-400/30 rounded-full px-8 py-3 mb-8 backdrop-blur-md">
            <Sprout className="w-5 h-5 text-lime-400" />
            <span className="text-lime-300 font-bold tracking-[0.2em] text-xs uppercase">PAMANA i-STORYA</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Preserving the Future
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-lime-400 to-green-500 rounded-full mx-auto mb-8 shadow-[0_0_15px_rgba(163,230,53,0.4)]" />
          <p className="text-xl text-lime-100/70 max-w-3xl mx-auto font-light leading-relaxed">
            Where ancestral legacy meets the vision of the next generation. A commitment to honor, protect, and pass on the stories of Bato.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="group"
          >
            <div className="aspect-video bg-black rounded-3xl border border-white/5 overflow-hidden mb-6 shadow-2xl relative">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
              >
                <source src={youthVideo} type="video/quicktime" />
                <source src={youthVideo} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6">
                <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
                  <Film className="w-4 h-4 text-lime-400" />
                  <span className="text-white text-[10px] font-bold uppercase tracking-widest">Documentary Short</span>
                </div>
              </div>
            </div>
            <div className="bg-slate-800/30 backdrop-blur-md border border-white/5 rounded-3xl p-8 hover:border-lime-400/30 transition-all duration-500">
              <div className="flex items-center gap-4 mb-4">
                <MessageCircle className="w-6 h-6 text-lime-400" />
                <h3 className="text-xl font-semibold text-white tracking-wide">Voices of the Future</h3>
              </div>
              <p className="text-lime-100/60 leading-relaxed font-light">
                Young people from around Lake Bato share their perspectives on preserving their
                heritage while adapting to modern challenges. Their insights bridge tradition
                and innovation.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="group"
          >
            <div className="aspect-video bg-black rounded-3xl border border-white/5 overflow-hidden mb-6 shadow-2xl relative">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
              >
                <source src={perspectiveVideo} type="video/quicktime" />
                <source src={perspectiveVideo} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6">
                <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
                  <Sprout className="w-4 h-4 text-lime-400" />
                  <span className="text-white text-[10px] font-bold uppercase tracking-widest">Stewardship</span>
                </div>
              </div>
            </div>
            <div className="bg-slate-800/30 backdrop-blur-md border border-white/5 rounded-3xl p-8 hover:border-lime-400/30 transition-all duration-500">
              <div className="flex items-center gap-4 mb-4">
                <Film className="w-6 h-6 text-lime-400" />
                <h3 className="text-xl font-semibold text-white tracking-wide">Growing Forward</h3>
              </div>
              <p className="text-lime-100/60 leading-relaxed font-light">
                Through education, technology, and community engagement, the youth are becoming
                stewards of Lake Bato's future, ensuring that its stories and ecosystems endure.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {quotes.map((quote, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              className="bg-slate-800/20 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:border-lime-400/30 transition-all duration-500 relative group/quote"
            >
              <Quote className="w-10 h-10 text-lime-500/20 absolute top-6 right-6 group-hover/quote:text-lime-500/40 transition-colors" />
              <p className="text-lime-100/80 italic mb-8 leading-relaxed font-light relative z-10">
                "{quote.text}"
              </p>
              <div className="border-t border-white/5 pt-6 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-lime-500/10 border border-lime-500/20 flex items-center justify-center text-lime-400 font-bold">
                  {quote.author[0]}
                </div>
                <div>
                  <div className="font-semibold text-white tracking-tight">{quote.author}</div>
                  <div className="text-lime-400/60 text-xs font-bold uppercase tracking-widest">{quote.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


