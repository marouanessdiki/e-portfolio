import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

interface EducationProps {
  language: "fr" | "en";
}

const Education = ({ language }: EducationProps) => {
  const content = {
    en: {
      title: "Education",
      schools: [
        {
          name: "École Nationale Supérieure d'Informatique et d'Analyse des Systèmes (ENSIAS)",
          degree: "Engineering Cycle - Data Science & IoT",
          period: "2023 - 2026",
          location: "Rabat, Morocco",
          description:
            "3rd year engineering student specializing in Data Science, IoT, Full-Stack Development, and DevOps/DevSecOps. Engaged in advanced projects integrating security, performance, and innovation.",
        },
        {
          name: "Classes Préparatoires aux Grandes Écoles (CPGE)",
          degree: "Technology and Industrial Sciences (TSI)",
          period: "2021 - 2023",
          location: "Beni Mellal, Morocco",
          description:
            "Two-year intensive preparatory program in Technology and Industrial Sciences, preparing for competitive engineering school entrance exams.",
        },
      ],
    },
    fr: {
      title: "Formation",
      schools: [
        {
          name: "École Nationale Supérieure d'Informatique et d'Analyse des Systèmes (ENSIAS)",
          degree: "Cycle Ingénieur - Data Science & IoT",
          period: "2023 - 2026",
          location: "Rabat, Maroc",
          description:
            "Élève ingénieur en 3ème année spécialisé en Data Science, IoT, développement Full-Stack et DevOps/DevSecOps. Engagé dans des projets avancés intégrant sécurité, performance et innovation.",
        },
        {
          name: "Classes Préparatoires aux Grandes Écoles (CPGE)",
          degree: "Technologies et Sciences Industrielles (TSI)",
          period: "2021 - 2023",
          location: "Beni Mellal, Maroc",
          description:
            "Programme préparatoire intensif de deux ans en Technologies et Sciences Industrielles, préparant aux concours d'entrée des grandes écoles d'ingénieurs.",
        },
      ],
    },
  };

  const text = language === "fr" ? content.fr : content.en;

  return (
    <section
      id="education"
      className="section-padding bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto">
        <h2 className="section-title">{text.title}</h2>

        <div className="space-y-8">
          {text.schools.map((school, index) => (
            <Card
              key={index}
              className="card-shadow bg-white dark:bg-gray-800 overflow-hidden border-0"
            >
              <div className="flex flex-col md:flex-row">
                <div className="bg-tech-blue text-white p-6 md:w-1/4 flex justify-center items-center">
                  <GraduationCap className="h-12 w-12" />
                </div>
                <div className="md:w-3/4">
                  <CardHeader className="pb-0">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                      <div>
                        <h3 className="text-xl font-semibold">{school.name}</h3>
                        <p className="text-tech-accent font-medium">
                          {school.degree}
                        </p>
                      </div>
                      <div className="text-gray-500 dark:text-gray-400 text-sm mt-2 md:mt-0 md:text-right">
                        <p>{school.period}</p>
                        <p>{school.location}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 dark:text-gray-300">
                      {school.description}
                    </p>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
