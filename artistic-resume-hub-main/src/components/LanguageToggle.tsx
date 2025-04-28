import { Button } from "@/components/ui/button";

interface LanguageToggleProps {
  language: "fr" | "en";
  setLanguage: (lang: "fr" | "en") => void;
}

const LanguageToggle = ({ language, setLanguage }: LanguageToggleProps) => {
  return (
    <div className="flex items-center space-x-2">
      <Button
        variant={language === "fr" ? "default" : "outline"}
        size="sm"
        onClick={() => setLanguage("fr")}
        className="w-16 rounded-md px-4"
        aria-label="Switch to French"
      >
        FR
      </Button>
      <Button
        variant={language === "en" ? "default" : "outline"}
        size="sm"
        onClick={() => setLanguage("en")}
        className="w-16 rounded-md px-4"
        aria-label="Switch to English"
      >
        EN
      </Button>
    </div>
  );
};

export default LanguageToggle;
