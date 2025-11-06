import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Terminal } from "lucide-react";
import LanguageToggle from "./LanguageToggle";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  language: "fr" | "en";
  setLanguage: (lang: "fr" | "en") => void;
}

const Navbar = ({ language, setLanguage }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = {
    en: [
      { name: "About", href: "#about" },
      { name: "Education", href: "#education" },
      { name: "Projects", href: "#projects" },
      { name: "Skills", href: "#skills" },
      { name: "Contact", href: "#contact" },
    ],
    fr: [
      { name: "À propos", href: "#about" },
      { name: "Formation", href: "#education" },
      { name: "Projets", href: "#projects" },
      { name: "Compétences", href: "#skills" },
      { name: "Contact", href: "#contact" },
    ],
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const items = language === "fr" ? navItems.fr : navItems.en;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg shadow-blue-500/10 border-b border-blue-500/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        <motion.a
          href="#hero"
          className="flex items-center gap-2 text-xl font-bold font-mono group"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <Terminal className="w-5 h-5 text-cyan-400" />
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            ~/marouane-es-sdiki
          </span>
          <motion.span
            className="text-cyan-400"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          >
            _
          </motion.span>
        </motion.a>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-1">
          {items.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="relative px-4 py-2 text-gray-300 hover:text-cyan-400 font-medium transition-colors font-mono text-sm group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="relative z-10">{item.name}</span>
              <motion.div
                className="absolute inset-0 bg-blue-500/10 rounded-lg border border-blue-500/30"
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
              />
            </motion.a>
          ))}
          <div className="ml-4">
            <LanguageToggle language={language} setLanguage={setLanguage} />
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="text-cyan-400 hover:bg-blue-500/10"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-md border-b border-blue-500/20 shadow-lg overflow-hidden"
          >
            <div className="container mx-auto py-4 flex flex-col space-y-2 px-6">
              {items.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-cyan-400 font-medium transition-colors px-4 py-2 rounded-lg hover:bg-blue-500/10 font-mono"
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <span className="text-cyan-400 mr-2">▹</span>
                  {item.name}
                </motion.a>
              ))}
              <div className="px-4 py-2">
                <LanguageToggle language={language} setLanguage={setLanguage} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
