import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Code2, Database, Shield, Brain, Layers } from "lucide-react";

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

  const categoryIcons = {
    programming: Code2,
    web: Layers,
    devops: Shield,
    databases: Database,
    aimonitoring: Brain,
  };

  const renderSkills = (skills: { name: string; level: number }[]) => (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {skills.map((skill, index) => {
        // Determine proficiency level based on percentage (adjusted for student level)
        let proficiencyLevel = "Learning";
        let proficiencyColor = "from-blue-500 to-purple-500";
        let glowColor = "shadow-blue-500/50";

        if (skill.level >= 85) {
          proficiencyLevel = "Proficient";
          proficiencyColor = "from-cyan-500 to-blue-500";
          glowColor = "shadow-cyan-500/50";
        } else if (skill.level >= 75) {
          proficiencyLevel = "Comfortable";
          proficiencyColor = "from-blue-500 to-indigo-500";
          glowColor = "shadow-blue-500/50";
        } else {
          proficiencyLevel = "Learning";
          proficiencyColor = "from-purple-500 to-pink-500";
          glowColor = "shadow-purple-500/50";
        }

        return (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="group relative"
          >
            <div className={`relative bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-lg p-4 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg ${glowColor}`}>
              {/* Animated gradient background on hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${proficiencyColor} opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300`}
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-white group-hover:text-cyan-400 transition-colors font-mono text-sm">
                    {skill.name}
                  </h4>
                  <motion.div
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Code2 className="w-4 h-4 text-cyan-400 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                </div>

                {/* Proficiency badge */}
                <span className={`inline-block px-2 py-1 text-xs rounded-full font-mono bg-gradient-to-r ${proficiencyColor} text-white`}>
                  {proficiencyLevel}
                </span>

                {/* Decorative dots indicating skill level */}
                <div className="flex gap-1 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 + i * 0.05 }}
                      className={`h-1.5 flex-1 rounded-full ${
                        i < Math.ceil(skill.level / 20)
                          ? `bg-gradient-to-r ${proficiencyColor}`
                          : 'bg-slate-700'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );

  return (
    <section
      id="skills"
      className="section-padding relative bg-slate-950 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />

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

        <Tabs defaultValue="programming" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mb-8 bg-slate-900/50 backdrop-blur-sm border border-blue-500/30 p-2">
            {Object.entries({
              programming: text.programmingLanguages,
              web: text.webDevelopment,
              devops: text.devOps,
              databases: text.databases,
              aimonitoring: text.aiMonitoring,
            }).map(([key, label]) => {
              const Icon = categoryIcons[key as keyof typeof categoryIcons];
              return (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="text-xs md:text-sm data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-cyan-600 data-[state=active]:text-white border-0 gap-2"
                >
                  <Icon className="w-4 h-4 hidden md:inline" />
                  {label}
                </TabsTrigger>
              );
            })}
          </TabsList>

          <motion.div
            className="bg-slate-900/80 backdrop-blur-sm border border-blue-500/30 rounded-lg shadow-2xl shadow-blue-500/10 p-6 md:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <TabsContent value="programming" className="mt-0">
              <Card className="border-0 shadow-none bg-transparent">
                <CardContent className="p-0">
                  {renderSkills(programmingLanguages)}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="web" className="mt-0">
              <Card className="border-0 shadow-none bg-transparent">
                <CardContent className="p-0">
                  {renderSkills(webDevelopment)}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="devops" className="mt-0">
              <Card className="border-0 shadow-none bg-transparent">
                <CardContent className="p-0">
                  {renderSkills(devOps)}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="databases" className="mt-0">
              <Card className="border-0 shadow-none bg-transparent">
                <CardContent className="p-0">
                  {renderSkills(databases)}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="aimonitoring" className="mt-0">
              <Card className="border-0 shadow-none bg-transparent">
                <CardContent className="p-0">
                  {renderSkills(aiMonitoring)}
                </CardContent>
              </Card>
            </TabsContent>
          </motion.div>
        </Tabs>
      </div>
    </section>
  );
};

export default Skills;
