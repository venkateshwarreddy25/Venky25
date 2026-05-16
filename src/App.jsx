import { useState } from 'react';
import './styles/global.css';
import Preloader from './components/Preloader/Preloader';
import Cursor from './components/Cursor/Cursor';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Timeline from './components/Timeline/Timeline';
import Achievements from './components/Achievements/Achievements';
import Contact from './components/Contact/Contact';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Cursor />
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      
      {!loading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Timeline />
            <Achievements />
            <Contact />
          </main>
        </>
      )}
    </>
  );
}
