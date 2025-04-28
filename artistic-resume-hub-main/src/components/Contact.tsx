import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface ContactProps {
  language: "fr" | "en";
}

const Contact = ({ language }: ContactProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { toast } = useToast();

  const content = {
    en: {
      title: "Contact Me",
      subtitle: "Let's get in touch",
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your Email",
      messagePlaceholder: "Your Message",
      submitButton: "Send Message",
      sending: "Sending...",
      contactInfo: "Contact Information",
      successMessage: "Message sent successfully!",
      errorMessage: "Failed to send message. Please try again later.",
    },
    fr: {
      title: "Contactez-moi",
      subtitle: "Prenons contact",
      namePlaceholder: "Votre Nom",
      emailPlaceholder: "Votre Email",
      messagePlaceholder: "Votre Message",
      submitButton: "Envoyer le Message",
      sending: "Envoi en cours...",
      contactInfo: "Informations de Contact",
      successMessage: "Message envoyé avec succès!",
      errorMessage:
        "Échec de l'envoi du message. Veuillez réessayer plus tard.",
    },
  };

  const text = language === "fr" ? content.fr : content.en;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: text.successMessage,
        description: `${name}, ${email}`,
      });
      setName("");
      setEmail("");
      setMessage("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="section-padding bg-white dark:bg-tech-darkblue"
    >
      <div className="container mx-auto">
        <h2 className="section-title">{text.title}</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-10 text-lg">
          {text.subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <Input
                  placeholder={text.namePlaceholder}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-gray-50 dark:bg-gray-800 border-0"
                />
                <Input
                  type="email"
                  placeholder={text.emailPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-gray-50 dark:bg-gray-800 border-0"
                />
                <Textarea
                  placeholder={text.messagePlaceholder}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="bg-gray-50 dark:bg-gray-800 border-0 min-h-[200px]"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-tech-blue hover:bg-tech-lightblue text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="animate-pulse">{text.sending}</span>
                ) : (
                  <>
                    {text.submitButton}
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </div>

          <div>
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg h-full">
              <h3 className="text-xl font-semibold mb-6">{text.contactInfo}</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-white dark:bg-gray-700 p-3 rounded-full mr-4">
                    <Mail className="text-tech-blue h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:marouanessdiki@gmail.com"
                      className="text-tech-blue hover:underline"
                    >
                      marouanessdiki@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white dark:bg-gray-700 p-3 rounded-full mr-4">
                    <Phone className="text-tech-blue h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <a
                      href="tel:+212681902674"
                      className="text-tech-blue hover:underline"
                    >
                      +212 681 90 26 74
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white dark:bg-gray-700 p-3 rounded-full mr-4">
                    <MapPin className="text-tech-blue h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Rabat, Morocco
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t pt-8 border-gray-200 dark:border-gray-700">
                <div className="flex justify-center space-x-6">
                  <a
                    href="https://github.com/marouanessdiki"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-tech-blue dark:text-gray-400 dark:hover:text-tech-lightblue transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/marouane-es-sdiki-273a7725a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-tech-blue dark:text-gray-400 dark:hover:text-tech-lightblue transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
