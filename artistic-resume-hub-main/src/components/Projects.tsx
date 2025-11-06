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

  return (
    <section
      id="projects"
      className="section-padding bg-white dark:bg-tech-darkblue"
    >
      <div className="container mx-auto">
        <h2 className="section-title">{text.title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* DevSecOps Project */}
          <Card className="card-shadow h-full border-0 overflow-hidden">
            <div className="bg-gradient-to-r from-red-500 to-orange-500 h-3"></div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">
                    {text.devSecOpsProject.title}
                  </CardTitle>
                  <p className="text-sm text-gray-500 mt-1">{text.devSecOpsProject.year}</p>
                </div>
                <div className="p-2 rounded-full bg-red-100 dark:bg-red-900/30">
                  <Code className="h-5 w-5 text-red-500" />
                </div>
              </div>
              <CardDescription>{text.devSecOpsProject.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                {text.devSecOpsProject.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-2 border-t pt-4">
              {text.devSecOpsProject.technologies.map((tech, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="bg-red-50 dark:bg-red-900/20 text-red-500 border-red-500"
                >
                  {tech}
                </Badge>
              ))}
            </CardFooter>
          </Card>

          {/* Smart Garden Project */}
          <Card className="card-shadow h-full border-0 overflow-hidden">
            <div className="bg-gradient-to-r from-tech-accent to-green-300 h-3"></div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">
                    {text.smartGardenProject.title}
                  </CardTitle>
                  <p className="text-sm text-gray-500 mt-1">{text.smartGardenProject.year}</p>
                </div>
                <div className="p-2 rounded-full bg-green-100 dark:bg-green-900/30">
                  <Code className="h-5 w-5 text-tech-accent" />
                </div>
              </div>
              <CardDescription>{text.smartGardenProject.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                {text.smartGardenProject.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-2 border-t pt-4">
              {text.smartGardenProject.technologies.map((tech, index) => (
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

          {/* PC Config Project */}
          <Card className="card-shadow h-full border-0 overflow-hidden">
            <div className="bg-gradient-to-r from-tech-blue to-tech-lightblue h-3"></div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">
                    {text.pcConfigProject.title}
                  </CardTitle>
                  <p className="text-sm text-gray-500 mt-1">{text.pcConfigProject.year}</p>
                </div>
                <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/30">
                  <Code className="h-5 w-5 text-tech-blue" />
                </div>
              </div>
              <CardDescription>{text.pcConfigProject.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                {text.pcConfigProject.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-2 border-t pt-4">
              {text.pcConfigProject.technologies.map((tech, index) => (
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

          {/* Supermarket Project */}
          <Card className="card-shadow h-full border-0 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-3"></div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">
                    {text.supermarketProject.title}
                  </CardTitle>
                  <p className="text-sm text-gray-500 mt-1">{text.supermarketProject.year}</p>
                </div>
                <div className="p-2 rounded-full bg-purple-100 dark:bg-purple-900/30">
                  <Code className="h-5 w-5 text-purple-500" />
                </div>
              </div>
              <CardDescription>{text.supermarketProject.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                {text.supermarketProject.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-2 border-t pt-4">
              {text.supermarketProject.technologies.map((tech, index) => (
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

          {/* Log Storage Project */}
          <Card className="card-shadow h-full border-0 overflow-hidden">
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 h-3"></div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">
                    {text.logStorageProject.title}
                  </CardTitle>
                  <p className="text-sm text-gray-500 mt-1">{text.logStorageProject.year}</p>
                </div>
                <div className="p-2 rounded-full bg-yellow-100 dark:bg-yellow-900/30">
                  <Code className="h-5 w-5 text-yellow-600" />
                </div>
              </div>
              <CardDescription>{text.logStorageProject.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                {text.logStorageProject.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-2 border-t pt-4">
              {text.logStorageProject.technologies.map((tech, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 border-yellow-500"
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
