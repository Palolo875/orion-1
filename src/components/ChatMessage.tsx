interface ChatMessageProps {
  message: string;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  return (
    <div className="flex items-center justify-center min-h-[70vh] px-6">
      <p className="text-3xl md:text-4xl text-center text-foreground font-normal leading-relaxed max-w-3xl">
        {message}
      </p>
    </div>
  );
};

export default ChatMessage;
