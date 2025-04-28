import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface AboutProps {
  language: "fr" | "en";
}

const About = ({ language }: AboutProps) => {
  const content = {
    en: {
      title: "About Me",
      summary:
        "As a second-year engineering student in Data Science and Internet of Things (IDSIT) at ENSIAS, I am currently looking for a skill-enhancing internship starting in June. With strong technical and theoretical foundations, I am eager to deepen my knowledge and strengthen my professional experience, particularly in web development, mobile development, and cybersecurity.",
      looking:
        "Looking for a two-month skill-enhancing internship starting in June (web, mobile development, or cybersecurity).",
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
      volunteer: "Volunteer Experience",
      volunteerItems: [
        "Member of the CINDH Club: National Initiative for Human Development Club",
        "Member of the INSEC Club: The Information Security Club of ENSIAS",
        "Member of the IT Club: ENSIAS IT Club",
      ],
    },
    fr: {
      title: "À Propos de Moi",
      summary:
        "En tant qu'étudiant ingénieur en deuxième année de Data Science et Internet des Objets (IDSIT) à l'ENSIAS, je suis actuellement à la recherche d'un stage de perfectionnement à partir du mois de juin. Fort de solides bases techniques et théoriques, je souhaite approfondir mes connaissances et consolider mon expérience professionnelle, notamment dans le développement web, mobile et la cybersécurité.",
      looking:
        "À la recherche d'un stage de perfectionnement de deux mois à partir de juin (développement web, mobile ou cybersécurité).",
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
      volunteer: "Expérience Bénévole",
      volunteerItems: [
        "Membre du club CINDH : Club d’Initiative Nationale du Développement Humain",
        "Membre du club INSEC : The Information Security Club of ENSIAS",
        "Membre du club IT : ENSIAS IT Club",
      ],
    },
  };

  const text = language === "fr" ? content.fr : content.en;

  return (
    <section
      id="about"
      className="section-padding bg-white dark:bg-tech-darkblue pt-24"
    >
      <div className="container mx-auto">
        <h2 className="section-title">{text.title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              {text.summary}
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-tech-blue p-4 rounded-r-lg">
              <p className="text-tech-blue dark:text-blue-300 font-medium">
                {text.looking}
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">{text.volunteer}</h3>
              <ul className="space-y-2 list-disc list-inside">
                {text.volunteerItems.map((item, index) => (
                  <li key={index} className="text-gray-700 dark:text-gray-300">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="card-shadow overflow-hidden border-t-4 border-t-tech-blue">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  {text.contactInfo}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 mr-3 text-tech-blue" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {text.email}
                      </p>
                      <a
                        href="mailto:marouanessdiki@gmail.com"
                        className="text-tech-blue hover:underline"
                      >
                        marouanessdiki@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-5 w-5 mr-3 text-tech-blue" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {text.phone}
                      </p>
                      <a
                        href="tel:+212681902674"
                        className="text-tech-blue hover:underline"
                      >
                        +212 681 90 26 74
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 text-tech-blue" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {text.location}
                      </p>
                      <p>MAROUANE ES-SDIKI</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-shadow overflow-hidden border-t-4 border-t-tech-accent">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">{text.languages}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>{text.english}</span>
                    <span className="text-sm bg-blue-100 dark:bg-blue-900/30 text-tech-blue px-2 py-1 rounded">
                      {text.fluent}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>{text.french}</span>
                    <span className="text-sm bg-blue-100 dark:bg-blue-900/30 text-tech-blue px-2 py-1 rounded">
                      {text.fluent}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>{text.arabic}</span>
                    <span className="text-sm bg-blue-100 dark:bg-blue-900/30 text-tech-blue px-2 py-1 rounded">
                      {text.native}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
