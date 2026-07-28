import { createFileRoute } from "@tanstack/react-router";
import { AkLockup } from "@/components/AkLockup";
import { MediaSlot } from "@/components/MediaSlot";
import reelHero from "@/assets/reel-hero.jpg";
import workAnaheim from "@/assets/work-anaheim.jpg";
import workSeasonal from "@/assets/work-seasonal.jpg";
import workAnxiety from "@/assets/work-anxiety.jpg";

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
    image: workAnaheim,
    alt: "Cut-paper collage of a speaker on stage with a pink starburst and blue lightning bolt",
    title: "Atlassian, Anaheim",
    lines:
      "A video made for Atlassian and presented in Anaheim. Teams in France, Austria and Denmark later asked to replicate it.",
  },
  {
    label: "[VIDEO/IMAGE OF THE SEASONAL ANIMATIONS]",
    image: workSeasonal,
    alt: "Cut-paper collage of seasonal leaves, flowers and sun rays in brand colours",
    title: "Seasonal concept",
    lines: "A seasonal animation concept that grew followers — and sales.",
  },
  {
    label: "[VIDEO/IMAGE OF THE APP ANIMATION]",
    image: workAnxiety,
    alt: "Cut-paper collage of a calm figure surrounded by concentric coloured ripples",
    title: "Anxiety app",
    lines: "An animation for an anxiety app — motion with a social purpose.",
  },
];

const how = [
  { word: "Reliable", line: "Reliable not just in deadlines, but in every frame that ships on brief." },
  { word: "Direct", line: "Direct not just in words, but in how fast an idea becomes a finished animation." },
  { word: "Vibrant", line: "Vibrant not just in color, but in sound." },
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* 1. HERO */}
      <section className="mx-auto w-full max-w-6xl px-6 pt-14 pb-20 sm:px-10 sm:pt-16 md:pb-32">
        <header className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <AkLockup size="lg" />
          <span className="text-[0.6rem] tracking-caps text-muted-foreground uppercase sm:text-[0.68rem]">
            Graphic + Motion Designer
          </span>
        </header>

        <div className="reveal mt-10 sm:mt-14">
          <MediaSlot
            label="[VIDEO/REEL FILE — personal reel, autoplay, muted, loop]"
            image={reelHero}
            alt="Cut-paper collage of bold organic shapes in pink, green, blue and yellow"
            width={1600}
            height={1008}
            ratio="16 / 10"
            priority
          />
        </div>

        <h1 className="reveal mt-10 max-w-4xl text-[2rem] leading-[1.08] tracking-[-0.01em] text-balance sm:mt-14 sm:text-5xl md:text-6xl">
          I turn brand and product stories into short animations with rhythm,
          colour, and substance.
        </h1>
      </section>

      {/* 2. WHO I AM */}
      <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 md:py-28">
        <p className="text-[0.6rem] tracking-caps text-muted-foreground uppercase sm:text-[0.68rem]">
          Who I am
        </p>
        <p className="mt-8 max-w-3xl text-xl leading-[1.45] font-normal tracking-[-0.005em] text-pretty sm:text-2xl md:text-3xl">
          Graphic designer with roots in art and illustration, now motion
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
              <MediaSlot
                label={item.label}
                image={item.image}
                alt={item.alt}
                width={1200}
                height={912}
                ratio="4 / 3"
              />
              <h2 className="mt-5 text-xl tracking-[0.01em]">
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
              <h2 className="text-3xl tracking-[0.01em] sm:text-4xl">
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
      <section className="mt-10 py-24 md:py-32" style={{ background: "var(--ink)" }}>
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
          <h2
            className="max-w-3xl text-[1.9rem] leading-[1.12] tracking-[-0.01em] text-balance sm:text-5xl"
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

          <div className="mt-16">
            <AkLockup size="lg" tone="dark" />
          </div>
          <p
            className="mt-6 text-[0.6rem] tracking-caps uppercase"
            style={{ color: "oklch(1 0 0 / 45%)" }}
          >
            Graphic + Motion Designer
          </p>
        </div>
      </section>
    </main>
  );
}
