
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

interface SkillsProps {
  language: 'fr' | 'en';
}

const Skills = ({ language }: SkillsProps) => {
  const content = {
    en: {
      title: "Skills",
      programmingLanguages: "Programming Languages",
      webDevelopment: "Web Development",
      mobileDevelopment: "Mobile Development",
      dataScience: "Data Science & ML",
      devOps: "DevOps & Tools",
      databases: "Databases",
      networking: "Networking"
    },
    fr: {
      title: "Compétences",
      programmingLanguages: "Langages de Programmation",
      webDevelopment: "Développement Web",
      mobileDevelopment: "Développement Mobile",
      dataScience: "Data Science & ML",
      devOps: "DevOps & Outils",
      databases: "Bases de Données",
      networking: "Réseaux"
    }
  };

  const text = language === 'fr' ? content.fr : content.en;

  const programmingLanguages = [
    { name: "Python", level: 90 },
    { name: "Java", level: 85 },
    { name: "C/C++", level: 75 },
    { name: "PHP", level: 80 },
    { name: "JavaScript", level: 85 },
    { name: "TypeScript", level: 75 },
    { name: "XML", level: 70 }
  ];

  const webDevelopment = [
    { name: "HTML/CSS", level: 90 },
    { name: "Laravel", level: 85 },
    { name: "React", level: 80 },
    { name: "Tailwind", level: 75 }
  ];

  const mobileDevelopment = [
    { name: "Android Studio", level: 70 },
    { name: "React Native", level: 65 },
    { name: "Flutter", level: 60 },
    { name: "Kotlin", level: 55 }
  ];

  const dataScience = [
    { name: "Machine Learning", level: 80 },
    { name: "Tableau", level: 75 },
    { name: "Data Visualization", level: 70 },
    { name: "Anaconda", level: 65 },
    { name: "ML Libraries", level: 75 }
  ];

  const devOps = [
    { name: "Git/GitHub", level: 85 },
    { name: "Docker", level: 70 },
    { name: "CI/CD", level: 65 },
    { name: "Linux", level: 75 },
    { name: "Photoshop", level: 60 }
  ];

  const databases = [
    { name: "SQL", level: 90 },
    { name: "MySQL", level: 85 },
    { name: "MongoDB", level: 75 },
    { name: "SQLite", level: 80 }
  ];

  const networking = [
    { name: "TCP/IP", level: 70 },
    { name: "Web Protocols", level: 75 },
    { name: "IoT Protocols", level: 65 }
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
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <h2 className="section-title">{text.title}</h2>
        
        <Tabs defaultValue="programming" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 mb-8">
            <TabsTrigger value="programming" className="text-xs md:text-sm">
              {text.programmingLanguages}
            </TabsTrigger>
            <TabsTrigger value="web" className="text-xs md:text-sm">
              {text.webDevelopment}
            </TabsTrigger>
            <TabsTrigger value="mobile" className="text-xs md:text-sm">
              {text.mobileDevelopment}
            </TabsTrigger>
            <TabsTrigger value="data" className="text-xs md:text-sm">
              {text.dataScience}
            </TabsTrigger>
            <TabsTrigger value="devops" className="text-xs md:text-sm">
              {text.devOps}
            </TabsTrigger>
            <TabsTrigger value="databases" className="text-xs md:text-sm">
              {text.databases}
            </TabsTrigger>
            <TabsTrigger value="networking" className="text-xs md:text-sm">
              {text.networking}
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
            
            <TabsContent value="mobile" className="mt-0">
              <Card className="border-0 shadow-none">
                <CardContent className="p-0">
                  {renderSkills(mobileDevelopment)}
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="data" className="mt-0">
              <Card className="border-0 shadow-none">
                <CardContent className="p-0">
                  {renderSkills(dataScience)}
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
            
            <TabsContent value="networking" className="mt-0">
              <Card className="border-0 shadow-none">
                <CardContent className="p-0">
                  {renderSkills(networking)}
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        </Tabs>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[...programmingLanguages, ...webDevelopment, ...mobileDevelopment, ...dataScience, ...devOps, ...databases]
            .map(skill => skill.name)
            .filter((value, index, self) => self.indexOf(value) === index)
            .sort()
            .map((skill) => (
              <div 
                key={skill}
                className="skill-tag bg-white dark:bg-gray-800 text-tech-blue border border-tech-blue dark:border-tech-lightblue flex items-center justify-center p-2 rounded-lg text-center"
              >
                {skill}
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Skills;
