import { motion } from 'motion/react';
import { Map as MapIcon, Layers, Maximize2 } from 'lucide-react';

export function InteractiveMap() {
  return (
    <div className="relative w-full aspect-square bg-slate-950 rounded-2xl border border-white/10 overflow-hidden shadow-2xl group">
      {/* Google Maps Iframe */}
      <iframe
        title="Lake Bato Map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d62035.85165714896!2d123.366667!3d13.333333!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a1e4c76b9f6973%3A0x82b43b9c9f69e6b7!2sLake%20Bato!5e1!3m2!1sen!2sph!4v1715750000000!5m2!1sen!2sph"
        className="w-full h-full grayscale-[0.2] contrast-[1.1] opacity-90 transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      {/* Aesthetic Overlays */}
      <div className="absolute inset-0 pointer-events-none border-[12px] border-slate-950/20" />
      <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/20 rounded-2xl" />
      
      {/* Top Controls UI (Static for aesthetic) */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-center pointer-events-none">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-900/80 backdrop-blur-md border border-white/20 rounded-full shadow-lg">
          <MapIcon className="w-3.5 h-3.5 text-cyan-400" />
          <span className="text-[10px] text-white font-semibold uppercase tracking-wider">Satellite View</span>
        </div>
        <div className="flex gap-2">
          <div className="p-2 bg-slate-900/80 backdrop-blur-md border border-white/20 rounded-lg shadow-lg">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
          </div>
          <div className="p-2 bg-slate-900/80 backdrop-blur-md border border-white/20 rounded-lg shadow-lg">
            <Maximize2 className="w-3.5 h-3.5 text-cyan-400" />
          </div>
        </div>
      </div>

      {/* Bottom Label */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-slate-900/90 backdrop-blur-md border border-white/20 rounded-xl shadow-xl pointer-events-none min-w-[200px] text-center">
        <h3 className="text-white text-xs font-bold uppercase tracking-widest">Lake Bato</h3>
        <p className="text-cyan-400/70 text-[9px] uppercase tracking-tighter mt-0.5">Camarines Sur, Bicol Region</p>
      </div>

      {/* Scanline Effect */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.05)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_2px,3px_100%] opacity-20" />
    </div>
  );
}

