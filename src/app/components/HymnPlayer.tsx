import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Music, Play, Pause, RotateCcw, Volume2 } from 'lucide-react';
import hymnAudio from '../../assets/hymn-of-bato.mp3';

export function HymnPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState('00:00');
  const [duration, setDuration] = useState('00:00');
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const total = audioRef.current.duration;
      setProgress((current / total) * 100);
      
      const mins = Math.floor(current / 60);
      const secs = Math.floor(current % 60);
      setCurrentTime(`${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      const total = audioRef.current.duration;
      const mins = Math.floor(total / 60);
      const secs = Math.floor(total % 60);
      setDuration(`${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = x / rect.width;
      audioRef.current.currentTime = percentage * audioRef.current.duration;
    }
  };

  return (
    <div className="bg-slate-900/60 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-8 md:p-16 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.6)] overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-lime-500/5 via-transparent to-cyan-500/5 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-3 bg-lime-500/20 border border-lime-400/30 rounded-full px-5 py-2 mb-8 shadow-inner"
        >
          <Music className="w-4 h-4 text-lime-400" />
          <span className="text-lime-300 font-bold tracking-[0.2em] text-[10px] uppercase">Heritage Audio</span>
        </motion.div>
        
        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight italic">
          Banwaan Na Guinikanan
        </h3>
        
        <p className="text-xl md:text-2xl text-lime-100/90 font-light italic leading-relaxed mb-12 max-w-3xl mx-auto">
          "The land where we were born" — a hymn that echoes the deep connection between the people and their ancestral home by the lake.
        </p>

        {/* Custom Audio Player UI */}
        <div className="bg-black/40 backdrop-blur-md rounded-3xl border border-white/5 p-8 md:p-12 shadow-2xl relative group overflow-hidden">
          <audio 
            ref={audioRef} 
            src={hymnAudio} 
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onEnded={() => setIsPlaying(false)}
          />

          <div className="flex flex-col gap-10">
            {/* Progress Bar */}
            <div className="space-y-4">
              <div 
                className="h-2 w-full bg-white/5 rounded-full overflow-hidden relative cursor-pointer group/progress"
                onClick={handleSeek}
              >
                <motion.div 
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-lime-400 via-cyan-400 to-teal-400 rounded-full shadow-[0_0_15px_rgba(163,230,53,0.5)]"
                  animate={{ width: `${progress}%` }}
                  transition={{ type: 'tween', ease: 'linear' }}
                />
                <div className="absolute top-0 right-0 h-full w-full bg-white/0 group-hover/progress:bg-white/5 transition-colors" />
              </div>
              <div className="flex justify-between text-[11px] font-bold text-white/30 uppercase tracking-[0.3em]">
                <span>{currentTime}</span>
                <span>{duration}</span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-12">
              <button 
                onClick={() => audioRef.current && (audioRef.current.currentTime = 0)}
                className="text-white/20 hover:text-white transition-colors hover:scale-110"
              >
                <RotateCcw className="w-6 h-6" />
              </button>
              
              <button 
                onClick={togglePlay}
                className="w-24 h-24 rounded-full bg-white text-slate-900 flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)] group/play"
              >
                {isPlaying ? (
                  <Pause className="w-10 h-10 fill-slate-900" />
                ) : (
                  <Play className="w-10 h-10 fill-slate-900 translate-x-1" />
                )}
              </button>

              <button className="text-white/20 hover:text-white transition-colors hover:scale-110">
                <Volume2 className="w-6 h-6" />
              </button>
            </div>

            <div className="pt-6 border-t border-white/5 flex flex-col items-center">
              <div className="text-[10px] font-bold text-lime-400/50 uppercase tracking-[0.4em] mb-2">Composer & Legacy</div>
              <div className="text-white text-lg font-medium tracking-wide italic">Maria Salve Solares Tigue</div>
              <div className="text-white/30 text-[10px] mt-1 font-bold uppercase tracking-widest">Hymn of Bato, Camarines Sur</div>
            </div>
          </div>
          
          {/* Animated Visualizer Bars */}
          <div className="absolute bottom-6 right-10 flex items-end gap-1.5 h-12">
            {[40, 70, 45, 90, 65, 80, 50, 85, 60, 75].map((h, i) => (
              <motion.div 
                key={i} 
                className="w-1.5 bg-lime-400/30 rounded-full"
                animate={isPlaying ? {
                  height: [`${h * 0.5}%`, `${h}%`, `${h * 0.7}%`, `${h}%`]
                } : { height: '10%' }}
                transition={{
                  duration: 0.5 + Math.random() * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
