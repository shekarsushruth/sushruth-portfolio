import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0f0f0f] pt-12 pb-8 px-4 md:px-8 border-t border-white/5">
      <div className="max-w-[1600px] mx-auto flex flex-col min-h-[50vh] justify-between">
        
        <div className="flex flex-col items-start gap-4">
          <p className="text-gray-400 uppercase tracking-widest text-sm">Have a project in mind?</p>
          <a href="mailto:hello@example.com" className="group flex items-center gap-4 hover:opacity-80 transition-opacity">
            <h2 className="font-display text-6xl md:text-[8rem] text-white leading-none tracking-tighter">
              LET'S WORK
            </h2>
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-white text-black flex items-center justify-center transform group-hover:rotate-45 transition-transform duration-500">
              <ArrowUpRight size={40} strokeWidth={1.5} />
            </div>
          </a>
        </div>

        <div className="mt-32 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 text-sm uppercase tracking-widest text-gray-500">
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Vimeo</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
          
          <div className="flex gap-4 items-center">
            <span>© {new Date().getFullYear()} SUSHRUTH.</span>
            <span>ALL RIGHTS RESERVED.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
