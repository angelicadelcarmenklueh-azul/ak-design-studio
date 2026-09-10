import { PinkDot, GreenDot } from "@/components/BrandDots";

type Tone = "light" | "dark";

const toneColor = (tone: Tone) =>
  tone === "dark" ? "var(--background)" : "var(--ink)";

/**
 * Typographic AK lockup: "AK" set in Poiret One (faux-bold via text-stroke)
 * with the brand pink + green dots, plus the full "Angelica Klüh" name.
 */
export function AkLockup({
  tone = "light",
  className = "",
  size = "lg",
}: {
  tone?: Tone;
  className?: string;
  size?: "sm" | "lg";
}) {
  const color = toneColor(tone);
  const akClass =
    size === "lg"
      ? "text-[5.5rem] leading-[0.85] sm:text-[8rem] md:text-[10rem]"
      : "text-[2.5rem] leading-[0.85]";
  const nameClass =
    size === "lg"
      ? "text-2xl sm:text-4xl md:text-5xl"
      : "text-base sm:text-lg";
  const dotSize = size === "lg" ? "0.17em" : "0.19em";

  return (
    <div className={`flex flex-col items-start ${className}`} style={{ color }}>
      <span className={`relative inline-block font-display ${akClass}`}>
        <span
          className="font-normal"
          style={{
            WebkitTextStroke: "0.035em currentColor",
            letterSpacing: "-0.01em",
          }}
        >
          AK
        </span>
        <span
          aria-hidden
          className="absolute flex items-center gap-[0.09em]"
          style={{ top: "-0.1em", right: "-0.02em", fontSize: "inherit" }}
        >
          <PinkDot
            size={dotSize}
            className="dot-wiggle"
            style={{ animationDuration: "7.3s", animationDelay: "-1.1s" }}
          />
          <GreenDot
            size={dotSize}
            className="dot-wiggle"
            style={{ animationDuration: "9.1s", animationDelay: "-3.4s", transform: "scaleX(-1)" }}
          />
        </span>
      </span>

      <span
        className={`font-display mt-2 block ${nameClass}`}
        style={{ letterSpacing: "0.02em" }}
      >
        Angelica Klüh
      </span>
    </div>
  );
}