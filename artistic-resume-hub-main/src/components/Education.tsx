import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

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

        <div className="space-y-8">
          {text.schools.map((school, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 overflow-hidden shadow-xl shadow-blue-500/5 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">
                <div className="flex flex-col md:flex-row">
                  <motion.div
                    className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white p-6 md:w-1/4 flex justify-center items-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <GraduationCap className="h-12 w-12" />
                  </motion.div>
                  <div className="md:w-3/4">
                    <CardHeader className="pb-0">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-2">{school.name}</h3>
                          <p className="text-cyan-400 font-medium font-mono">
                            {school.degree}
                          </p>
                        </div>
                        <div className="text-gray-400 text-sm mt-2 md:mt-0 md:text-right font-mono">
                          <p className="text-blue-400">{school.period}</p>
                          <p>{school.location}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 leading-relaxed">
                        {school.description}
                      </p>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
