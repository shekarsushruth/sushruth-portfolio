import { motion } from 'motion/react';

import { useState } from 'react';

const PROJECTS = [
  {
    id: 1,
    title: 'NEON DREAMS',
    category: 'COMMERCIAL',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 2,
    title: 'THE WILD',
    category: 'DOCUMENTARY',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 3,
    title: 'URBAN ECHO',
    category: 'MUSIC VIDEO',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 4,
    title: 'SOLITUDE',
    category: 'SHORT FILM',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1200'
  }
];

function ProjectCard({ project }: { project: typeof PROJECTS[0] }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      className="group relative w-full aspect-video overflow-hidden bg-[#0a0a0a] cursor-pointer mb-4 md:mb-16 rounded-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.img
        src={project.posterUrl}
        alt={project.title}
        animate={{ scale: isHovered ? 1.05 : 1 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 grayscale ${isHovered ? 'opacity-0' : 'opacity-60'}`}
      />
      
      {/* Video reveals on hover on desktop */}
      <div className={`absolute inset-0 transition-opacity duration-700 ${isHovered ? 'opacity-100' : 'opacity-0'} hidden md:block`}>
        <video
          autoPlay={isHovered}
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-80"
          src={project.videoUrl}
        />
      </div>

      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />

      <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-between z-10 pointer-events-none">
        <div className="flex justify-between items-start w-full">
          <div className="bg-white text-black px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase overflow-hidden transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
            {project.category}
          </div>
        </div>
        
        <div className="flex justify-between items-end w-full overflow-hidden">
          <h3 className="font-display font-bold text-5xl md:text-[6rem] text-white leading-none tracking-tighter transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-[0.76,0,0.24,1]">
            {project.title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="work" className="py-12 md:py-16 px-6 md:px-12 w-full max-w-[1800px] mx-auto">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 border-b border-white/20 pb-8">
        <h2 className="font-display font-bold text-6xl md:text-8xl text-white leading-none tracking-tighter">WORK<br/>SHOWCASE</h2>
      </div>
      
      <div className="flex flex-col w-full">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
