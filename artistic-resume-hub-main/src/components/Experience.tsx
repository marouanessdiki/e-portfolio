import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

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
    <section id="experience" className="section-padding relative bg-slate-900 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-white mb-4">{text.title}</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 mb-12 rounded-full" />
        </motion.div>

        <div className="space-y-8">
          {text.experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 overflow-hidden shadow-xl shadow-blue-500/5 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300">
                <div className="border-l-4 border-cyan-400">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            <Briefcase className="h-5 w-5 text-cyan-400" />
                          </motion.div>
                          <CardTitle className="text-xl text-white">{exp.title}</CardTitle>
                        </div>
                        <CardDescription className="text-lg font-semibold text-cyan-400 font-mono">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <div className="flex flex-col gap-1 text-gray-400 text-sm font-mono">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-blue-400" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-blue-400" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-start text-gray-300"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <span className="text-cyan-400 mr-2 mt-1">▹</span>
                          <span className="flex-1">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.05 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                        >
                          <Badge
                            variant="outline"
                            className="bg-blue-500/10 text-blue-400 border-blue-500/30 font-mono"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
