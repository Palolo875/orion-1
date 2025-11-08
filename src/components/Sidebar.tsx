import { LayoutGrid, Edit3, Clock, Copy, FileText, Beaker, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 bottom-0 w-12 bg-background border-r border-border flex flex-col items-center py-4 gap-4">
      <Button 
        variant="ghost" 
        size="icon" 
        className="h-9 w-9 hover:bg-accent/50 text-muted-foreground hover:text-foreground"
      >
        <LayoutGrid className="h-5 w-5" />
      </Button>
      
      <Button 
        variant="ghost" 
        size="icon" 
        className="h-9 w-9 hover:bg-accent/50 text-muted-foreground hover:text-foreground"
      >
        <Edit3 className="h-5 w-5" />
      </Button>
      
      <Button 
        variant="ghost" 
        size="icon" 
        className="h-9 w-9 hover:bg-accent/50 text-muted-foreground hover:text-foreground"
      >
        <Clock className="h-5 w-5" />
      </Button>
      
      <Button 
        variant="ghost" 
        size="icon" 
        className="h-9 w-9 hover:bg-accent/50 text-muted-foreground hover:text-foreground"
      >
        <Copy className="h-5 w-5" />
      </Button>
      
      <Button 
        variant="ghost" 
        size="icon" 
        className="h-9 w-9 hover:bg-accent/50 text-muted-foreground hover:text-foreground"
      >
        <FileText className="h-5 w-5" />
      </Button>
      
      <Button 
        variant="ghost" 
        size="icon" 
        className="h-9 w-9 hover:bg-accent/50 text-muted-foreground hover:text-foreground"
      >
        <Beaker className="h-5 w-5" />
      </Button>
      
      <div className="flex-1" />
      
      <Button 
        variant="ghost" 
        size="icon" 
        className="h-9 w-9 hover:bg-accent/50 text-muted-foreground hover:text-foreground"
      >
        <User className="h-5 w-5" />
      </Button>
    </aside>
  );
};

export default Sidebar;
