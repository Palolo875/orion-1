import { useEffect, useState } from "react";
import { useUserPreferences } from "@/contexts/UserPreferencesContext";

const greetings = {
  morning: [
    "Bonjour{name} ! Comment puis-je vous aider ce matin ?",
    "Bon matin{name} ! Prêt à démarrer la journée ?",
    "Bonjour{name} ! Que puis-je faire pour vous aujourd'hui ?",
    "Belle matinée{name} ! Sur quoi voulez-vous travailler ?",
    "Bon jour{name} ! Comment puis-je vous accompagner ce matin ?",
    "Salut{name} ! Une nouvelle journée commence, comment puis-je aider ?",
  ],
  afternoon: [
    "Bon après-midi{name} ! Sur quoi voulez-vous travailler ?",
    "Bonjour{name} ! Comment se passe votre journée ?",
    "Bon après-midi{name} ! En quoi puis-je vous assister ?",
    "Salut{name} ! Que puis-je faire pour vous cet après-midi ?",
    "Bonjour{name} ! Prêt à avancer sur vos projets ?",
    "Bon après-midi{name} ! Comment puis-je vous être utile ?",
  ],
  evening: [
    "Bonsoir{name} ! Comment puis-je vous aider ce soir ?",
    "Bonsoir{name} ! Que puis-je faire pour vous ?",
    "Bonne soirée{name} ! En quoi puis-je vous assister ?",
    "Salut{name} ! Comment s'est passée votre journée ?",
    "Bonsoir{name} ! Sur quoi voulez-vous travailler ce soir ?",
    "Bonne soirée{name} ! Comment puis-je vous accompagner ?",
  ],
  night: [
    "Bonsoir{name} ! Encore au travail ?",
    "Bonne nuit{name} ! Comment puis-je vous aider ?",
    "Bonsoir{name} ! Que puis-je faire pour vous ce soir ?",
    "Salut{name} ! Vous travaillez tard ce soir ?",
    "Bonsoir{name} ! En quoi puis-je vous assister à cette heure ?",
    "Bonne nuit{name} ! Comment puis-je vous être utile ?",
  ],
};

const TimeBasedGreeting = () => {
  const [greeting, setGreeting] = useState("");
  const { firstName } = useUserPreferences();

  useEffect(() => {
    const updateGreeting = () => {
      const hour = new Date().getHours();
      let timeOfDay: keyof typeof greetings;

      if (hour >= 5 && hour < 12) {
        timeOfDay = "morning";
      } else if (hour >= 12 && hour < 17) {
        timeOfDay = "afternoon";
      } else if (hour >= 17 && hour < 22) {
        timeOfDay = "evening";
      } else {
        timeOfDay = "night";
      }

      const options = greetings[timeOfDay];
      const randomGreeting = options[Math.floor(Math.random() * options.length)];
      
      // Replace {name} with actual name or remove it
      const formattedGreeting = firstName 
        ? randomGreeting.replace("{name}", ` ${firstName}`)
        : randomGreeting.replace("{name}", "");
      
      setGreeting(formattedGreeting);
    };

    updateGreeting();
    const interval = setInterval(updateGreeting, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [firstName]);

  return (
    <div className="flex items-center justify-center min-h-[50vh] px-6">
      <p className="text-3xl md:text-4xl lg:text-5xl text-center text-foreground font-normal leading-relaxed max-w-4xl">
        {greeting}
      </p>
    </div>
  );
};

export default TimeBasedGreeting;
