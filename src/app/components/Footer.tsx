import { motion } from 'motion/react';
import { Waves, Heart } from 'lucide-react';

export function Footer() {
  const members = [
    'Catherine Romaraog',
    'Gabriel Mariscotes',
    'Frances Palacio',
    'Alysa Mae Ocampo',
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 border-t border-cyan-500/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Waves className="w-8 h-8 text-cyan-400" />
              <span className="text-white font-semibold text-lg">Lake Bato Heritage</span>
            </div>
            <p className="text-cyan-100/60 text-sm leading-relaxed">
              Preserving heritage through stories and technology.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Project Team</h3>
            <ul className="space-y-2">
              {members.map((member, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="text-cyan-100/60 text-sm"
                >
                  {member}
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              {['📘', '📷', '🐦', '📧'].map((icon, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-cyan-500/20 border border-cyan-400/30 rounded-lg flex items-center justify-center text-2xl hover:bg-cyan-500/30 transition-colors duration-200"
                >
                  {icon}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-cyan-500/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-cyan-100/40 text-sm">
              © 2026 Lake Bato Heritage Project. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-cyan-100/60 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-red-400" />
              <span>for Rinconada</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
