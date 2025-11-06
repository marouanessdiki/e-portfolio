import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Shield, Cpu, Database, Zap, Lock } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectsProps {
  language: "fr" | "en";
}

const Projects = ({ language }: ProjectsProps) => {
  const content = {
    en: {
      title: "Academic Projects",
      devSecOpsProject: {
        title: "DevSecOps AI Pipeline",
        year: "2025",
        description:
          "Implementation of a secure CI/CD pipeline integrating DevSecOps best practices for code analysis, quality, and security throughout the development lifecycle.",
        features: [
          "Integrated security scanning with Gitleaks and OWASP ZAP",
          "Code quality analysis with SonarQube",
          "Container vulnerability scanning with Trivy",
          "Automated CI/CD with Jenkins and Docker",
        ],
        technologies: [
          "Jenkins",
          "Docker",
          "Gitleaks",
          "SonarQube",
          "Trivy",
          "OWASP ZAP",
        ],
      },
      smartGardenProject: {
        title: "Smart Garden System",
        year: "2025",
        description:
          "IoT garden monitoring system with mobile connectivity and intelligent chatbot assistant.",
        features: [
          "Real-time monitoring with Arduino sensors",
          "Mobile app integration with Firebase",
          "AI-powered chatbot using OpenAI API",
          "Remote control and automation features",
        ],
        technologies: [
          "Arduino",
          "Firebase",
          "OpenAI API",
          "IoT",
        ],
      },
      pcConfigProject: {
        title: "PC Configuration Platform",
        year: "2025",
        description:
          "Web application for PC configuration with compatibility verification and automated cost estimation.",
        features: [
          "Component compatibility checking system",
          "Real-time price calculation",
          "User-friendly configuration interface",
          "Database-driven component catalog",
        ],
        technologies: [
          "Laravel",
          "MySQL",
          "Bootstrap",
          "PHP",
        ],
      },
      supermarketProject: {
        title: "Supermarket Platform",
        year: "2024",
        description:
          "Dashboard with secure authentication, product management, and SQL optimization.",
        features: [
          "Secure authentication system",
          "Product and category management",
          "Optimized SQL queries for performance",
          "Role-based access control",
        ],
        technologies: [
          "JEE (JSP/Servlets)",
          "JDBC",
          "MySQL",
          "Apache Tomcat",
        ],
      },
      logStorageProject: {
        title: "Log Storage Benchmark",
        year: "2024",
        description:
          "Comparative evaluation of storage solutions and automation of CI/CD tests in multi-environment setups.",
        features: [
          "Performance benchmarking of multiple databases",
          "ELK Stack integration for log analysis",
          "Docker-based multi-environment testing",
          "Automated testing pipeline",
        ],
        technologies: [
          "Docker",
          "PostgreSQL",
          "MongoDB",
          "Elasticsearch",
          "Logstash",
          "Kibana",
        ],
      },
    },
    fr: {
      title: "Projets Académiques",
      devSecOpsProject: {
        title: "Pipeline DevSecOps IA",
        year: "2025",
        description:
          "Mise en place d'un pipeline CI/CD sécurisé intégrant les bonnes pratiques DevSecOps pour l'analyse, la qualité et la sécurité du code tout au long du cycle de développement.",
        features: [
          "Analyse de sécurité intégrée avec Gitleaks et OWASP ZAP",
          "Analyse de qualité du code avec SonarQube",
          "Scan de vulnérabilités des conteneurs avec Trivy",
          "CI/CD automatisé avec Jenkins et Docker",
        ],
        technologies: [
          "Jenkins",
          "Docker",
          "Gitleaks",
          "SonarQube",
          "Trivy",
          "OWASP ZAP",
        ],
      },
      smartGardenProject: {
        title: "Système Smart Garden",
        year: "2025",
        description:
          "Système IoT de monitoring de jardin avec connexion mobile et assistant chatbot intelligent.",
        features: [
          "Surveillance en temps réel avec capteurs Arduino",
          "Intégration application mobile avec Firebase",
          "Chatbot alimenté par IA utilisant l'API OpenAI",
          "Fonctionnalités de contrôle à distance et automatisation",
        ],
        technologies: [
          "Arduino",
          "Firebase",
          "OpenAI API",
          "IoT",
        ],
      },
      pcConfigProject: {
        title: "Plateforme de Configuration PC",
        year: "2025",
        description:
          "Application web de configuration PC avec vérification de compatibilité et estimation de coût automatisée.",
        features: [
          "Système de vérification de compatibilité des composants",
          "Calcul de prix en temps réel",
          "Interface de configuration conviviale",
          "Catalogue de composants basé sur base de données",
        ],
        technologies: [
          "Laravel",
          "MySQL",
          "Bootstrap",
          "PHP",
        ],
      },
      supermarketProject: {
        title: "Plateforme Supermarché",
        year: "2024",
        description:
          "Tableau de bord avec authentification sécurisée, gestion des produits et optimisation SQL.",
        features: [
          "Système d'authentification sécurisé",
          "Gestion des produits et catégories",
          "Requêtes SQL optimisées pour la performance",
          "Contrôle d'accès basé sur les rôles",
        ],
        technologies: [
          "JEE (JSP/Servlets)",
          "JDBC",
          "MySQL",
          "Apache Tomcat",
        ],
      },
      logStorageProject: {
        title: "Benchmark Log Storage",
        year: "2024",
        description:
          "Évaluation comparative des solutions de stockage et automatisation des tests CI/CD multi-environnements.",
        features: [
          "Benchmarking de performance de plusieurs bases de données",
          "Intégration ELK Stack pour l'analyse de logs",
          "Tests multi-environnements basés sur Docker",
          "Pipeline de tests automatisés",
        ],
        technologies: [
          "Docker",
          "PostgreSQL",
          "MongoDB",
          "Elasticsearch",
          "Logstash",
          "Kibana",
        ],
      },
    },
  };

  const text = language === "fr" ? content.fr : content.en;

  const projectsData = [
    {
      ...text.devSecOpsProject,
      icon: Shield,
      gradient: "from-red-500 via-orange-500 to-yellow-500",
      iconBg: "bg-red-500/10",
      iconColor: "text-red-400",
      badgeStyle: "bg-red-500/10 text-red-400 border-red-500/30",
    },
    {
      ...text.smartGardenProject,
      icon: Cpu,
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      iconBg: "bg-green-500/10",
      iconColor: "text-green-400",
      badgeStyle: "bg-green-500/10 text-green-400 border-green-500/30",
    },
    {
      ...text.pcConfigProject,
      icon: Code,
      gradient: "from-blue-500 via-cyan-500 to-indigo-500",
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-400",
      badgeStyle: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    },
    {
      ...text.supermarketProject,
      icon: Lock,
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      iconBg: "bg-purple-500/10",
      iconColor: "text-purple-400",
      badgeStyle: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    },
    {
      ...text.logStorageProject,
      icon: Database,
      gradient: "from-yellow-500 via-amber-500 to-orange-500",
      iconBg: "bg-yellow-500/10",
      iconColor: "text-yellow-400",
      badgeStyle: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
    },
  ];

  return (
    <section
      id="projects"
      className="section-padding relative bg-slate-900 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <motion.div
                  whileHover={{
                    y: -10,
                    rotateX: 5,
                    rotateY: 5,
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <Card className="h-full border-0 overflow-hidden bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 shadow-xl shadow-blue-500/5 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300">
                    {/* Animated gradient top bar */}
                    <motion.div
                      className={`h-1 bg-gradient-to-r ${project.gradient}`}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                    />

                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <CardTitle className="text-xl text-white mb-1 hover:text-cyan-400 transition-colors">
                            {project.title}
                          </CardTitle>
                          <motion.p
                            className="text-sm text-gray-400 font-mono bg-slate-900/50 inline-block px-2 py-1 rounded"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.4 }}
                          >
                            {project.year}
                          </motion.p>
                        </div>
                        <motion.div
                          className={`p-3 rounded-lg ${project.iconBg} border border-blue-500/20`}
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon className={`h-6 w-6 ${project.iconColor}`} />
                        </motion.div>
                      </div>
                      <CardDescription className="text-gray-300 mt-3">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      <ul className="space-y-2">
                        {project.features.map((feature, fIndex) => (
                          <motion.li
                            key={fIndex}
                            className="flex items-start text-sm text-gray-400"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + fIndex * 0.05 }}
                          >
                            <span className="text-cyan-400 mr-2 mt-1">▹</span>
                            <span className="flex-1">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>

                    <CardFooter className="flex flex-wrap gap-2 border-t border-blue-500/10 pt-4">
                      {project.technologies.map((tech, tIndex) => (
                        <motion.div
                          key={tIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + tIndex * 0.03 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                        >
                          <Badge
                            variant="outline"
                            className={`${project.badgeStyle} font-mono text-xs`}
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </CardFooter>
                  </Card>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
