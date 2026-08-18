import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-12 md:py-24 px-6 md:px-12 w-full max-w-[1800px] mx-auto border-t border-white/20">
      <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
        
        {/* Left Side: Image */}
        <div className="w-full md:w-5/12 flex-shrink-0">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="w-full aspect-square bg-[#0a0a0a] relative rounded-sm overflow-hidden"
          >
            <img 
              src="/profile.jpeg" 
              alt="Sushruth" 
              className="absolute inset-0 w-full h-full object-cover object-center" 
            />
          </motion.div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-7/12 flex flex-col justify-start">
          <div className="overflow-hidden mb-6">
            <motion.h2 
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
              className="text-white text-3xl md:text-5xl lg:text-[3.5rem] font-display font-bold uppercase tracking-tighter leading-[1.05]"
            >
              I MAKE FILMS THAT FEEL DIFFERENT
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
            className="text-gray-400 text-lg md:text-xl font-sans max-w-xl leading-relaxed mb-12"
          >
            From Music videos, commercials to documentaries, I bring a filmmaker’s eye, a curious mind, and a love for making ordinary ideas feel a little more cinematic.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 border-t border-white/20 pt-8 text-gray-400 font-sans"
          >
            <div>
              <h4 className="text-white font-sans text-xs font-bold uppercase tracking-widest mb-4">01. Directing</h4>
              <ul className="space-y-2 text-sm">
                <li>Commercials</li>
                <li>Music Videos</li>
                <li>Short Films</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-sans text-xs font-bold uppercase tracking-widest mb-4">02. Cinematography</h4>
              <ul className="space-y-2 text-sm">
                <li>Lighting Design</li>
                <li>Camera Operating</li>
                <li>Drone Piloting</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-sans text-xs font-bold uppercase tracking-widest mb-4">03. Post-Production</h4>
              <ul className="space-y-2 text-sm">
                <li>Offline Editing</li>
                <li>Color Grading</li>
                <li>Sound Design</li>
                <li>VFX/CGI</li>
              </ul>
            </div>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
