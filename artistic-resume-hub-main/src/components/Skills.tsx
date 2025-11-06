import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

interface SkillsProps {
  language: "fr" | "en";
}

const Skills = ({ language }: SkillsProps) => {
  const content = {
    en: {
      title: "Skills",
      programmingLanguages: "Programming Languages",
      webDevelopment: "Web/Mobile Development",
      devOps: "DevOps/DevSecOps",
      databases: "Databases",
      aiMonitoring: "AI & Monitoring",
    },
    fr: {
      title: "Compétences",
      programmingLanguages: "Langages de Programmation",
      webDevelopment: "Développement Web/Mobile",
      devOps: "DevOps/DevSecOps",
      databases: "Bases de Données",
      aiMonitoring: "IA & Monitoring",
    },
  };

  const text = language === "fr" ? content.fr : content.en;

  const programmingLanguages = [
    { name: "Java", level: 90 },
    { name: "Python", level: 85 },
    { name: "JavaScript", level: 85 },
    { name: "PHP", level: 80 },
    { name: "C", level: 75 },
  ];

  const webDevelopment = [
    { name: "React.js", level: 90 },
    { name: "Node.js / Express", level: 85 },
    { name: "Laravel", level: 85 },
    { name: "Spring Boot", level: 80 },
    { name: "Firebase", level: 75 },
  ];

  const devOps = [
    { name: "Docker", level: 90 },
    { name: "Jenkins", level: 85 },
    { name: "Kubernetes", level: 80 },
    { name: "GitHub Actions", level: 85 },
    { name: "SonarQube", level: 80 },
    { name: "Trivy", level: 75 },
    { name: "Gitleaks", level: 75 },
    { name: "OWASP ZAP", level: 75 },
  ];

  const databases = [
    { name: "MySQL", level: 90 },
    { name: "PostgreSQL", level: 85 },
    { name: "MongoDB", level: 80 },
    { name: "SQLite", level: 75 },
  ];

  const aiMonitoring = [
    { name: "OpenAI API", level: 85 },
    { name: "LLMs & MCP", level: 80 },
    { name: "Prometheus", level: 75 },
    { name: "Grafana", level: 75 },
  ];

  const renderSkills = (skills: { name: string; level: number }[]) => (
    <div className="space-y-6">
      {skills.map((skill) => (
        <div key={skill.name} className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="font-medium">{skill.name}</span>
            <span className="text-sm text-gray-500">{skill.level}%</span>
          </div>
          <Progress value={skill.level} className="h-2" />
        </div>
      ))}
    </div>
  );

  return (
    <section
      id="skills"
      className="section-padding bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto">
        <h2 className="section-title">{text.title}</h2>

        <Tabs defaultValue="programming" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mb-8">
            <TabsTrigger value="programming" className="text-xs md:text-sm">
              {text.programmingLanguages}
            </TabsTrigger>
            <TabsTrigger value="web" className="text-xs md:text-sm">
              {text.webDevelopment}
            </TabsTrigger>
            <TabsTrigger value="devops" className="text-xs md:text-sm">
              {text.devOps}
            </TabsTrigger>
            <TabsTrigger value="databases" className="text-xs md:text-sm">
              {text.databases}
            </TabsTrigger>
            <TabsTrigger value="aimonitoring" className="text-xs md:text-sm">
              {text.aiMonitoring}
            </TabsTrigger>
          </TabsList>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <TabsContent value="programming" className="mt-0">
              <Card className="border-0 shadow-none">
                <CardContent className="p-0">
                  {renderSkills(programmingLanguages)}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="web" className="mt-0">
              <Card className="border-0 shadow-none">
                <CardContent className="p-0">
                  {renderSkills(webDevelopment)}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="devops" className="mt-0">
              <Card className="border-0 shadow-none">
                <CardContent className="p-0">
                  {renderSkills(devOps)}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="databases" className="mt-0">
              <Card className="border-0 shadow-none">
                <CardContent className="p-0">
                  {renderSkills(databases)}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="aimonitoring" className="mt-0">
              <Card className="border-0 shadow-none">
                <CardContent className="p-0">
                  {renderSkills(aiMonitoring)}
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Skills;
