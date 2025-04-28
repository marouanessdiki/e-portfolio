
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code } from "lucide-react";

interface ProjectsProps {
  language: 'fr' | 'en';
}

const Projects = ({ language }: ProjectsProps) => {
  const content = {
    en: {
      title: "Projects",
      tipeProject: {
        title: "TIPE Project",
        description: "Design and development of a remote accounting management platform.",
        features: [
          "Integration of blockchain technology for secure transaction management and audit trail.",
          "Development of an efficient and secure remote control and monitoring system."
        ],
        technologies: ["Blockchain", "Web Development", "Security"]
      },
      pfaProject: {
        title: "PFA Project",
        description: "Development of an online platform for PC repair with PC personalization options.",
        features: [
          "Optimization of the user experience through intuitive interfaces.",
          "Integration of repair tracking features and personalization options."
        ],
        technologies: ["Laravel", "PHP", "MySQL", "XAMPP", "HTML", "CSS", "JavaScript"]
      },
      s1Project: {
        title: "S1 Project",
        description: "Development of an experiment/sample management platform with category manager responsibilities.",
        features: [
          "Implementation of an interface for managing authorization levels by user categories.",
          "Development of efficient database management systems."
        ],
        technologies: ["HTML", "CSS", "JavaScript", "MySQL", "Apache Tomcat"]
      }
    },
    fr: {
      title: "Projets",
      tipeProject: {
        title: "Projet TIPE",
        description: "Conception et développement d'une plateforme de gestion comptable à distance.",
        features: [
          "Intégration de la technologie blockchain pour une gestion sécurisée des transactions et suivi d'audit.",
          "Développement d'un système de contrôle et de suivi à distance efficace et sécurisé."
        ],
        technologies: ["Blockchain", "Développement Web", "Sécurité"]
      },
      pfaProject: {
        title: "Projet PFA",
        description: "Développement d'une plateforme en ligne pour la réparation de PC avec options de personnalisation de PC.",
        features: [
          "Optimisation de l'expérience utilisateur grâce à des interfaces intuitives.",
          "Intégration de fonctionnalités de suivi des réparations et d'options de personnalisation."
        ],
        technologies: ["Laravel", "PHP", "MySQL", "XAMPP", "HTML", "CSS", "JavaScript"]
      },
      s1Project: {
        title: "Projet S1",
        description: "Développement d'une plateforme de gestion d'expériences/échantillons avec responsabilités de gestionnaire de catégorie.",
        features: [
          "Mise en place d'une interface de gestion des niveaux d'autorisation par catégories d'utilisateurs.",
          "Développement de systèmes de gestion de base de données efficaces."
        ],
        technologies: ["HTML", "CSS", "JavaScript", "MySQL", "Apache Tomcat"]
      }
    }
  };

  const text = language === 'fr' ? content.fr : content.en;

  return (
    <section id="projects" className="section-padding bg-white dark:bg-tech-darkblue">
      <div className="container mx-auto">
        <h2 className="section-title">{text.title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* TIPE Project */}
          <Card className="card-shadow h-full border-0 overflow-hidden">
            <div className="bg-gradient-to-r from-tech-blue to-tech-lightblue h-3"></div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">{text.tipeProject.title}</CardTitle>
                </div>
                <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/30">
                  <Code className="h-5 w-5 text-tech-blue" />
                </div>
              </div>
              <CardDescription>
                {text.tipeProject.description}
              </CardDescription>
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
                <Badge key={index} variant="outline" className="bg-blue-50 dark:bg-blue-900/20 text-tech-blue border-tech-blue">
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
                  <CardTitle className="text-xl">{text.pfaProject.title}</CardTitle>
                </div>
                <div className="p-2 rounded-full bg-green-100 dark:bg-green-900/30">
                  <Code className="h-5 w-5 text-tech-accent" />
                </div>
              </div>
              <CardDescription>
                {text.pfaProject.description}
              </CardDescription>
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
                <Badge key={index} variant="outline" className="bg-green-50 dark:bg-green-900/20 text-tech-accent border-tech-accent">
                  {tech}
                </Badge>
              ))}
            </CardFooter>
          </Card>

          {/* S1 Project */}
          <Card className="card-shadow h-full border-0 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-3"></div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">{text.s1Project.title}</CardTitle>
                </div>
                <div className="p-2 rounded-full bg-purple-100 dark:bg-purple-900/30">
                  <Code className="h-5 w-5 text-purple-500" />
                </div>
              </div>
              <CardDescription>
                {text.s1Project.description}
              </CardDescription>
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
                <Badge key={index} variant="outline" className="bg-purple-50 dark:bg-purple-900/20 text-purple-500 border-purple-500">
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
