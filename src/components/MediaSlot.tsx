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
  if (src) {
    return (
      <video
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload={priority ? "auto" : "none"}
        className="h-full w-full rounded-2xl object-cover"
        style={{ aspectRatio: ratio }}
      />
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