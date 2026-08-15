import { motion } from 'motion/react';
import { Menu } from 'lucide-react';

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 w-full py-3 px-4 md:py-4 md:px-8 z-50 bg-[#050505]/90 backdrop-blur-md border-b border-white/5 text-white flex justify-between items-center">
      <div className="font-display text-2xl tracking-widest">
        SUSHRUTH
      </div>
      <div className="hidden md:flex gap-8 text-sm font-medium tracking-widest uppercase">
        <a href="#hero" className="hover:text-gray-400 transition-colors">Home</a>
        <a href="#work" className="hover:text-gray-400 transition-colors">Work</a>
        <a href="#about" className="hover:text-gray-400 transition-colors">About</a>
        <a href="#contact" className="hover:text-gray-400 transition-colors">Contact</a>
      </div>
      <button className="md:hidden">
        <Menu size={24} />
      </button>
    </nav>
  );
}
