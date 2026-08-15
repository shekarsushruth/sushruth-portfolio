import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="pt-16 pb-0 px-4 md:px-8 w-full max-w-[1600px] mx-auto border-t border-white/10">
      {/* Header Row */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-8 md:mb-12">
        <div className="md:col-span-4">
          <h2 className="font-display text-4xl md:text-6xl text-white">THE VISION</h2>
        </div>
      </div>

      {/* Content Row */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
        <div className="md:col-span-4 flex flex-col">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full aspect-square bg-neutral-900 relative rounded-sm overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?auto=format&fit=crop&q=80&w=800" 
              alt="Placeholder" 
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-80" 
            />
          </motion.div>
        </div>
        
        <div className="md:col-span-8 flex flex-col">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-3xl lg:text-4xl leading-relaxed font-medium text-white"
          >
            I craft visually striking narratives that disrupt the ordinary. Blending high-end cinematography with bold editorial rhythm, I create work that demands attention.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-400 uppercase tracking-widest text-sm"
          >
            <div>
              <h4 className="text-white font-display text-2xl mb-4 tracking-normal">DIRECTING</h4>
              <ul className="space-y-2">
                <li>Commercials</li>
                <li>Music Videos</li>
                <li>Short Films</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-display text-2xl mb-4 tracking-normal">CAMERA</h4>
              <ul className="space-y-2">
                <li>Cinematography</li>
                <li>Lighting Design</li>
                <li>Drone Op</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-display text-2xl mb-4 tracking-normal">POST</h4>
              <ul className="space-y-2">
                <li>Offline Edit</li>
                <li>Color Grading</li>
                <li>Sound Design</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
