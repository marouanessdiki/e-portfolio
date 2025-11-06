import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";

interface ExperienceProps {
  language: "fr" | "en";
}

const Experience = ({ language }: ExperienceProps) => {
  const content = {
    en: {
      title: "Professional Experience",
      experiences: [
        {
          title: "Full-Stack Developer Intern",
          company: "Netcon Consulting",
          period: "July 2025 - August 2025",
          location: "Casablanca, Morocco",
          description: "Development of an automated HR platform for salary management and certificate generation via JasperReport",
          achievements: [
            "Developed automated HR platform for salary management",
            "Generated certificates using JasperReport",
            "Optimized productivity and secured data with robust full-stack architecture",
          ],
          technologies: ["React", "Spring Boot", "MySQL", "JasperReport"],
        },
        {
          title: "Web Development Intern - Mouatana Project",
          company: "Ministry of Education",
          period: "July 2024 - August 2024",
          location: "Rabat, Morocco",
          description: "Development of a full-stack web application for digital extracurricular content management",
          achievements: [
            "Designed system architecture for content management",
            "Developed full-stack features (front-end and back-end)",
            "Implemented digital content management for extracurricular activities",
          ],
          technologies: ["React", "Express", "SQLite", "Bootstrap"],
        },
      ],
    },
    fr: {
      title: "Expériences Professionnelles",
      experiences: [
        {
          title: "Stagiaire Développeur Full-Stack",
          company: "Netcon Consulting",
          period: "Juillet 2025 - Août 2025",
          location: "Casablanca, Maroc",
          description: "Développement d'une plateforme RH automatisée pour la gestion des salaires et génération d'attestations via JasperReport",
          achievements: [
            "Développement d'une plateforme RH automatisée pour la gestion des salaires",
            "Génération d'attestations via JasperReport",
            "Optimisation de la productivité et sécurisation des données avec architecture full-stack robuste",
          ],
          technologies: ["React", "Spring Boot", "MySQL", "JasperReport"],
        },
        {
          title: "Stagiaire Développement Web - Projet Mouatana",
          company: "Ministère de l'Éducation",
          period: "Juillet 2024 - Août 2024",
          location: "Rabat, Maroc",
          description: "Développement d'une application web full-stack pour la gestion du contenu parascolaire numérique",
          achievements: [
            "Conception de l'architecture système pour la gestion du contenu",
            "Développement des fonctionnalités full-stack (front-end et back-end)",
            "Mise en place de la gestion du contenu numérique parascolaire",
          ],
          technologies: ["React", "Express", "SQLite", "Bootstrap"],
        },
      ],
    },
  };

  const text = language === "fr" ? content.fr : content.en;

  return (
    <section id="experience" className="section-padding bg-white dark:bg-tech-darkblue">
      <div className="container mx-auto">
        <h2 className="section-title">{text.title}</h2>

        <div className="space-y-8">
          {text.experiences.map((exp, index) => (
            <Card
              key={index}
              className="card-shadow bg-white dark:bg-gray-800 overflow-hidden border-0 hover:shadow-xl transition-shadow"
            >
              <div className="border-l-4 border-tech-blue">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Briefcase className="h-5 w-5 text-tech-blue" />
                        <CardTitle className="text-xl">{exp.title}</CardTitle>
                      </div>
                      <CardDescription className="text-lg font-semibold text-tech-accent">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col gap-1 text-gray-500 dark:text-gray-400 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {exp.description}
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700 dark:text-gray-300">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="bg-blue-50 dark:bg-blue-900/20 text-tech-blue border-tech-blue"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
