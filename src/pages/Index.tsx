import Sidebar from "@/components/Sidebar";
import ChatMessage from "@/components/ChatMessage";
import ChatInput from "@/components/ChatInput";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Sidebar />
      
      <main className="ml-12">
        <ChatMessage message="Bonjour. Sur quoi devrions-nous nous pencher aujourd'hui ?" />
      </main>

      <ChatInput />
    </div>
  );
};

export default Index;
