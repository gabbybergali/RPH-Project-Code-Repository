import { motion } from 'motion/react';
import { useInView } from './useInView';
import { Music, Sparkles, Film, Image as ImageIcon, Volume2, VolumeX } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import fluvialVideo from '../../assets/fluvial-procession.mp4';
import hymnAudio from '../../assets/hymn-of-bato.mp3';

export function CultureSection() {
  const { ref, inView } = useInView();
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (!videoRef.current || !audioRef.current) return;

    const video = videoRef.current;
    const audio = audioRef.current;

    const updatePlayback = () => {
      if (inView && !video.paused) {
        audio.muted = false;
        audio.play().catch(() => {});
      } else {
        audio.muted = true;
        audio.pause();
      }
    };

    updatePlayback();

    const handlePlay = () => {
      if (inView) {
        audio.muted = false;
        audio.play().catch(() => {});
      }
    };
    
    const handlePause = () => {
      audio.muted = true;
      audio.pause();
    };

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      audio.pause();
    };
  }, [inView]);

  return (
    <section id="culture" ref={ref} className="py-20 bg-gradient-to-b from-slate-900 via-purple-950/20 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_rgba(168,85,247,0.1)_0%,_transparent_50%)] pointer-events-none" />

      {/* Audio Element */}
      <audio ref={audioRef} src={hymnAudio} loop />

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
            Artery of Faith
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-6" />
          <p className="text-lg text-purple-100/80 max-w-3xl mx-auto">
            The spiritual heart of the community, expressed through devotion and tradition
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="aspect-video bg-black/40 rounded-[2rem] border border-purple-400/30 backdrop-blur-sm overflow-hidden mb-12 shadow-[0_32px_64px_-12px_rgba(168,85,247,0.3)] relative group">
              <video 
                ref={videoRef}
                src={fluvialVideo}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                autoPlay
                muted
                loop
                playsInline
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60 pointer-events-none" />
              <div className="absolute bottom-8 left-8 pointer-events-none">
                <div className="flex items-center gap-3 mb-2">
                  <Sparkles className="w-5 h-5 text-purple-400" />
                  <span className="text-[10px] font-bold text-purple-300 uppercase tracking-[0.4em]">"Daluyan ng Pananampalataya"</span>
                </div>
                <h3 className="text-3xl font-bold text-white italic tracking-tight">The Fluvial Procession</h3>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-2xl border border-white/5 rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Sparkles className="w-32 h-32 text-purple-400" />
              </div>
              
              <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div className="md:col-span-2">
                  <p className="text-xl md:text-2xl text-purple-100/90 font-light leading-relaxed italic mb-8">
                    "Every third Saturday of September, the fluvial procession of Ina, Our Lady of Peñafrancia, takes place on the waters of Lake Bato. Rooted in the deep Marian devotion of the Bicol region, this local tradition mirrors the grand Peñafrancia Festival, where millions honor Our Lady of Peñafrancia, affectionately called Ina (Mother)."
                  </p>
                  <div className="h-px w-full bg-purple-400/20 mb-8" />
                  <p className="text-lg text-purple-100/70 leading-relaxed font-light">
                    While the main celebration unfolds along the Bicol River in Naga City, the people of Bato have embraced this devotion through their own fluvial procession on the lake that sustains their community. 
                    <span className="block mt-4 text-sm font-bold uppercase tracking-widest text-purple-400/60">— Filipinas Heritage Library</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
