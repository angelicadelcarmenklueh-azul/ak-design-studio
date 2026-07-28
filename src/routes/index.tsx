import { createFileRoute } from "@tanstack/react-router";
import { AkMark, KluhWord } from "@/components/AkMark";
import { MediaSlot } from "@/components/MediaSlot";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Angelica Klüh — Graphic + Motion Designer" },
      {
        name: "description",
        content:
          "Motion designer at Seibert Group, with roots in fashion illustration. Short animations with rhythm, colour and substance.",
      },
      { property: "og:title", content: "Angelica Klüh — Graphic + Motion Designer" },
      {
        property: "og:description",
        content:
          "Short brand and product animations with rhythm, colour and substance. Open for freelance work.",
      },
    ],
  }),
  component: Index,
});

const proof = [
  {
    label: "[VIDEO/IMAGE OF THE ANAHEIM PROJECT]",
    title: "Atlassian, Anaheim",
    lines:
      "A video made for Atlassian and presented in Anaheim. Teams in France, Austria and Denmark later asked to replicate it.",
  },
  {
    label: "[VIDEO/IMAGE OF THE SEASONAL ANIMATIONS]",
    title: "Seasonal concept",
    lines: "A seasonal animation concept that grew followers — and sales.",
  },
  {
    label: "[VIDEO/IMAGE OF THE APP ANIMATION]",
    title: "Anxiety app",
    lines: "An animation for an anxiety app — motion with a social purpose.",
  },
];

const how = [
  { word: "Reliable", line: "[LINE FOR \u201cRELIABLE\u201d]" },
  { word: "Direct", line: "[LINE FOR \u201cDIRECT\u201d]" },
  { word: "Vibrant", line: "Vibrant not just in colour, but in sound." },
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* 1. HERO */}
      <section className="mx-auto w-full max-w-6xl px-6 pt-8 pb-20 sm:px-10 sm:pt-10 md:pb-32">
        <header className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
          <AkMark size={34} />
          <span className="text-[0.6rem] tracking-caps text-muted-foreground uppercase sm:text-[0.68rem]">
            Graphic + Motion Designer
          </span>
        </header>

        <div className="reveal mt-10 sm:mt-14">
          <MediaSlot
            label="[VIDEO/REEL FILE — personal reel, autoplay, muted, loop]"
            ratio="16 / 10"
            priority
          />
        </div>

        <h1 className="reveal mt-10 max-w-4xl text-[2rem] leading-[1.08] font-semibold tracking-[-0.03em] text-balance sm:mt-14 sm:text-5xl md:text-6xl">
          I turn brand and product stories into short animations with rhythm,
          colour, and substance.
        </h1>
      </section>

      {/* 2. WHO I AM */}
      <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 md:py-28">
        <p className="text-[0.6rem] tracking-caps text-muted-foreground uppercase sm:text-[0.68rem]">
          Who I am
        </p>
        <p className="mt-8 max-w-3xl text-xl leading-[1.45] font-medium tracking-[-0.015em] text-pretty sm:text-2xl md:text-3xl">
          Graphic designer with roots in fashion illustration, now motion
          designer at Seibert Group, an Atlassian partner in Germany.
          <span className="block text-muted-foreground">
            Currently opening up space for freelance work with animation and
            advertising agencies.
          </span>
        </p>
      </section>

      {/* 3. PROOF */}
      <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 md:py-28">
        <p className="text-[0.6rem] tracking-caps text-muted-foreground uppercase sm:text-[0.68rem]">
          Proof
        </p>
        <div className="mt-10 grid gap-12 md:grid-cols-3 md:gap-8">
          {proof.map((item) => (
            <article key={item.title}>
              <MediaSlot label={item.label} ratio="4 / 3" />
              <h2 className="mt-5 text-lg font-semibold tracking-[-0.02em]">
                {item.title}
              </h2>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground text-pretty">
                {item.lines}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* 4. HOW I WORK */}
      <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 md:py-28">
        <p className="text-[0.6rem] tracking-caps text-muted-foreground uppercase sm:text-[0.68rem]">
          How I work
        </p>
        <div className="mt-10 grid gap-10 border-t border-border pt-10 md:grid-cols-3 md:gap-8">
          {how.map((item) => (
            <div key={item.word}>
              <h2 className="text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
                {item.word}
              </h2>
              <p className="mt-3 max-w-xs text-[0.95rem] leading-relaxed text-muted-foreground text-pretty">
                {item.line}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CONTACT */}
      <section
        className="mt-10 px-6 py-24 sm:px-10 md:py-32"
        style={{ background: "var(--ink)" }}
      >
        <div className="mx-auto w-full max-w-6xl">
          <AkMark size={40} tone="dark" />
          <h2
            className="mt-10 max-w-3xl text-[1.9rem] leading-[1.12] font-semibold tracking-[-0.03em] text-balance sm:text-5xl"
            style={{ color: "var(--background)" }}
          >
            Looking for a reliable animator for your next project?
          </h2>

          <a
            href="mailto:[EMAIL OR BOOKING LINK - PLACEHOLDER]"
            className="mt-10 inline-flex items-center gap-3 border-b pb-1 text-lg font-medium transition-opacity hover:opacity-60 sm:text-xl"
            style={{
              color: "var(--background)",
              borderColor: "oklch(1 0 0 / 40%)",
            }}
          >
            [EMAIL OR BOOKING LINK - PLACEHOLDER]
          </a>

          <p
            className="mt-14 text-[0.6rem] tracking-caps uppercase sm:text-[0.65rem]"
            style={{ color: "oklch(1 0 0 / 45%)" }}
          >
            [SOCIAL LINKS - OPTIONAL: Instagram / Behance / LinkedIn]
          </p>

          <div
            className="mt-16 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-2xl font-bold tracking-[-0.03em] sm:text-3xl"
            style={{ color: "var(--background)" }}
          >
            <span>Angelica</span>
            <KluhWord tone="dark" />
          </div>
          <p
            className="mt-3 text-[0.6rem] tracking-caps uppercase"
            style={{ color: "oklch(1 0 0 / 45%)" }}
          >
            Graphic + Motion Designer
          </p>
        </div>
      </section>
    </main>
  );
}
