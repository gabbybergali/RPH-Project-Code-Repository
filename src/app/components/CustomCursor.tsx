import { useEffect, useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import fishImage from '../../imports/Gemini_Generated_Image_2njkgt2njkgt2njk-removebg-preview.png';

interface Ripple {
  id: number;
  x: number;
  y: number;
  isClick: boolean;
  scale: number;
  duration: number;
}

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [isHovering, setIsHovering] = useState(false);
  const rippleIdRef = useRef(0);
  const lastRippleTimeRef = useRef(0);
  const audioContextRef = useRef<AudioContext | null>(null);

  // Initialize and resume audio context on interaction
  const initAudio = useCallback(() => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    if (audioContextRef.current.state === 'suspended') {
      audioContextRef.current.resume();
    }
  }, []);

  const playRippleSound = useCallback((isClick: boolean) => {
    try {
      initAudio();
      const ctx = audioContextRef.current!;
      const now = ctx.currentTime;
      
      // 1. Foundation: The "Swish" (Low-pass Noise)
      const duration = isClick ? 0.6 : 0.4;
      const bufferSize = ctx.sampleRate * duration;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1000, now);
      filter.frequency.exponentialRampToValueAtTime(200, now + duration);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(isClick ? 0.02 : 0.01, now + 0.1); // Very soft swish
      gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      noise.start(now);

      // 2. The "Wet Bubbles" (Bloop sounds)
      const numBubbles = isClick ? 4 : 2;
      for (let i = 0; i < numBubbles; i++) {
        const bubbleOsc = ctx.createOscillator();
        const bubbleGain = ctx.createGain();
        const startTime = now + (Math.random() * (duration * 0.5));
        const bubbleDur = 0.1 + Math.random() * 0.1;

        bubbleOsc.type = 'sine';
        // "Wet" frequencies (200-500Hz)
        const startFreq = 200 + Math.random() * 200;
        const endFreq = startFreq * (1.5 + Math.random() * 0.5); // Upward sweep for "bloop"
        
        bubbleOsc.frequency.setValueAtTime(startFreq, startTime);
        bubbleOsc.frequency.exponentialRampToValueAtTime(endFreq, startTime + bubbleDur);

        bubbleGain.gain.setValueAtTime(0, startTime);
        bubbleGain.gain.linearRampToValueAtTime(isClick ? 0.03 : 0.015, startTime + 0.02);
        bubbleGain.gain.exponentialRampToValueAtTime(0.001, startTime + bubbleDur);

        bubbleOsc.connect(bubbleGain);
        bubbleGain.connect(ctx.destination);

        bubbleOsc.start(startTime);
        bubbleOsc.stop(startTime + bubbleDur);
      }
    } catch (e) {
      // Silent fail
    }
  }, [initAudio]);

  const addRipple = useCallback((x: number, y: number, isClick = false) => {
    const id = rippleIdRef.current++;
    const newRipple: Ripple = {
      id,
      x,
      y,
      isClick,
      scale: isClick ? 6 : 4,
      duration: isClick ? 2.5 : 2,
    };

    setRipples((prev) => [...prev, newRipple]);
    playRippleSound(isClick);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, (isClick ? 2500 : 2000) + 100);
  }, [playRippleSound]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      const currentTime = Date.now();
      const rippleInterval = 200; 

      if (currentTime - lastRippleTimeRef.current > rippleInterval) {
        addRipple(e.clientX, e.clientY);
        lastRippleTimeRef.current = currentTime;
      }

      const target = e.target as HTMLElement;
      const isInteractive = target.closest('button, a, [role="button"], input, select, textarea');
      setIsHovering(!!isInteractive);
    };

    const handleClick = (e: MouseEvent) => {
      initAudio(); // Explicitly resume on click
      
      // Multiple layered rings for a more realistic splash/ripple
      for (let i = 0; i < 4; i++) {
        setTimeout(() => {
          const id = rippleIdRef.current++;
          const newRipple: Ripple = {
            id,
            x: e.clientX,
            y: e.clientY,
            isClick: true,
            scale: 5 + i * 1.5,
            duration: 2.2 + i * 0.2,
          };
          setRipples((prev) => [...prev, newRipple]);
          if (i === 0) playRippleSound(true); 
          
          setTimeout(() => {
            setRipples((prev) => prev.filter((r) => r.id !== id));
          }, (newRipple.duration * 1000) + 100);
        }, i * 80);
      }
    };

    // Unlock audio on first interaction anywhere on page
    const unlockAudio = () => {
      initAudio();
      window.removeEventListener('click', unlockAudio);
      window.removeEventListener('keydown', unlockAudio);
    };

    window.addEventListener('click', unlockAudio);
    window.addEventListener('keydown', unlockAudio);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    
    return () => {
      window.removeEventListener('click', unlockAudio);
      window.removeEventListener('keydown', unlockAudio);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, [addRipple, playRippleSound, initAudio]);

  return (
    <>
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            className="fixed pointer-events-none z-[9998]"
            initial={{ 
              x: ripple.x, 
              y: ripple.y, 
              scale: 0, 
              opacity: ripple.isClick ? 0.7 : 0.4 
            }}
            animate={{ 
              scale: ripple.scale, 
              opacity: 0 
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: ripple.duration,
              ease: [0.22, 1, 0.36, 1], 
            }}
            style={{ x: '-50%', y: '-50%' }}
          >
            <div
              className="w-12 h-12 rounded-full border border-cyan-300/30 shadow-[0_0_15px_rgba(103,232,249,0.2)]"
              style={{
                background: ripple.isClick 
                  ? 'radial-gradient(circle, rgba(103,232,249,0.15) 0%, rgba(103,232,249,0) 70%)'
                  : 'none',
                backdropFilter: ripple.isClick ? 'blur(1px)' : 'none',
              }}
            />
          </motion.div>
        ))}
      </AnimatePresence>

      <motion.div
        className="fixed pointer-events-none z-[10000]"
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
          scale: isHovering ? 1.4 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 30,
          mass: 0.6,
        }}
      >
        <motion.div
          animate={{
            rotate: isHovering ? [0, 15, -15, 0] : [0, 5, -5, 0],
            y: [0, -3, 3, 0],
          }}
          transition={{
            duration: isHovering ? 0.5 : 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img
            src={fishImage}
            alt="Sinarapan cursor"
            className="w-12 h-12 select-none pointer-events-none"
            style={{
              filter: isHovering 
                ? 'drop-shadow(0 0 12px rgba(103,232,249,0.9)) saturate(1.5)' 
                : 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.4))',
              transition: 'filter 0.3s ease'
            }}
          />
        </motion.div>
      </motion.div>
    </>
  );
}


