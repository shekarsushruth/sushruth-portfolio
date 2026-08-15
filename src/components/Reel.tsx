import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import { useState } from 'react';

export default function Reel() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-4 px-4 md:px-8 w-full max-w-[1600px] mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="relative w-full aspect-video md:aspect-[21/9] bg-neutral-900 group cursor-pointer overflow-hidden rounded-sm"
        onClick={() => setIsPlaying(!isPlaying)}
      >
        {!isPlaying && (
          <>
            <img 
              src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=2000" 
              alt="Showreel Cover" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="flex flex-col items-center gap-6">
                <div className="w-24 h-24 rounded-full border border-white flex items-center justify-center backdrop-blur-md bg-white/5 text-white group-hover:bg-white group-hover:text-black transition-all duration-500 group-hover:scale-110">
                  <Play size={40} className="ml-2" fill="currentColor" />
                </div>
                <h2 className="font-display text-4xl tracking-widest text-white">PLAY SHOWREEL</h2>
              </div>
            </div>
          </>
        )}
        
        {isPlaying && (
          <video
            autoPlay
            controls
            className="w-full h-full object-cover"
            src="https://www.w3schools.com/html/mov_bbb.mp4"
          />
        )}
      </motion.div>
    </section>
  );
}
