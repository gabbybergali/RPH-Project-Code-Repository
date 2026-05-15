import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import heroVideo from '../../assets/lake-aerial.mov';

export function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/quicktime" />
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlays */}
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-transparent to-slate-900" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-6"
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="inline-block px-6 py-2 bg-white/10 border border-white/20 rounded-full text-white text-sm backdrop-blur-md"
          >
            A Rinconada Heritage Project
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight drop-shadow-2xl">
            The Lake of Bato
          </h1>
          <h2 className="text-3xl md:text-5xl font-light text-cyan-100 drop-shadow-lg">
            Heritage of Rinconada
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mt-6 leading-relaxed drop-shadow-md">
            Stories, culture, biodiversity, and people connected by the waters of Lake Bato.
          </p>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(103,232,249,0.5)" }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToAbout}
            className="mt-8 px-10 py-4 bg-white text-slate-900 rounded-full font-semibold hover:bg-cyan-50 transition-all duration-300 shadow-xl"
          >
            Explore
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <ChevronDown className="w-8 h-8 text-white/70" />
      </motion.div>
    </section>
  );
}

