
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  const [language, setLanguage] = useState<'fr' | 'en'>('en');

  return (
    <div className="min-h-screen">
      <Navbar language={language} setLanguage={setLanguage} />
      <Hero language={language} />
      <About language={language} />
      <Experience language={language} />
      <Education language={language} />
      <Projects language={language} />
      <Skills language={language} />
      <Contact language={language} />
      
      <footer className="bg-tech-darkblue text-white py-6">
        <div className="container mx-auto text-center">
          <p>© {new Date().getFullYear()} MAROUANE ES-SDIKI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
