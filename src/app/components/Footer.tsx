import { motion } from 'motion/react';
import { Waves, Heart } from 'lucide-react';

export function Footer() {
  const members = [
    { name: 'Catherine Romaraog', role: 'Field Interviewer' },
    { name: 'Gabriel Mariscotes', role: 'Web Developer' },
    { name: 'Frances Palacio', role: 'Researcher & Documenter' },
    { name: 'Alysa Mae Ocampo', role: 'Heritage Videographer' },
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 border-t border-cyan-500/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Waves className="w-10 h-10 text-cyan-400" />
              <span className="text-white font-bold text-xl tracking-tight">Lake Bato Heritage</span>
            </div>
            <p className="text-cyan-100/60 text-base leading-relaxed max-w-sm font-light">
              Preserving ancestral heritage through immersive storytelling and modern technology. A digital tribute to the heart of Rinconada.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-[0.2em] text-xs">Project Team</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
              {members.map((member, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="text-cyan-100/60 text-sm hover:text-cyan-400 transition-colors group"
                >
                  <div className="font-bold text-white group-hover:text-cyan-400 transition-colors">{member.name}</div>
                  <div className="text-[10px] uppercase tracking-widest font-bold opacity-50">{member.role}</div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-cyan-500/10 pt-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-cyan-100/20 text-[10px] uppercase tracking-[0.4em] font-bold">
              © 2026 Lake Bato Heritage Project • All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
