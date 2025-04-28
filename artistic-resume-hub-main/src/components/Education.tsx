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
          name: "National School of Computer Science and Systems Analysis (ENSIAS)",
          degree: "Engineering in Data Science and IoT (IDSIT)",
          period: "September 2023 - Present",
          location: "Rabat, Morocco",
          description:
            "Currently specializing in Data Science and Internet of Things (IoT) technologies at ENSIAS.",
        },
        {
          name: "Preparatory Classes for Engineering Schools (CPGE) - TSI",
          degree: "Industrial Science and Technology",
          period: "2021 - 2023",
          location: "CPGE Béni Mellal, Morocco",
          description:
            "Two-year intensive program in Industrial Science and Technology (TSI) preparing for engineering school entrance exams.",
        },
        {
          name: "High School Diploma",
          degree: "Mechanical Science and Technology",
          period: "June 2021",
          location: "Lycée Technique THIGHNARI, Fquih Ben Salah, Morocco",
          description:
            "Graduated with a focus on Mechanical Sciences and Technologies.",
        },
      ],
    },
    fr: {
      title: "Formation",
      schools: [
        {
          name: "École Nationale Supérieure de l'Informatique et de l'Analyse des Systèmes (ENSIAS)",
          degree: "Ingénierie en Data Science et IoT (IDSIT)",
          period: "Septembre 2023 - Présent",
          location: "Rabat, Maroc",
          description:
            "En cours de spécialisation en Data Science et Internet des Objets (IoT) à l'ENSIAS.",
        },
        {
          name: "Classes Préparatoires aux Grandes Écoles (CPGE) - TSI",
          degree: "Technologies et Sciences Industrielles",
          period: "2021 - 2023",
          location: "CPGE Béni Mellal, Maroc",
          description:
            "Programme intensif de deux ans en Technologies et Sciences Industrielles (TSI) préparant aux concours d'entrée aux grandes écoles d'ingénieurs.",
        },
        {
          name: "Baccalauréat",
          degree: "Sciences et Technologies Mécaniques",
          period: "Juin 2021",
          location: "Lycée Technique THIGHNARI, Fquih Ben Salah, Maroc",
          description: "Diplômé en Sciences et Technologies Mécaniques.",
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
