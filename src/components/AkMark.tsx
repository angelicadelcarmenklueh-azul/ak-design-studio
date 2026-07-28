type Props = {
  /** height of the mark in px (scales everything) */
  size?: number;
  /** "light" = black mark, "dark" = white mark */
  tone?: "light" | "dark";
  className?: string;
};

/**
 * AK monogram. Letters always monochrome (black, or white on dark).
 * The ONLY colour in the whole system: the two dots above the K —
 * pink on the left, green on the right.
 */
export function AkMark({ size = 48, tone = "light", className = "" }: Props) {
  return (
    <span
      className={`relative inline-block w-fit justify-self-start leading-none select-none ${className}`}
      style={{ fontSize: size }}
      aria-hidden="true"
    >
      <span
        className="block font-display font-bold"
        style={{
          letterSpacing: "-0.04em",
          color: tone === "dark" ? "var(--background)" : "var(--ink)",
        }}
      >
        AK
      </span>
      <span
        className="absolute flex"
        style={{ gap: size * 0.07, top: size * -0.14, right: size * 0.04 }}
      >
        <span
          className="block rounded-full"
          style={{
            width: size * 0.17,
            height: size * 0.17,
            background: "var(--dot-pink)",
          }}
        />
        <span
          className="block rounded-full"
          style={{
            width: size * 0.17,
            height: size * 0.17,
            background: "var(--dot-green)",
          }}
        />
      </span>
    </span>
  );
}

/** "Klüh" with the umlaut dots rendered in pink + green. */
export function KluhWord({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <span className="relative inline-block">
      <span style={{ color: tone === "dark" ? "var(--background)" : "var(--ink)" }}>
        Kl<span className="relative inline-block">u</span>h
      </span>
      <span
        className="absolute flex"
        style={{ gap: "0.06em", top: "-0.02em", left: "0.46em" }}
      >
        <span
          className="block rounded-full"
          style={{ width: "0.11em", height: "0.11em", background: "var(--dot-pink)" }}
        />
        <span
          className="block rounded-full"
          style={{ width: "0.11em", height: "0.11em", background: "var(--dot-green)" }}
        />
      </span>
    </span>
  );
}