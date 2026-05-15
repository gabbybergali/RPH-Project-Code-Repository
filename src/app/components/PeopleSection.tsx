import { motion } from 'motion/react';
import { useInView } from './useInView';
import { Users, Heart, Share2, MessageCircle, Facebook, Instagram, ExternalLink } from 'lucide-react';
import { FacebookEmbed } from './FacebookEmbed';
import boatLife from '../../assets/boat-of-life.jpg';
import fisherman from '../../assets/fisherman-working.jpg';

export function PeopleSection() {
  const { ref, inView } = useInView();

  const communityPosts = [
    {
      user: 'LakeBatoAdventures',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
      image: boatLife,
      caption: 'Witnessing the "Boat of Life" at dawn. This is more than just fishing; it is a legacy. 🌅 #LakeBato #Heritage #Bikol',
      likes: '1.2k',
      platform: 'Facebook'
    },
    {
      user: 'BatoFisherfolkCollective',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aria',
      image: fisherman,
      caption: 'Preparing for the night harvest. Our ancestors taught us that the lake only gives what we respect. 🛶✨ #Sinarapan #FisherfolkLife',
      likes: '850',
      platform: 'Facebook'
    }
  ];

  return (
    <section id="people" ref={ref} className="py-24 bg-gradient-to-b from-slate-900 via-emerald-950/20 to-slate-900 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-6 py-2 mb-6 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
            <Facebook className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 font-bold tracking-[0.2em] text-[10px] uppercase">Live Community Feed</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 italic tracking-tight">
            Voices of the Lake
          </h2>
          <p className="text-xl text-emerald-100/60 max-w-3xl mx-auto font-light leading-relaxed">
            Direct from our community. Explore authentic stories and snapshots shared by locals and travelers on social media.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 mb-24">
          {/* Authentic Live Embed Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-emerald-500/10 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative">
                <div className="mb-6 flex items-center justify-between px-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-600 rounded-lg">
                      <Facebook className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white font-bold tracking-widest text-xs uppercase">Verified Video</span>
                  </div>
                  <a 
                    href="https://www.facebook.com/Blaremazing/videos/1356821355724697/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-colors"
                  >
                    View on Facebook <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <FacebookEmbed url="https://www.facebook.com/Blaremazing/videos/1356821355724697/" />
              </div>
            </div>
          </motion.div>

          {/* Curated Community Grid */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {communityPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className="bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[2rem] overflow-hidden hover:border-emerald-500/30 transition-all group"
              >
                <div className="flex flex-col sm:flex-row h-full">
                  <div className="sm:w-2/5 aspect-square sm:aspect-auto overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.user} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="sm:w-3/5 p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <img src={post.avatar} className="w-8 h-8 rounded-full border border-emerald-500/30" alt="" />
                        <span className="text-white font-bold text-xs">@{post.user}</span>
                      </div>
                      <p className="text-white/60 text-sm leading-relaxed italic mb-4">"{post.caption}"</p>
                    </div>
                    <div className="flex items-center gap-4 text-white/30 text-xs font-bold">
                      <span className="flex items-center gap-1.5"><Heart className="w-4 h-4" /> {post.likes}</span>
                      <span className="flex items-center gap-1.5"><MessageCircle className="w-4 h-4" /> Connect</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            <div className="mt-4 bg-emerald-500/10 border border-emerald-500/20 rounded-[2rem] p-8 text-center">
              <h4 className="text-white font-bold mb-2 tracking-tight">Your Story Matters</h4>
              <p className="text-emerald-100/60 text-sm mb-6">Tag your photos with <span className="text-emerald-400 font-bold">#LakeBatoHeritage</span> to be featured on our community wall.</p>
              <button className="w-full bg-white text-slate-900 py-3 rounded-full font-bold text-sm hover:scale-105 transition-transform">
                Join the conversation
              </button>
            </div>
          </div>
        </div>

        {/* Brand Bar */}
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
          <Facebook className="w-8 h-8 text-white" />
          <Instagram className="w-8 h-8 text-white" />
          <div className="text-white font-black tracking-tighter text-2xl italic">TikTok</div>
          <div className="text-white font-serif text-2xl font-bold">TripAdvisor</div>
        </div>
      </div>
    </section>
  );
}
