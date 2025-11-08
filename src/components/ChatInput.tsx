import { Plus, Mic, Paperclip, FileText, Image as ImageIcon, Mic2, ClipboardList, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const ChatInput = () => {
  const [message, setMessage] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { icon: Paperclip, label: "Ajouter des images ou des fichiers" },
    { icon: FileText, label: "Coller du texte" },
    { icon: ImageIcon, label: "Générer une image" },
    { icon: Mic2, label: "Créer un podcast", badge: "1 restante(s)" },
    { icon: ClipboardList, label: "Démarrer un questionnaire" },
  ];

  const quickActions = [
    "Créez une image",
    "Répondez à un questionnaire",
    "Écrivez un premier brouillon",
    "Concevez un logo",
    "Obtenez des conseils",
    "Rédigez un e-mail",
    "Rédigez un texte"
  ];

  return (
    <div className="fixed bottom-0 left-12 right-0 px-8 pb-8">
      <div className="max-w-4xl mx-auto space-y-4">
        {/* Input field */}
        <div className="relative">
          <div className="bg-card rounded-3xl shadow-lg border border-border overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3">
              <Popover open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <PopoverTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-9 w-9 rounded-full hover:bg-secondary text-muted-foreground hover:text-foreground"
                  >
                    <Plus className="h-5 w-5" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent 
                  className="w-80 p-2 bg-popover border-border" 
                  align="start"
                  side="top"
                >
                  <div className="space-y-1">
                    {menuItems.map((item, index) => (
                      <button
                        key={index}
                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-secondary text-left text-sm text-foreground transition-colors"
                      >
                        <item.icon className="h-4 w-4 text-muted-foreground" />
                        <span className="flex-1">{item.label}</span>
                        {item.badge && (
                          <span className="text-xs text-muted-foreground">{item.badge}</span>
                        )}
                      </button>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>
              
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Écrire un message à Copilot"
                className="flex-1 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-base placeholder:text-muted-foreground"
              />
              
              <Button 
                variant="ghost" 
                size="sm"
                className="rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground gap-1 px-3"
              >
                Smart (GPT-5)
                <ChevronDown className="h-4 w-4" />
              </Button>
              
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-9 w-9 rounded-full hover:bg-secondary text-muted-foreground hover:text-foreground"
              >
                <Mic className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Quick action buttons */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide justify-center flex-wrap">
          {quickActions.map((action, index) => (
            <Button 
              key={index}
              variant="secondary" 
              className="rounded-full whitespace-nowrap bg-secondary hover:bg-secondary/80 border border-border/50 text-sm"
            >
              {action}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
