import { motion } from 'motion/react';
import { useInView } from './useInView';
import { Users, Fish, Palmtree, Camera, TrendingUp } from 'lucide-react';

export function PeopleSection() {
  const { ref, inView } = useInView();

  const stats = [
    { icon: Users, label: 'Population of Bato', value: '~52,000', color: 'from-emerald-400 to-teal-400' },
    { icon: Fish, label: 'Fisherfolk Families', value: '~3,500', color: 'from-cyan-400 to-blue-400' },
    { icon: TrendingUp, label: 'Population Density', value: '470/km²', color: 'from-green-400 to-emerald-400' },
  ];

  const profiles = [
    {
      title: 'Fisherfolk',
      description: 'Generations of families whose lives are intertwined with the rhythm of the lake',
      icon: Fish,
      color: 'from-cyan-500/20 to-teal-500/20',
      border: 'border-cyan-400/30',
    },
    {
      title: 'Residents',
      description: 'Communities living in harmony with nature, preserving traditions while embracing progress',
      icon: Users,
      color: 'from-emerald-500/20 to-green-500/20',
      border: 'border-emerald-400/30',
    },
    {
      title: 'Youth',
      description: 'The next generation of heritage keepers, blending innovation with tradition',
      icon: Palmtree,
      color: 'from-green-500/20 to-lime-500/20',
      border: 'border-green-400/30',
    },
    {
      title: 'Visitors',
      description: 'Travelers drawn to the lake\'s beauty, culture, and ecological significance',
      icon: Camera,
      color: 'from-teal-500/20 to-cyan-500/20',
      border: 'border-teal-400/30',
    },
  ];

  return (
    <section id="people" ref={ref} className="py-20 bg-gradient-to-b from-slate-900 via-emerald-950/20 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            The People of the Lake
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mx-auto mb-6" />
          <p className="text-lg text-emerald-100/80 max-w-3xl mx-auto">
            Stories of everyday life, resilience, and community around Lake Bato
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-gradient-to-br from-emerald-900/40 to-teal-900/40 backdrop-blur-sm border border-emerald-400/30 rounded-xl p-6 text-center hover:border-emerald-400/50 transition-all duration-300"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-emerald-200/80 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {profiles.map((profile, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className={`bg-gradient-to-br ${profile.color} backdrop-blur-sm border ${profile.border} rounded-xl p-6 hover:scale-105 transition-transform duration-300`}
            >
              <profile.icon className="w-12 h-12 text-emerald-300 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">{profile.title}</h3>
              <p className="text-emerald-100/70 text-sm leading-relaxed">{profile.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {['FISHERFOLK', 'COMMUNITY LIFE', 'TOURISTS', 'DAILY ROUTINES', 'CELEBRATIONS', 'TRADITIONS'].map((label, index) => (
            <div
              key={index}
              className="aspect-square bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-lg border border-emerald-400/30 backdrop-blur-sm flex items-center justify-center p-4"
            >
              <div className="text-center space-y-2">
                <div className="text-4xl">📸</div>
                <div className="text-emerald-200 text-xs">
                  [IMAGE PLACEHOLDER]
                </div>
                <div className="text-emerald-300 text-xs font-semibold">
                  {label}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
