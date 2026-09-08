import { createFileRoute } from "@tanstack/react-router";
import { AkLockup } from "@/components/AkLockup";
import { MediaSlot } from "@/components/MediaSlot";
import reelHero from "@/assets/reel-hero.jpg";
import reelHeroVideo from "@/assets/reel-hero.mp4.asset.json";
import workAnxiety from "@/assets/work-anxiety.jpg";
import workAnxietyVideo from "@/assets/work-anxiety.mp4.asset.json";
import workFreelanceVideo from "@/assets/work-freelance.mp4.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Angelica Klüh — Motion Graphic Designer | Visual Storytelling & AI" },
      {
        name: "description",
        content:
          "Motion designer at Seibert Group, with roots in fashion illustration. Short animations with rhythm, colour and substance.",
      },
      { property: "og:title", content: "Angelica Klüh — Motion Graphic Designer | Visual Storytelling & AI" },
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
    label: "[VIDEO OF INNER SELF APP]",
    src: workAnxietyVideo.url,
    image: workAnxiety,
    alt: "Cut-paper collage of a calm figure surrounded by concentric coloured ripples",
    title: "Inner Self App",
    lines: "A personal project I made for myself: an animation with an original voice-over, built for Inner Self, an app for anxiety support. No client brief, no deadline — just an idea I believed in, and the chance to give it real emotional weight.",
  },
  {
    label: "[VIDEO OF FREELANCE WORK]",
    src: workFreelanceVideo.url,
    image: undefined,
    alt: "Freelance client work reel",
    title: "Freelance Work",
    lines: "A reel of independent client work across several years — from directing the trailer, music, and social media for the Latin American Film Festival at Frankfurt's Film Museum, two years running, to animation for Continental, a logo animation for Deutsche Bahn, and live projections for art events at Kloster Eberbach.",
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
            Motion Graphic Designer | Visual Storytelling & AI
          </span>
        </header>

        <div className="reveal mt-10 sm:mt-14">
          <MediaSlot
            label="[VIDEO/REEL FILE — personal reel, autoplay, muted, loop]"
            src={reelHeroVideo.url}
            poster={reelHero}
            alt="Cut-paper collage of bold organic shapes in pink, green, blue and yellow"
            width={1600}
            height={1008}
            ratio="16 / 10"
            priority
          />
        </div>

        <p className="reveal mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          A mix of 2D and 3D animation, scored with an original soundtrack — composed by a music studio just for this piece, note for note. It's a small selection of the work I'm proudest of. But it's more than a portfolio: it's a reminder that change is good — that new chapters bring endless new things, and possibility. Rhythm, color, and substance — the way I like to tell every story.
        </p>

        <h1 className="reveal mt-10 max-w-4xl text-[2rem] leading-[1.08] tracking-[-0.01em] text-balance sm:mt-14 sm:text-5xl md:text-6xl">
          I turn brand and product stories into short animations with rhythm,
          colour, and substance.
        </h1>
      </section>

      {/* 2. WHO I AM */}
      <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 md:py-28">
        <h2 className="display-bold text-3xl tracking-[0.01em] sm:text-4xl">
          Who I am
        </h2>
        <p className="mt-8 max-w-3xl text-xl leading-[1.45] font-normal tracking-[-0.005em] text-pretty sm:text-2xl md:text-3xl">
          Graphic designer with roots in art and illustration, now working in
          motion design — from brand videos to interactive product animation.
          Increasingly building with AI-assisted workflows.
          <span className="block text-muted-foreground">
            Currently open to new opportunities, in-house or freelance, with
            teams who care about story as much as motion.
          </span>
        </p>
      </section>

      {/* 3. PROOF */}
      <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 md:py-28">
        <h2 className="display-bold text-3xl tracking-[0.01em] sm:text-4xl">
          Proof
        </h2>
        <div className="mt-10 grid gap-12 md:grid-cols-2 md:gap-10">
          {proof.map((item) => (
            <article key={item.title}>
              <MediaSlot
                label={item.label}
                src={item.src}
                poster={item.image}
                image={item.image}
                alt={item.alt}
                width={1200}
                height={912}
                ratio="4 / 3"
              />
              <h3 className="display-bold mt-5 text-xl tracking-[0.01em]">
                {item.title}
              </h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground text-pretty">
                {item.lines}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* 4. HOW I WORK */}
      <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 md:py-28">
        <h2 className="display-bold text-3xl tracking-[0.01em] sm:text-4xl">
          How I work
        </h2>
        <div className="mt-10 grid gap-10 border-t border-border pt-10 md:grid-cols-3 md:gap-8">
          {how.map((item) => (
            <div key={item.word}>
              <h3 className="display-bold text-3xl tracking-[0.01em] sm:text-4xl">
                {item.word}
              </h3>
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
            className="display-bold max-w-4xl text-[2rem] leading-[1.08] tracking-[-0.01em] text-balance sm:text-5xl md:text-6xl"
            style={{ color: "var(--background)" }}
          >
            Open to new projects and opportunities — freelance or full-time.
          </h2>

          <a
            href="mailto:angelica.klueh@gmail.com"
            className="mt-10 inline-flex items-center gap-3 border-b pb-1 text-lg font-medium transition-opacity hover:opacity-60 sm:text-xl"
            style={{
              color: "var(--background)",
              borderColor: "oklch(1 0 0 / 40%)",
            }}
          >
            Get in touch
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
            Motion Graphic Designer | Visual Storytelling & AI
          </p>
        </div>
      </section>
    </main>
  );
}
