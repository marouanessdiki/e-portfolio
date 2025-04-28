import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code } from "lucide-react";

interface ProjectsProps {
  language: "fr" | "en";
}

const Projects = ({ language }: ProjectsProps) => {
  const content = {
    en: {
      title: "Projects",
      tipeProject: {
        title: "TIPE Project",
        description:
          "Design and development of a remotely controlled lawn mower system.",
        features: [
          "Integration of wireless communication technologies for secure and efficient remote control.",
          "Development of a mobile application for controlling the mower remotely.",
        ],
        technologies: [
          "Arduino",
          "Bluetooth (HC-05)",
          "Mobile App",
          "Embedded Systems",
        ],
      },
      pfaProject: {
        title: "PFA Project",
        description:
          "Development of an online platform for a PC store with a customizable PC configurator.",
        features: [
          "Enhancement of user experience with an intuitive interface and detailed customization options.",
          "Implementation of a backend with Laravel and MySQL database management.",
        ],
        technologies: [
          "Laravel",
          "PHP",
          "MySQL",
          "XAMPP",
          "HTML",
          "CSS",
          "JavaScript",
        ],
      },
      s1Project: {
        title: "S3 Project",
        description:
          "Development of a supermarket/store management platform with role-based management per product category.",
        features: [
          "Implementation of an administration interface for managing categories, products, and users (admin, category manager, cashier).",
          "Use of Jakarta EE technologies for efficient server-side development.",
        ],
        technologies: [
          "Jakarta EE",
          "Java",
          "JSP/Servlets",
          "MySQL",
          "Apache Tomcat",
          "HTML",
          "CSS",
          "JavaScript",
        ],
      },
    },
    fr: {
      title: "Projets",
      tipeProject: {
        title: "Projet TIPE",
        description:
          "Conception et développement d'un système de tondeuse à gazon contrôlable à distance.",
        features: [
          "Intégration de technologies de communication sans fil pour un contrôle à distance sécurisé et efficace.",
          "Développement d'une application mobile pour le pilotage de la tondeuse.",
        ],
        technologies: [
          "Arduino",
          "Bluetooth (HC-05)",
          "Application Mobile",
          "Systèmes Embarqués",
        ],
      },
      pfaProject: {
        title: "Projet PFA",
        description:
          "Développement d'une plateforme en ligne pour une boutique de PC avec configurateur de PC personnalisés.",
        features: [
          "Optimisation de l'expérience utilisateur grâce à une interface intuitive et des options de personnalisation détaillées.",
          "Mise en œuvre d'un backend basé sur Laravel et gestion de base de données MySQL.",
        ],
        technologies: [
          "Laravel",
          "PHP",
          "MySQL",
          "XAMPP",
          "HTML",
          "CSS",
          "JavaScript",
        ],
      },
      s1Project: {
        title: "Projet S3",
        description:
          "Développement d'une plateforme de gestion de supermarché/magasin avec gestion des responsables par catégorie de produits.",
        features: [
          "Mise en place d'une interface d'administration pour gérer les catégories, produits et utilisateurs (administrateur, responsable de catégorie, caissier).",
          "Utilisation des technologies Jakarta EE pour un développement côté serveur efficace.",
        ],
        technologies: [
          "Jakarta EE",
          "Java",
          "JSP/Servlets",
          "MySQL",
          "Apache Tomcat",
          "HTML",
          "CSS",
          "JavaScript",
        ],
      },
    },
  };

  const text = language === "fr" ? content.fr : content.en;

  return (
    <section
      id="projects"
      className="section-padding bg-white dark:bg-tech-darkblue"
    >
      <div className="container mx-auto">
        <h2 className="section-title">{text.title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* TIPE Project */}
          <Card className="card-shadow h-full border-0 overflow-hidden">
            <div className="bg-gradient-to-r from-tech-blue to-tech-lightblue h-3"></div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">
                    {text.tipeProject.title}
                  </CardTitle>
                </div>
                <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/30">
                  <Code className="h-5 w-5 text-tech-blue" />
                </div>
              </div>
              <CardDescription>{text.tipeProject.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                {text.tipeProject.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-2 border-t pt-4">
              {text.tipeProject.technologies.map((tech, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="bg-blue-50 dark:bg-blue-900/20 text-tech-blue border-tech-blue"
                >
                  {tech}
                </Badge>
              ))}
            </CardFooter>
          </Card>

          {/* PFA Project */}
          <Card className="card-shadow h-full border-0 overflow-hidden">
            <div className="bg-gradient-to-r from-tech-accent to-green-300 h-3"></div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">
                    {text.pfaProject.title}
                  </CardTitle>
                </div>
                <div className="p-2 rounded-full bg-green-100 dark:bg-green-900/30">
                  <Code className="h-5 w-5 text-tech-accent" />
                </div>
              </div>
              <CardDescription>{text.pfaProject.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                {text.pfaProject.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-2 border-t pt-4">
              {text.pfaProject.technologies.map((tech, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="bg-green-50 dark:bg-green-900/20 text-tech-accent border-tech-accent"
                >
                  {tech}
                </Badge>
              ))}
            </CardFooter>
          </Card>

          {/* S3 Project */}
          <Card className="card-shadow h-full border-0 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-3"></div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">
                    {text.s1Project.title}
                  </CardTitle>
                </div>
                <div className="p-2 rounded-full bg-purple-100 dark:bg-purple-900/30">
                  <Code className="h-5 w-5 text-purple-500" />
                </div>
              </div>
              <CardDescription>{text.s1Project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                {text.s1Project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-2 border-t pt-4">
              {text.s1Project.technologies.map((tech, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="bg-purple-50 dark:bg-purple-900/20 text-purple-500 border-purple-500"
                >
                  {tech}
                </Badge>
              ))}
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
