import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

interface HeroProps {
  language: "fr" | "en";
}

const Hero = ({ language }: HeroProps) => {
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

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-white to-blue-50 dark:from-tech-darkblue dark:to-black">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12">
        <div className="md:w-1/2 text-center md:text-left mt-12 md:mt-0 animate-fade-in">
          <p className="text-tech-accent font-medium mb-2">{text.greeting}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-tech-blue dark:text-white">
            {text.name}
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6">
            {text.role}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
            {text.description}
          </p>
          <Button
            size="lg"
            className="bg-tech-blue hover:bg-tech-lightblue text-white"
            onClick={() => {
              document
                .querySelector("#about")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {text.cta}
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-tech-blue to-tech-accent rounded-full blur opacity-30"></div>
            <div className="relative h-64 w-64 md:h-80 md:w-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img
                src="/lovable-uploads/617adefb-e917-4f91-9efc-ed02e044dae2.png"
                alt="ES-SDIKI MAROUANE"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full"
          onClick={() => {
            document
              .querySelector("#about")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <ArrowDown className="h-6 w-6" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
