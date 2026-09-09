import { useRef, useState } from "react";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";

type Props = {
  /** Placeholder label, shown when no src is provided. Keep the [ ] marker. */
  label: string;
  src?: string;
  /** Static artwork shown when there is no video yet. */
  image?: string;
  alt?: string;
  width?: number;
  height?: number;
  poster?: string;
  ratio?: string;
  tone?: "light" | "dark";
  priority?: boolean;
};

/**
 * Renders an autoplaying muted looping video when a src exists,
 * otherwise an explicitly marked [ ] placeholder — never invented imagery.
 */
export function MediaSlot({
  label,
  src,
  image,
  alt,
  width,
  height,
  poster,
  ratio = "16 / 9",
  tone = "light",
  priority = false,
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  if (src) {
    const togglePlay = () => {
      if (!videoRef.current) return;
      if (playing) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setPlaying(!playing);
    };

    return (
      <div className="relative">
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          autoPlay
          muted={muted}
          loop
          playsInline
          preload={priority ? "auto" : "none"}
          className="h-full w-full rounded-2xl object-cover"
          style={{ aspectRatio: ratio }}
        />
        <div className="absolute bottom-4 right-4 flex gap-2">
          <button
            type="button"
            onClick={togglePlay}
            aria-label={playing ? "Pause video" : "Play video"}
            className="flex h-9 w-9 items-center justify-center rounded-full backdrop-blur transition-opacity hover:opacity-80"
            style={{ background: "oklch(0.183 0 0 / 55%)" }}
          >
            {playing ? (
              <Pause className="h-4 w-4" style={{ color: "white" }} />
            ) : (
              <Play className="h-4 w-4" style={{ color: "white" }} />
            )}
          </button>
          <button
            type="button"
            onClick={() => setMuted((m) => !m)}
            aria-label={muted ? "Unmute video" : "Mute video"}
            className="flex h-9 w-9 items-center justify-center rounded-full backdrop-blur transition-opacity hover:opacity-80"
            style={{ background: "oklch(0.183 0 0 / 55%)" }}
          >
            {muted ? (
              <VolumeX className="h-4 w-4" style={{ color: "white" }} />
            ) : (
              <Volume2 className="h-4 w-4" style={{ color: "white" }} />
            )}
          </button>
        </div>
      </div>
    );
  }

  if (image) {
    return (
      <img
        src={image}
        alt={alt ?? ""}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className="h-full w-full rounded-2xl object-cover"
        style={{ aspectRatio: ratio }}
      />
    );
  }

  return (
    <div
      className="flex w-full items-center justify-center rounded-2xl border border-dashed p-6 text-center"
      style={{
        aspectRatio: ratio,
        borderColor: tone === "dark" ? "oklch(1 0 0 / 25%)" : "var(--border)",
        background:
          tone === "dark" ? "oklch(1 0 0 / 4%)" : "oklch(0.183 0 0 / 3.5%)",
      }}
    >
      <span
        className="font-display text-[0.68rem] tracking-caps uppercase"
        style={{
          color: tone === "dark" ? "oklch(1 0 0 / 55%)" : "var(--muted-foreground)",
        }}
      >
        {label}
      </span>
    </div>
  );
}