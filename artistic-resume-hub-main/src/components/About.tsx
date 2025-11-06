import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface AboutProps {
  language: "fr" | "en";
}

const About = ({ language }: AboutProps) => {
  const content = {
    en: {
      title: "About Me",
      summary:
        "Engineering student at ENSIAS specializing in DevOps/DevSecOps and Full-Stack development. With two internships under my belt, I design innovative solutions that combine security and performance. My ability to quickly adapt allows me to transform technical challenges into opportunities.",
      looking:
        "Looking for a PFE internship in Full-Stack Development or DevOps/DevSecOps to apply my skills and continue growing.",
      contactInfo: "Contact Information",
      email: "Email",
      phone: "Phone",
      location: "Location",
      languages: "Languages",
      english: "English",
      french: "French",
      arabic: "Arabic",
      fluent: "Fluent",
      native: "Native",
      interests: "Interests",
      studyInterests: "Study Interests",
      studyItems: [
        "Cybersecurity & DevSecOps",
        "Cloud Computing & Infrastructure",
        "Artificial Intelligence & LLMs",
      ],
      hobbies: "Hobbies",
      hobbyItems: [
        "Football & Gym",
        "Video Games",
        "Movies & Series",
      ],
      clubs: "Clubs & Activities",
      clubItems: [
        "INSEC - Information Security Club at ENSIAS",
        "CINDH - Club d'Initiative Nationale pour le Développement Humain",
      ],
    },
    fr: {
      title: "À Propos de Moi",
      summary:
        "Élève ingénieur à l'ENSIAS spécialisé en DevOps/DevSecOps et développement Full-Stack. Fort de deux stages, je conçois des solutions innovantes alliant sécurité et performance. Ma capacité d'adaptation rapide me permet de transformer les défis techniques en opportunités.",
      looking:
        "À la recherche d'un stage PFE en développement Full-Stack ou DevOps/DevSecOps pour appliquer mes compétences et continuer à progresser.",
      contactInfo: "Informations de Contact",
      email: "Email",
      phone: "Téléphone",
      location: "Emplacement",
      languages: "Langues",
      english: "Anglais",
      french: "Français",
      arabic: "Arabe",
      fluent: "Courant",
      native: "Natif",
      interests: "Centres d'Intérêt",
      studyInterests: "Intérêts d'Étude",
      studyItems: [
        "Cybersécurité & DevSecOps",
        "Cloud Computing & Infrastructure",
        "Intelligence Artificielle & LLMs",
      ],
      hobbies: "Loisirs",
      hobbyItems: [
        "Football & Gym",
        "Jeux Vidéo",
        "Films & Séries",
      ],
      clubs: "Clubs & Activités",
      clubItems: [
        "INSEC - Club de Sécurité de l'Information à l'ENSIAS",
        "CINDH - Club d'Initiative Nationale pour le Développement Humain",
      ],
    },
  };

  const text = language === "fr" ? content.fr : content.en;

  return (
    <section
      id="about"
      className="section-padding relative bg-slate-900 overflow-hidden pt-24"
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="md:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              {text.summary}
            </p>

            <div className="bg-blue-500/10 border-l-4 border-cyan-400 p-4 rounded-r-lg backdrop-blur-sm">
              <p className="text-cyan-400 font-medium">
                {text.looking}
              </p>
            </div>

            <div className="mt-8 space-y-6">
              <h3 className="text-2xl font-semibold mb-6 text-white">{text.interests}</h3>

              {/* Study Interests */}
              <div>
                <h4 className="text-lg font-semibold mb-3 text-cyan-400 flex items-center">
                  <span className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center mr-2">
                    📚
                  </span>
                  {text.studyInterests}
                </h4>
                <ul className="space-y-2 ml-10">
                  {text.studyItems.map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start text-gray-300"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className="text-cyan-400 mr-2">▹</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Hobbies */}
              <div>
                <h4 className="text-lg font-semibold mb-3 text-green-400 flex items-center">
                  <span className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center mr-2">
                    🎮
                  </span>
                  {text.hobbies}
                </h4>
                <ul className="space-y-2 ml-10">
                  {text.hobbyItems.map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start text-gray-300"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      <span className="text-green-400 mr-2">▹</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Clubs & Activities */}
              <div>
                <h4 className="text-lg font-semibold mb-3 text-purple-400 flex items-center">
                  <span className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center mr-2">
                    🏆
                  </span>
                  {text.clubs}
                </h4>
                <ul className="space-y-2 ml-10">
                  {text.clubItems.map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start text-gray-300"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.6 }}
                    >
                      <span className="text-purple-400 mr-2">▹</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Card className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 overflow-hidden shadow-xl shadow-blue-500/5">
              <div className="h-1 bg-gradient-to-r from-blue-500 to-cyan-500" />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {text.contactInfo}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 mr-3 text-cyan-400" />
                    <div>
                      <p className="text-sm text-gray-400">
                        {text.email}
                      </p>
                      <a
                        href="mailto:marouanessdiki@gmail.com"
                        className="text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        marouanessdiki@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-5 w-5 mr-3 text-cyan-400" />
                    <div>
                      <p className="text-sm text-gray-400">
                        {text.phone}
                      </p>
                      <a
                        href="tel:+212681902674"
                        className="text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        +212 681 90 26 74
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 text-cyan-400" />
                    <div>
                      <p className="text-sm text-gray-400">
                        {text.location}
                      </p>
                      <p className="text-gray-300">Rabat, Morocco</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 overflow-hidden shadow-xl shadow-blue-500/5">
              <div className="h-1 bg-gradient-to-r from-green-500 to-emerald-500" />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">{text.languages}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">{text.english}</span>
                    <span className="text-sm bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full font-mono">
                      {text.fluent}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">{text.french}</span>
                    <span className="text-sm bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full font-mono">
                      {text.fluent}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">{text.arabic}</span>
                    <span className="text-sm bg-green-500/20 text-green-400 px-3 py-1 rounded-full font-mono">
                      {text.native}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
