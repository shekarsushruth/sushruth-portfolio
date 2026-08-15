import { motion } from 'motion/react';
import { Play } from 'lucide-react';
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="group relative w-full aspect-video overflow-hidden bg-neutral-900 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={project.posterUrl}
        alt={project.title}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isHovered ? 'opacity-0' : 'opacity-70'}`}
      />
      
      {/* Video reveals on hover on desktop */}
      <div className={`absolute inset-0 transition-opacity duration-700 ${isHovered ? 'opacity-100' : 'opacity-0'} hidden md:block`}>
        <video
          autoPlay={isHovered}
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          src={project.videoUrl}
        />
      </div>

      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-700" />

      <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
        <div className="flex justify-between items-start">
          <span className="text-sm font-medium tracking-widest text-white uppercase">{project.category}</span>
          <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm group-hover:bg-white group-hover:text-black transition-all duration-300 transform group-hover:scale-110">
            <Play size={20} className="ml-1" fill="currentColor" />
          </div>
        </div>
        
        <div>
          <h3 className="font-display text-5xl md:text-7xl text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">{project.title}</h3>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="work" className="py-4 px-4 md:px-8 w-full max-w-[1600px] mx-auto">
      <div className="flex items-end justify-between mb-16">
        <h2 className="font-display text-5xl md:text-8xl text-white leading-none">WORK<br/>SHOWCASE</h2>
        <p className="hidden md:block max-w-sm text-gray-400 text-sm">
          A curated selection of commercial, narrative, and documentary projects showcasing a distinct cinematic voice.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {PROJECTS.map((project, idx) => (
          <div key={project.id} className={idx % 2 === 1 ? 'md:mt-24' : ''}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
