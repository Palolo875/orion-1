import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import ThemeToggle from "./ThemeToggle";

interface SettingsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SettingsModal = ({ open, onOpenChange }: SettingsModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] backdrop-blur-xl bg-background/95 border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl">Paramètres</DialogTitle>
          <DialogDescription>
            Personnalisez votre expérience
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Apparence */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Apparence</h3>
            <div className="flex items-center justify-between">
              <Label htmlFor="dark-mode" className="flex flex-col space-y-1">
                <span>Mode sombre</span>
                <span className="text-sm font-normal text-muted-foreground">
                  Basculer entre les thèmes clair et sombre
                </span>
              </Label>
              <ThemeToggle />
            </div>
          </div>

          <Separator />

          {/* Conversation */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Conversation</h3>
            <div className="flex items-center justify-between">
              <Label htmlFor="save-history" className="flex flex-col space-y-1">
                <span>Sauvegarder l'historique</span>
                <span className="text-sm font-normal text-muted-foreground">
                  Enregistrer vos conversations
                </span>
              </Label>
              <Switch id="save-history" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="show-thinking" className="flex flex-col space-y-1">
                <span>Afficher la réflexion</span>
                <span className="text-sm font-normal text-muted-foreground">
                  Voir le processus de pensée de l'IA
                </span>
              </Label>
              <Switch id="show-thinking" defaultChecked />
            </div>
          </div>

          <Separator />

          {/* Audio */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Audio</h3>
            <div className="flex items-center justify-between">
              <Label htmlFor="auto-play" className="flex flex-col space-y-1">
                <span>Lecture automatique</span>
                <span className="text-sm font-normal text-muted-foreground">
                  Lire les réponses à haute voix
                </span>
              </Label>
              <Switch id="auto-play" />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SettingsModal;
