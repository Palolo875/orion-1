import { useState, useEffect, useRef } from "react";
import { Mic, Square } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface VoiceRecorderProps {
  onTranscript?: (text: string) => void;
}

const VoiceRecorder = ({ onTranscript }: VoiceRecorderProps) => {
  const [isRecording, setIsRecording] = useState(false);
  const [duration, setDuration] = useState(0);
  const [transcript, setTranscript] = useState("");
  const intervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (isRecording) {
      intervalRef.current = setInterval(() => {
        setDuration((prev) => prev + 1);
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      setDuration(0);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRecording]);

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const toggleRecording = () => {
    if (!isRecording) {
      setIsRecording(true);
      setTranscript("");
      // Simulation de transcription
      setTimeout(() => {
        const simulatedText = "Ceci est une transcription simulée...";
        setTranscript(simulatedText);
        onTranscript?.(simulatedText);
      }, 3000);
    } else {
      setIsRecording(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleRecording}
          className={cn(
            "h-16 w-16 rounded-full transition-all",
            isRecording
              ? "bg-destructive hover:bg-destructive/90 text-destructive-foreground"
              : "bg-primary hover:bg-primary/90 text-primary-foreground"
          )}
        >
          {isRecording ? (
            <Square className="h-6 w-6" />
          ) : (
            <Mic className="h-6 w-6" />
          )}
        </Button>

        {/* Animation d'ondes */}
        {isRecording && (
          <>
            <div className="absolute inset-0 rounded-full border-2 border-destructive animate-ping opacity-75" />
            <div
              className="absolute inset-0 rounded-full border-2 border-destructive animate-ping opacity-50"
              style={{ animationDelay: "0.5s" }}
            />
            <div
              className="absolute inset-0 rounded-full border-2 border-destructive animate-ping opacity-25"
              style={{ animationDelay: "1s" }}
            />
          </>
        )}
      </div>

      {isRecording && (
        <div className="text-center space-y-2">
          <p className="text-lg font-medium">{formatDuration(duration)}</p>
          <p className="text-sm text-muted-foreground">Enregistrement en cours...</p>
        </div>
      )}

      {transcript && !isRecording && (
        <div className="max-w-md p-4 bg-card rounded-lg border border-border">
          <p className="text-sm text-muted-foreground mb-1">Transcription:</p>
          <p className="text-foreground">{transcript}</p>
        </div>
      )}
    </div>
  );
};

export default VoiceRecorder;
