import { useEffect, useState } from "react";

const greetings = {
  morning: [
    "Bonjour ! Comment puis-je vous aider ce matin ?",
    "Bon matin ! Prêt à démarrer la journée ?",
    "Bonjour ! Que puis-je faire pour vous aujourd'hui ?",
  ],
  afternoon: [
    "Bon après-midi ! Sur quoi voulez-vous travailler ?",
    "Bonjour ! Comment se passe votre journée ?",
    "Bon après-midi ! En quoi puis-je vous assister ?",
  ],
  evening: [
    "Bonsoir ! Comment puis-je vous aider ce soir ?",
    "Bonsoir ! Que puis-je faire pour vous ?",
    "Bonne soirée ! En quoi puis-je vous assister ?",
  ],
  night: [
    "Bonsoir ! Encore au travail ?",
    "Bonne nuit ! Comment puis-je vous aider ?",
    "Bonsoir ! Que puis-je faire pour vous ce soir ?",
  ],
};

const TimeBasedGreeting = () => {
  const [greeting, setGreeting] = useState("");

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
      setGreeting(randomGreeting);
    };

    updateGreeting();
    const interval = setInterval(updateGreeting, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-[50vh] px-6">
      <p className="text-3xl md:text-4xl lg:text-5xl text-center text-foreground font-normal leading-relaxed max-w-4xl">
        {greeting}
      </p>
    </div>
  );
};

export default TimeBasedGreeting;
