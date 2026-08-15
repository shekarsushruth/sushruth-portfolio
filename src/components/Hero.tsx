import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video (Placeholder) */}
      <div className="absolute inset-0 z-0 bg-neutral-900">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
          src="https://www.w3schools.com/html/mov_bbb.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050505] opacity-90" />
      </div>

      {/* Content */}
      <div className="z-10 text-center px-4 mt-16 md:mt-20 w-full max-w-5xl">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl sm:text-8xl md:text-[10rem] leading-[0.9] md:leading-none font-display text-white tracking-wide"
        >
          HI I'M
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl sm:text-8xl md:text-[10rem] leading-[0.9] md:leading-none font-display text-transparent tracking-wide"
          style={{ WebkitTextStroke: '2px white' }}
        >
          SUSHRUTH
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-6 md:mt-8 flex flex-wrap items-center justify-center gap-3 md:gap-4 text-xs sm:text-sm tracking-widest uppercase text-gray-400"
        >
          <span>Director</span>
          <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
          <span>Cinematographer</span>
          <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
          <span>Editor</span>
        </motion.div>
      </div>
    </section>
  );
}
