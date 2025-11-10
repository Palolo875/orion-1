import { useState, useEffect, useRef } from "react";
import { Mic, Square } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface VoiceRecorderInlineProps {
  onTranscript?: (text: string) => void;
  onStop?: () => void;
}

const VoiceRecorderInline = ({ onTranscript, onStop }: VoiceRecorderInlineProps) => {
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
      
      // Simulation de transcription en temps réel
      let count = 0;
      const words = ["Ceci", "est", "une", "transcription", "en", "temps", "réel", "simulée"];
      const transcriptionInterval = setInterval(() => {
        if (count < words.length) {
          setTranscript((prev) => prev + (prev ? " " : "") + words[count]);
          count++;
        }
      }, 800);

      // Arrêter après quelques secondes
      setTimeout(() => {
        clearInterval(transcriptionInterval);
      }, 7000);
    } else {
      setIsRecording(false);
      if (transcript) {
        onTranscript?.(transcript);
      }
      onStop?.();
    }
  };

  return (
    <div className="flex items-center gap-3 w-full">
      {/* Recording button with waves */}
      <div className="relative shrink-0">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleRecording}
          className={cn(
            "h-10 w-10 rounded-full transition-all duration-300 relative z-10",
            isRecording
              ? "bg-recording-active hover:bg-recording-active/90 text-white"
              : "hover:bg-accent/50"
          )}
        >
          {isRecording ? (
            <Square className="h-5 w-5" fill="currentColor" />
          ) : (
            <Mic className="h-5 w-5" />
          )}
        </Button>

        {/* Animated waves */}
        {isRecording && (
          <>
            <div 
              className="absolute inset-0 rounded-full bg-recording-wave/30 animate-wave-pulse"
              style={{ animationDelay: "0s" }}
            />
            <div 
              className="absolute inset-0 rounded-full bg-recording-wave/20 animate-wave-pulse"
              style={{ animationDelay: "0.5s" }}
            />
            <div 
              className="absolute inset-0 rounded-full bg-recording-wave/20 animate-wave-ripple"
              style={{ animationDelay: "0s" }}
            />
            <div 
              className="absolute inset-0 rounded-full bg-recording-wave/15 animate-wave-ripple"
              style={{ animationDelay: "0.5s" }}
            />
          </>
        )}
      </div>

      {/* Timer and transcript */}
      {isRecording && (
        <div className="flex-1 min-w-0 space-y-1">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-recording-active animate-pulse" />
            <span className="text-sm font-medium text-foreground">
              {formatDuration(duration)}
            </span>
          </div>
          {transcript && (
            <p className="text-sm text-muted-foreground truncate font-light">
              {transcript}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default VoiceRecorderInline;
