import { Button } from "@/components/ui/button";
import { ArrowDown, Terminal, Shield, Code2, Lock } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface HeroProps {
  language: "fr" | "en";
}

const Hero = ({ language }: HeroProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const content = {
    en: {
      greeting: "Hello, I'm",
      name: "MAROUANE ES-SDIKI",
      role: "Full-Stack Developer & DevOps Engineer",
      description:
        "3rd year engineering student at ENSIAS specializing in Full-Stack Development and DevOps/DevSecOps. Passionate about building secure, scalable, and high-performance solutions.",
      cta: "View My Work",
    },
    fr: {
      greeting: "Bonjour, Je suis",
      name: "MAROUANE ES-SDIKI",
      role: "Développeur Full-Stack & Ingénieur DevOps",
      description:
        "Élève ingénieur en 3ème année à l'ENSIAS spécialisé en développement Full-Stack et DevOps/DevSecOps. Passionné par la création de solutions sécurisées, évolutives et performantes.",
      cta: "Voir Mon Travail",
    },
  };

  const text = language === "fr" ? content.fr : content.en;
  const fullText = text.role;

  // Terminal typing effect
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  // Floating icons data
  const floatingIcons = [
    { Icon: Terminal, delay: 0, color: "text-blue-400" },
    { Icon: Shield, delay: 0.2, color: "text-green-400" },
    { Icon: Code2, delay: 0.4, color: "text-purple-400" },
    { Icon: Lock, delay: 0.6, color: "text-cyan-400" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 dark:from-black dark:via-blue-950 dark:to-slate-950" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 relative z-10">
        <motion.div
          className="md:w-1/2 text-center md:text-left mt-12 md:mt-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Terminal-style greeting */}
          <motion.div
            className="inline-flex items-center gap-2 mb-4 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-blue-500/30"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Terminal className="w-4 h-4 text-green-400" />
            <span className="text-green-400 font-mono text-sm">
              $ echo "{text.greeting}"
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {text.name}
          </motion.h1>

          {/* Terminal typing effect for role */}
          <motion.div
            className="bg-slate-900/80 backdrop-blur-sm border border-blue-500/30 rounded-lg p-4 mb-6 font-mono"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-xs text-gray-400">role.sh</span>
            </div>
            <div className="text-cyan-400">
              <span className="text-green-400">{'>'}</span> {displayedText}
              <motion.span
                className="inline-block w-2 h-5 bg-cyan-400 ml-1"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </div>
          </motion.div>

          <motion.p
            className="text-gray-300 mb-8 max-w-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {text.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0 shadow-lg shadow-blue-500/50"
              onClick={() => {
                document
                  .querySelector("#about")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {text.cta}
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>

        <div className="md:w-1/2 flex justify-center relative">
          {/* Floating security icons around profile */}
          {floatingIcons.map(({ Icon, delay, color }, index) => (
            <motion.div
              key={index}
              className={`absolute ${color}`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0.4, 1, 0.4],
                scale: [1, 1.2, 1],
                y: [0, -20, 0],
              }}
              transition={{
                delay,
                duration: 3,
                repeat: Infinity,
                repeatDelay: 1,
              }}
              style={{
                top: `${20 + index * 20}%`,
                left: index % 2 === 0 ? "-10%" : "110%",
              }}
            >
              <Icon className="w-8 h-8 md:w-12 md:h-12" />
            </motion.div>
          ))}

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {/* Animated glow effect */}
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 rounded-full blur-2xl opacity-40"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />

            {/* Hexagonal border animation */}
            <motion.div
              className="absolute -inset-2 rounded-full border-2 border-blue-500/50"
              animate={{
                rotate: 360,
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />

            <motion.div
              className="relative h-64 w-64 md:h-80 md:w-80 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl shadow-blue-500/50"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/uploads/profile pic linkedin.png"
                alt="MAROUANE ES-SDIKI"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Tech stack badges floating */}
            <motion.div
              className="absolute -bottom-4 -right-4 bg-slate-800/90 backdrop-blur-sm border border-blue-500/30 px-4 py-2 rounded-full"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
            >
              <span className="text-cyan-400 font-mono text-sm">
                DevSecOps 🔒
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full border border-blue-500/30 bg-slate-800/50 backdrop-blur-sm hover:bg-slate-700/50 text-blue-400"
          onClick={() => {
            document
              .querySelector("#about")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <ArrowDown className="h-6 w-6" />
        </Button>
      </motion.div>
    </section>
  );
};

export default Hero;
