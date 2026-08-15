/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Nav from './components/Nav';
import Hero from './components/Hero';
import Reel from './components/Reel';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="bg-[#050505] min-h-screen text-white selection:bg-white selection:text-black">
      <Nav />
      <Hero />
      <Reel />
      <Projects />
      <About />
      <Footer />
    </main>
  );
}
