import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { useInView } from './useInView';
import { Sprout, MessageCircle, Film, Quote, Music, Play, Volume2 } from 'lucide-react';
import youthVideo from '../../assets/youth-voices.mp4';
import perspectiveVideo from '../../assets/farmer-perspectives.mov';

export function PamanaSection() {
  const { ref, inView } = useInView();
  const youthRef = useRef<HTMLVideoElement>(null);
  const perspectiveRef = useRef<HTMLVideoElement>(null);
  const [youthMuted, setYouthMuted] = useState(true);
  const [perspectiveMuted, setPerspectiveMuted] = useState(true);

  const toggleYouth = () => {
    if (!youthRef.current) return;
    const newState = !youthMuted;
    setYouthMuted(newState);
    youthRef.current.muted = newState;
    if (!newState) {
      youthRef.current.play();
      setPerspectiveMuted(true);
      if (perspectiveRef.current) perspectiveRef.current.muted = true;
    }
  };

  const togglePerspective = () => {
    if (!perspectiveRef.current) return;
    const newState = !perspectiveMuted;
    setPerspectiveMuted(newState);
    perspectiveRef.current.muted = newState;
    if (!newState) {
      perspectiveRef.current.play();
      setYouthMuted(true);
      if (youthRef.current) youthRef.current.muted = true;
    }
  };

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
                ref={youthRef}
                autoPlay
                muted={youthMuted}
                loop
                playsInline
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
              >
                <source src={youthVideo} type="video/mp4" />
              </video>
              <button 
                onClick={toggleYouth}
                className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors"
              >
                <div className="w-20 h-20 bg-lime-500 rounded-full flex items-center justify-center shadow-2xl scale-90 group-hover:scale-100 transition-transform duration-500">
                  {youthMuted ? (
                    <Play className="w-8 h-8 text-black fill-black ml-1" />
                  ) : (
                    <Volume2 className="w-8 h-8 text-black animate-pulse" />
                  )}
                </div>
              </button>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6">
                <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
                  <Film className="w-4 h-4 text-lime-400" />
                  <span className="text-white text-[10px] font-bold uppercase tracking-widest">Youth's Pledge</span>
                </div>
              </div>
            </div>
            <div className="bg-slate-800/30 backdrop-blur-md border border-white/5 rounded-3xl p-8 hover:border-lime-400/30 transition-all duration-500">
              <div className="flex items-center gap-4 mb-4">
                <MessageCircle className="w-6 h-6 text-lime-400" />
                <h3 className="text-xl font-semibold text-white tracking-wide">What Can The Youth Do?</h3>
              </div>
              <p className="text-lime-100/60 leading-relaxed font-light">
                A local youth leader highlights the critical role the younger generation plays in the survival of Lake Bato. She emphasizes that preservation is not just a large-scale government task but a personal responsibility. By focusing on three actionable steps—active volunteerism in clean-up drives, disciplined waste management, and individual accountability—she illustrates how small, consistent actions can safeguard the lake’s heritage for future Rinconada residents.
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
                ref={perspectiveRef}
                autoPlay
                muted={perspectiveMuted}
                loop
                playsInline
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
              >
                <source src={perspectiveVideo} type="video/quicktime" />
                <source src={perspectiveVideo} type="video/mp4" />
              </video>
              <button 
                onClick={togglePerspective}
                className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors"
              >
                <div className="w-20 h-20 bg-lime-500 rounded-full flex items-center justify-center shadow-2xl scale-90 group-hover:scale-100 transition-transform duration-500">
                  {perspectiveMuted ? (
                    <Play className="w-8 h-8 text-black fill-black ml-1" />
                  ) : (
                    <Volume2 className="w-8 h-8 text-black animate-pulse" />
                  )}
                </div>
              </button>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6">
                <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
                  <Sprout className="w-4 h-4 text-lime-400" />
                  <span className="text-white text-[10px] font-bold uppercase tracking-widest">Sticking to Traditions</span>
                </div>
              </div>
            </div>
            <div className="bg-slate-800/30 backdrop-blur-md border border-white/5 rounded-3xl p-8 hover:border-lime-400/30 transition-all duration-500">
              <div className="flex items-center gap-4 mb-4">
                <Film className="w-6 h-6 text-lime-400" />
                <h3 className="text-xl font-semibold text-white tracking-wide">Enduring Traditions</h3>
              </div>
              <p className="text-lime-100/60 leading-relaxed font-light">
                The local farmer talked about how the core fishing practices in Lake Bato have remained constant throughout the years. While the physical labor of hand-weaving nets has transitioned to purchasing ready-made materials to save time, the traditional methods and techniques used to harvest the lake's bounty remain the same.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}


