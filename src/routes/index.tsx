import { createFileRoute } from "@tanstack/react-router";
import { motion, MotionConfig } from "framer-motion";
import { AkLockup } from "@/components/AkLockup";
import { MediaSlot } from "@/components/MediaSlot";
import reelHeroPoster from "@/assets/reel-hero-poster.png.asset.json";
import reelHeroVideo from "@/assets/reel-hero.mp4.asset.json";
import workAnxiety from "@/assets/work-anxiety.jpg";
import workAnxietyVideo from "@/assets/work-anxiety.mp4.asset.json";
import workFreelanceVideo from "@/assets/work-freelance.mp4.asset.json";
import resumePdf from "@/assets/resume.pdf.asset.json";
import workMonclerVideo from "@/assets/Moncler-sound-design.mp4.asset.json";
import workSparkChainVideo from "@/assets/the-spark-chain.mp4.asset.json";
import sparkChainCaseStudy from "@/assets/the-spark-chain-case-study.pdf.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Angelica Klüh — Motion Graphic Designer | Visual Storytelling" },
      {
        name: "description",
        content:
          "Motion graphic designer working across 2D and 3D animation, brand storytelling, and AI-assisted workflows. Open to new opportunities, in-house or freelance.",
      },
      { property: "og:title", content: "Angelica Klüh — Motion Graphic Designer | Visual Storytelling" },
      {
        property: "og:description",
        content:
          "Motion graphic designer working across 2D and 3D animation, brand storytelling, and AI-assisted workflows. Open to new opportunities, in-house or freelance.",
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
  {
    label: "[VIDEO OF THE SPARKCHAIN]",
    src: workSparkChainVideo.url,
    image: undefined,
    alt: "The SparkChain animation project",
    title: "The SparkChain",
    lines: "Turning a client brief into a short animated story — a single spark of curiosity moving through digital, geometric shapes before blooming into something organic, a tree taking root. Full brief, concepting, and storyboard in the case study.",
    wide: true,
    caseStudyUrl: sparkChainCaseStudy.url as string | undefined,
  },
  {
    label: "[VIDEO OF MONCLER SOUND DESIGN]",
    src: workMonclerVideo.url,
    image: undefined,
    alt: "Moncler sound design project",
    title: "Moncler Sound Design",
    lines: "Working from a pre-recorded voiceover and licensed production music, I shaped the sound design — music editing and final mix.",
    wide: true,
  },
];

const how = [
  { word: "Reliable", line: "Reliable not just in deadlines, but in every frame that ships on brief." },
  { word: "Direct", line: "Direct not just in words, but in how fast an idea becomes a finished animation." },
  { word: "Vibrant", line: "Vibrant not just in color, but in sound." },
];

const springTransition = { type: "spring" as const, stiffness: 150, damping: 15 };

type ProofItem = (typeof proof)[number];

function ProofCard({ item }: { item: ProofItem }) {
  return (
    <article className={item.wide ? "md:col-span-2" : ""}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={springTransition}
      >
        <MediaSlot
          label={item.label}
          src={item.src}
          poster={item.image}
          image={item.image}
          alt={item.alt}
          width={1200}
          height={675}
          ratio="16 / 9"
        />
      </motion.div>
      <motion.h3
        className="display-bold mt-5 inline-block text-xl tracking-[0.01em]"
        whileHover={{ scale: 1.05 }}
        transition={springTransition}
      >
        {item.title}
      </motion.h3>
      {item.caseStudyUrl && (
        <motion.a
          href={item.caseStudyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-3 rounded-full border border-current px-3 py-1 text-xs uppercase tracking-caps opacity-70 hover:opacity-100"
          whileHover={{ scale: 1.05 }}
          transition={springTransition}
        >
          View case study
        </motion.a>
      )}
      <motion.p
        className="mt-2 origin-left text-[0.95rem] leading-relaxed text-muted-foreground text-pretty"
        whileHover={{ scale: 1.05 }}
        transition={springTransition}
      >
        {item.lines}
      </motion.p>
    </article>
  );
}

function Index() {
  return (
    <MotionConfig reducedMotion="user">
    <main className="min-h-screen bg-background text-foreground">
      {/* 1. HERO */}
      <section className="mx-auto w-full max-w-6xl px-6 pt-14 pb-16 sm:px-10 sm:pt-16 md:pb-24">
        <header className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <motion.div whileHover={{ scale: 1.05 }} transition={springTransition}>
            <AkLockup size="lg" />
          </motion.div>
          <motion.span
            className="origin-right text-[0.6rem] tracking-caps text-muted-foreground uppercase sm:text-[0.68rem]"
            whileHover={{ scale: 1.05 }}
            transition={springTransition}
          >
            Motion Graphic Designer | Visual Storytelling
          </motion.span>
        </header>

        <div className="reveal mt-10 sm:mt-14">
          <motion.div whileHover={{ scale: 1.05 }} transition={springTransition}>
            <MediaSlot
              label="[VIDEO/REEL FILE — personal reel, autoplay, muted, loop]"
              src={reelHeroVideo.url}
              image={reelHeroPoster.url}
              poster={reelHeroPoster.url}
              alt="Cut-paper collage of bold organic shapes in pink, green, blue and yellow"
              width={1600}
              height={900}
              ratio="16 / 9"
              priority
            />
          </motion.div>
        </div>

        <div className="reveal mt-8 max-w-3xl">
          <motion.p
            className="origin-left text-base leading-relaxed text-muted-foreground sm:text-lg"
            whileHover={{ scale: 1.05 }}
            transition={springTransition}
          >
            A mix of 2D and 3D animation, scored with an original soundtrack — composed by a music studio just for this piece, note for note. It's a small selection of the work I'm proudest of. But it's more than a portfolio: it's a reminder that change is good — that new chapters bring endless new things, and possibility. Rhythm, color, and substance — the way I like to tell every story.
          </motion.p>
        </div>

        <div className="reveal mt-16 max-w-4xl">
          <motion.h1
            className="origin-left text-[2rem] leading-[1.08] tracking-[-0.01em] text-balance sm:mt-20 sm:text-5xl md:text-6xl"
            whileHover={{ scale: 1.05 }}
            transition={springTransition}
          >
            I turn brand and product stories into short animations with rhythm,
            colour, and substance.
          </motion.h1>
        </div>
      </section>

      {/* 2. WHO I AM */}
      <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 md:py-28">
        <motion.div
          className="origin-left"
          whileHover={{ scale: 1.05 }}
          transition={springTransition}
        >
          <h2 className="display-bold inline-block text-3xl tracking-[0.01em] sm:text-4xl">
            Who I am
          </h2>
          <p className="mt-8 max-w-3xl text-xl leading-[1.45] font-normal tracking-[-0.005em] text-pretty sm:text-2xl md:text-3xl">
            Graphic designer with roots in art and illustration, specialized in motion graphics — from brand videos to interactive product animation, with a Master's degree in the same field. My path has taken me through Mexico, the United States, and Germany, each place shaping how I see color, rhythm, and story. Increasingly building with AI-assisted workflows.
            <span className="block text-muted-foreground">
              Currently open to new opportunities, in-house or freelance, with
              teams who care about story as much as motion.
            </span>
          </p>
        </motion.div>
      </section>

      {/* 3. PROOF */}
      <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 md:py-28">
        <motion.h2
          className="display-bold inline-block origin-left text-3xl tracking-[0.01em] sm:text-4xl"
          whileHover={{ scale: 1.05 }}
          transition={springTransition}
        >
          Proof
        </motion.h2>
        <div className="mt-10 grid gap-12 md:grid-cols-2 md:gap-10">
          {proof.map((item) => (
            <ProofCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      {/* 4. HOW I WORK */}
      <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 md:py-28">
        <motion.h2
          className="display-bold inline-block origin-left text-3xl tracking-[0.01em] sm:text-4xl"
          whileHover={{ scale: 1.05 }}
          transition={springTransition}
        >
          How I work
        </motion.h2>
        <div className="mt-10 grid gap-10 border-t border-border pt-10 md:grid-cols-3 md:gap-8">
          {how.map((item) => (
            <div key={item.word}>
              <motion.h3
                className="display-bold inline-block origin-left text-3xl tracking-[0.01em] sm:text-4xl"
                whileHover={{ scale: 1.05 }}
                transition={springTransition}
              >
                {item.word}
              </motion.h3>
              <motion.p
                className="mt-3 max-w-xs origin-left text-[0.95rem] leading-relaxed text-muted-foreground text-pretty"
                whileHover={{ scale: 1.05 }}
                transition={springTransition}
              >
                {item.line}
              </motion.p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CONTACT */}
      <section className="mt-10 py-24 md:py-32" style={{ background: "var(--ink)" }}>
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
          <motion.h2
            className="display-bold max-w-4xl origin-left text-[2rem] leading-[1.08] tracking-[-0.01em] text-balance sm:text-5xl md:text-6xl"
            style={{ color: "var(--background)" }}
            whileHover={{ scale: 1.05 }}
            transition={springTransition}
          >
            Open to new projects and opportunities — freelance or full-time.
          </motion.h2>

          <motion.a
            href="mailto:angelica.klueh@gmail.com"
            className="mt-10 inline-flex origin-left items-center gap-3 border-b pb-1 text-[2.25rem] font-medium transition-opacity hover:opacity-60 sm:text-[2.5rem]"
            style={{
              color: "var(--background)",
              borderColor: "oklch(1 0 0 / 40%)",
            }}
            whileHover={{ scale: 1.05 }}
            transition={springTransition}
          >
            Get in touch
          </motion.a>

          <motion.h3
            className="display-bold mt-14 inline-block origin-left text-3xl tracking-[0.01em] sm:text-4xl"
            style={{ color: "var(--background)" }}
            whileHover={{ scale: 1.05 }}
            transition={springTransition}
          >
            More about my work
          </motion.h3>
          <div
            className="mt-4 flex flex-col gap-3 text-[1.2rem] tracking-caps uppercase sm:text-[1.3rem]"
            style={{ color: "oklch(1 0 0 / 45%)" }}
          >
             <div className="flex flex-wrap gap-x-8 gap-y-2">
               <motion.a href="https://www.linkedin.com/in/angelica-klüh" target="_blank" rel="noopener noreferrer" className="hover:opacity-70" whileHover={{ scale: 1.05 }} transition={springTransition}>LinkedIn</motion.a>
               <motion.a href="https://vimeo.com/user167174522" target="_blank" rel="noopener noreferrer" className="hover:opacity-70" whileHover={{ scale: 1.05 }} transition={springTransition}>Vimeo</motion.a>
               <motion.a href={resumePdf.url} download target="_blank" rel="noopener noreferrer" className="hover:opacity-70" whileHover={{ scale: 1.05 }} transition={springTransition}>Résumé</motion.a>
             </div>
             <motion.a href="https://marketplace.atlassian.com/apps/1230544/spacecraft-theme-for-confluence-cloud-color-your-space?hosting=cloud&tab=overview" target="_blank" rel="noopener noreferrer" className="w-fit hover:opacity-70" whileHover={{ scale: 1.05 }} transition={springTransition}>Product Video Atlassian 1</motion.a>
             <motion.a href="https://marketplace.atlassian.com/apps/1227739/didit-checklists-for-jira?hosting=cloud&tab=overview" target="_blank" rel="noopener noreferrer" className="w-fit hover:opacity-70" whileHover={{ scale: 1.05 }} transition={springTransition}>Product Video Atlassian 2</motion.a>
          </div>

          <div className="mt-16">
            <motion.div className="w-fit" whileHover={{ scale: 1.05 }} transition={springTransition}>
              <AkLockup size="lg" tone="dark" />
            </motion.div>
          </div>
          <motion.p
            className="mt-6 w-fit origin-left text-[0.6rem] tracking-caps uppercase"
            style={{ color: "oklch(1 0 0 / 45%)" }}
            whileHover={{ scale: 1.05 }}
            transition={springTransition}
          >
            Motion Graphic Designer | Visual Storytelling
          </motion.p>
        </div>
      </section>
    </main>
    </MotionConfig>
  );
}
