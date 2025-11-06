import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EmailJS Configuration - Using environment variables
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
      to_name: "Marouane ES-SDIKI",
    };

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      toast({
        title: text.successMessage,
        description: language === "fr"
          ? "Je vous répondrai bientôt!"
          : "I'll get back to you soon!",
      });

      // Clear form
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: text.errorMessage,
        description: language === "fr"
          ? "Veuillez réessayer ou me contacter directement par email."
          : "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="section-padding relative bg-slate-950 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-white mb-4">{text.title}</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 mb-4 rounded-full" />
          <p className="text-gray-300 mb-10 text-lg">
            {text.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <Input
                  placeholder={text.namePlaceholder}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-slate-800/50 border-blue-500/30 text-white placeholder:text-gray-400 focus:border-cyan-400"
                />
                <Input
                  type="email"
                  placeholder={text.emailPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-slate-800/50 border-blue-500/30 text-white placeholder:text-gray-400 focus:border-cyan-400"
                />
                <Textarea
                  placeholder={text.messagePlaceholder}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="bg-slate-800/50 border-blue-500/30 text-white placeholder:text-gray-400 focus:border-cyan-400 min-h-[200px]"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0 shadow-lg shadow-blue-500/30"
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 p-8 rounded-lg h-full">
              <h3 className="text-xl font-semibold mb-6 text-white">{text.contactInfo}</h3>

              <div className="space-y-6">
                <motion.div
                  className="flex items-start group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-blue-500/10 p-3 rounded-lg mr-4 border border-blue-500/30 group-hover:bg-blue-500/20 transition-colors">
                    <Mail className="text-cyan-400 h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-300">Email</p>
                    <a
                      href="mailto:marouanessdiki@gmail.com"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      marouanessdiki@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-blue-500/10 p-3 rounded-lg mr-4 border border-blue-500/30 group-hover:bg-blue-500/20 transition-colors">
                    <Phone className="text-cyan-400 h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-300">Phone</p>
                    <a
                      href="tel:+212681902674"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      +212 681 90 26 74
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-blue-500/10 p-3 rounded-lg mr-4 border border-blue-500/30 group-hover:bg-blue-500/20 transition-colors">
                    <MapPin className="text-cyan-400 h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-300">Location</p>
                    <p className="text-gray-400">
                      Rabat, Morocco
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="mt-8 border-t pt-8 border-blue-500/20">
                <div className="flex justify-center space-x-6">
                  <motion.a
                    href="https://github.com/marouanessdiki"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors font-medium"
                    whileHover={{ scale: 1.1, y: -2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    GitHub
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/marouane-es-sdiki/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors font-medium"
                    whileHover={{ scale: 1.1, y: -2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    LinkedIn
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
