import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import LanguageToggle from "./LanguageToggle";

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
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-tech-darkblue/90 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a
          href="#hero"
          className="text-2xl font-bold text-tech-blue font-montserrat hover:opacity-80 transition-opacity"
        >
          Marouane ES-SDIKI
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          {items.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-foreground hover:text-tech-blue font-medium transition-colors"
            >
              {item.name}
            </a>
          ))}
          <LanguageToggle language={language} setLanguage={setLanguage} />
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-tech-darkblue shadow-lg animate-fade-in">
          <div className="container mx-auto py-4 flex flex-col space-y-4">
            {items.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-tech-blue font-medium transition-colors px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="px-4 py-2">
              <LanguageToggle language={language} setLanguage={setLanguage} />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
