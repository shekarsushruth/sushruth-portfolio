import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import { useState } from 'react';

export default function Reel() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="pt-12 pb-4 md:py-12 px-6 md:px-12 w-full max-w-[1800px] mx-auto border-t border-white/20">
      <div className="flex flex-col mb-6 md:mb-12">
        <h2 className="font-display font-bold text-5xl md:text-7xl text-white tracking-tighter">SHOWREEL</h2>
      </div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        className="relative w-full aspect-video bg-[#0a0a0a] group cursor-pointer overflow-hidden rounded-sm"
        onClick={() => setIsPlaying(!isPlaying)}
      >
        {!isPlaying && (
          <>
            <img 
              src="https://i.vimeocdn.com/video/2114863950-ce5f4808a06fa84f4ae9620f379413b7cf11f98377e9ac2d64d254d9a29390ea-d_1920x1080?region=us" 
              alt="Showreel Cover" 
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-all duration-700 transform group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
              <div className="flex flex-col items-center gap-6 transform group-hover:scale-110 transition-transform duration-700 ease-[0.76,0,0.24,1]">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-md bg-white/5 text-white group-hover:bg-white group-hover:text-black transition-all duration-500">
                  <Play size={40} className="ml-2" fill="currentColor" />
                </div>
              </div>
            </div>
          </>
        )}
        
        {isPlaying && (
          <iframe
            src="https://player.vimeo.com/video/1160096016?autoplay=1&color=ffffff&title=0&byline=0&portrait=0"
            className="absolute inset-0 w-full h-full"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        )}
      </motion.div>
    </section>
  );
}
