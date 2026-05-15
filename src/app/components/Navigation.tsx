import { motion } from 'motion/react';
import { Waves } from 'lucide-react';

export function Navigation() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-slate-900/95 to-slate-900/80 backdrop-blur-md border-b border-cyan-500/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <Waves className="w-8 h-8 text-cyan-400" />
            <span className="text-white font-semibold">Lake Bato Heritage</span>
          </div>
          <div className="hidden md:flex gap-6">
            {['About', 'History', 'Life', 'Culture', 'People', 'Pamana'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-cyan-100 hover:text-cyan-400 transition-colors duration-200"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
