import { Menu, MessageSquarePlus, Clock, Search, Settings, User, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface SidebarProps {
  onOpenSettings: () => void;
  onOpenSearch: () => void;
}

const Sidebar = ({ onOpenSettings, onOpenSearch }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 bottom-0 bg-sidebar border-r border-sidebar-border flex flex-col py-4 transition-all duration-300 z-50",
        isCollapsed ? "w-14" : "w-64"
      )}
    >
      {/* Toggle Button */}
      <div className={cn("flex items-center px-2 mb-4", !isCollapsed && "justify-between")}>
        {!isCollapsed && (
          <span className="text-lg font-semibold px-2">Menu</span>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="h-9 w-9 hover:bg-sidebar-accent"
        >
          {isCollapsed ? (
            <ChevronRight className="h-5 w-5" />
          ) : (
            <ChevronLeft className="h-5 w-5" />
          )}
        </Button>
      </div>

      {/* Navigation Items */}
      <div className="flex flex-col gap-2 px-2">
        <Button
          variant="ghost"
          className={cn(
            "h-10 hover:bg-sidebar-accent",
            isCollapsed ? "w-10 px-0" : "w-full justify-start"
          )}
        >
          <MessageSquarePlus className="h-5 w-5" />
          {!isCollapsed && <span className="ml-3">Nouvelle conversation</span>}
        </Button>

        <Button
          variant="ghost"
          onClick={onOpenSearch}
          className={cn(
            "h-10 hover:bg-sidebar-accent",
            isCollapsed ? "w-10 px-0" : "w-full justify-start"
          )}
        >
          <Search className="h-5 w-5" />
          {!isCollapsed && <span className="ml-3">Rechercher</span>}
        </Button>

        <Button
          variant="ghost"
          className={cn(
            "h-10 hover:bg-sidebar-accent",
            isCollapsed ? "w-10 px-0" : "w-full justify-start"
          )}
        >
          <Clock className="h-5 w-5" />
          {!isCollapsed && <span className="ml-3">Historique</span>}
        </Button>
      </div>

      <div className="flex-1" />

      {/* Bottom Actions */}
      <div className="flex flex-col gap-2 px-2">
        <Button
          variant="ghost"
          onClick={onOpenSettings}
          className={cn(
            "h-10 hover:bg-sidebar-accent",
            isCollapsed ? "w-10 px-0" : "w-full justify-start"
          )}
        >
          <Settings className="h-5 w-5" />
          {!isCollapsed && <span className="ml-3">Paramètres</span>}
        </Button>

        <Button
          variant="ghost"
          className={cn(
            "h-10 hover:bg-sidebar-accent",
            isCollapsed ? "w-10 px-0" : "w-full justify-start"
          )}
        >
          <User className="h-5 w-5" />
          {!isCollapsed && <span className="ml-3">Profil</span>}
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
