import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full flex flex-col justify-between px-6 py-6 md:px-12 md:py-12 overflow-hidden bg-[#000000]">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-[#000000]">
        <iframe
          className="absolute w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50 grayscale"
          src="https://player.vimeo.com/video/1219103536?background=1&autoplay=1&loop=1&byline=0&title=0"
          allow="autoplay; fullscreen; picture-in-picture"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Top spacer for Nav */}
      <div className="z-10 w-full h-16"></div>
      
      {/* Content */}
      <div className="z-10 w-full flex flex-col items-start justify-end flex-grow pb-8">
        <div className="w-full flex flex-col uppercase">
          <div className="overflow-hidden pb-4 md:pb-8 -mb-4 md:-mb-8">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
              className="text-[15vw] leading-none font-display font-bold text-white tracking-tighter"
            >
              HI I'M
            </motion.h1>
          </div>
          <div className="overflow-hidden flex items-center gap-4 md:gap-8 w-full justify-between pb-4 md:pb-8 -mb-4 md:-mb-8 pt-2">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
              className="text-[15vw] leading-none font-display font-bold text-transparent tracking-tighter stroke-text"
            >
              SUSHRUTH
            </motion.h1>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: [0.76, 0, 0.24, 1] }}
          className="mt-12 flex flex-col md:flex-row md:items-center justify-between w-full border-t border-white/20 pt-6 text-xs sm:text-sm font-sans font-medium tracking-widest uppercase text-gray-300"
        >
          <div className="flex flex-wrap items-center gap-4">
            <span>Director</span>
            <span className="w-1 h-1 rounded-full bg-white/50" />
            <span>Cinematographer</span>
            <span className="w-1 h-1 rounded-full bg-white/50" />
            <span>Editor</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
