"use client";

import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

const DEFAULT_ACCENT = "#84C578";
const DEFAULT_ACCENT_GLOW = "#D9F4CD";
const DEFAULT_ACCENT_INK = "#0d2412";
const DEFAULT_DENSITY = 1;

export default function TurnUpLandingPage() {
  useEffect(() => {
    document.documentElement.style.setProperty("--accent", DEFAULT_ACCENT);
    document.documentElement.style.setProperty("--accent-glow", DEFAULT_ACCENT_GLOW);
    document.documentElement.style.setProperty(
      "--accent-ink",
      DEFAULT_ACCENT_INK,
    );
    document.documentElement.style.setProperty(
      "--density",
      String(DEFAULT_DENSITY),
    );
  }, []);

  return (
    <div className="turnup-page">
      <TurnUpHero />
    </div>
  );
}

function TurnUpHero() {
  return (
    <section
      id="waitlist"
      style={{
        position: "relative",
        overflowX: "hidden",
        background: "#000",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <AuroraField />
      <NoiseTexture />
      <HeroNav />
      <div
        style={{
          position: "relative",
          zIndex: 2,
          minHeight: "100dvh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding:
            "calc(48px * var(--density)) 28px calc(72px * var(--density))",
          gap: "clamp(16px, 2.4vw, 26px)",
        }}
      >
        <Reveal>
          <Image
            src="/logo.png"
            alt="TurnUp"
            width={250}
            height={250}
            style={{ borderRadius: 20 }}
          />
        </Reveal>

        <Reveal delay={0.05}>
          <h1
            style={{
              fontFamily: '"Bricolage Grotesque", var(--display)',
              fontSize: "clamp(28px, 4.2vw, 50px)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.16,
              margin: 0,
              maxWidth: 640,
            }}
          >
            the feed that finds
            <br />
            <span
              style={{
                display: "inline-block",
                background:
                  "linear-gradient(180deg, var(--accent-glow) 0%, var(--accent) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              what&apos;s actually happening
            </span>
            <br />
            on campus
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p
            style={{
              fontSize: 16,
              color: "#cfcdc6",
              lineHeight: 1.55,
              maxWidth: 480,
              margin: 0,
            }}
          >
            TurnUp turns flyers, posts, and group chats into one live feed —
            so the good stuff finds you first.
          </p>
        </Reveal>
      </div>

      <PhoneMockup />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          justifyContent: "center",
          padding: "0 28px calc(72px * var(--density))",
        }}
      >
        <Reveal delay={0.18}>
          <ContactPill />
        </Reveal>
      </div>
    </section>
  );
}

function HeroNav() {
  return (
    <nav
      style={{
        position: "relative",
        zIndex: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
        flexWrap: "wrap",
        padding: "28px clamp(20px, 4vw, 56px) 0",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.15 }}>
        <span
          style={{
            fontFamily: '"Bricolage Grotesque", var(--display)',
            fontWeight: 700,
            fontSize: 22,
            letterSpacing: "-0.02em",
            color: "#fff",
          }}
        >
          TurnUp
        </span>
        <span
          style={{
            fontFamily: "var(--mono)",
            fontSize: 11,
            letterSpacing: "0.08em",
            color: "#9b988f",
          }}
        >
          by LOJJ Labs
        </span>
      </div>
      <NavWaitlistForm />
    </nav>
  );
}

function NavWaitlistForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (email) {
          setSubmitted(true);
        }
      }}
      className="tu-beam-btn"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 6,
        background: "var(--surface)",
        border: "1px solid rgba(255,255,255,0.12)",
        borderRadius: 99,
        padding: "5px 5px 5px 16px",
        boxShadow: "var(--surface-inset)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <input
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="you@school.edu"
        aria-label="School email"
        style={{
          border: "none",
          outline: "none",
          background: "transparent",
          fontFamily: "var(--display)",
          fontSize: 13,
          color: "#fff",
          width: "clamp(120px, 16vw, 180px)",
          padding: "8px 0",
        }}
      />
      <button
        type="submit"
        className="tu-glow-btn"
        style={{
          padding: "9px 18px",
          background: submitted
            ? "rgba(255,255,255,0.1)"
            : "linear-gradient(180deg, color-mix(in oklch, var(--accent) 80%, white 26%) 0%, var(--accent) 58%, color-mix(in oklch, var(--accent) 92%, black 12%) 100%)",
          color: submitted ? "#d8d6d0" : "var(--accent-ink)",
          border: "none",
          borderRadius: 99,
          boxShadow: submitted ? "var(--surface-inset)" : "var(--button-sheen)",
          fontFamily: "var(--display)",
          fontWeight: 700,
          fontSize: 12,
          cursor: "pointer",
          whiteSpace: "nowrap",
        }}
      >
        {submitted ? "you're in ✓" : "join waitlist"}
      </button>
    </form>
  );
}

function ContactPill() {
  return (
    <a
      href="mailto:hello@turnup.site"
      className="tu-glass-btn"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        padding: "16px 38px",
        borderRadius: 99,
        fontFamily: "var(--display)",
        fontSize: 15,
        fontWeight: 600,
        color: "#f4f3ef",
        background: "var(--surface)",
        border: "1px solid rgba(217,244,205,0.16)",
        boxShadow: `
          var(--surface-inset),
          0 0 0 1px color-mix(in oklch, var(--accent) 20%, transparent),
          0 30px 70px -32px color-mix(in oklch, var(--accent) 55%, transparent)
        `,
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
      }}
    >
      Contact us
    </a>
  );
}

function PhoneMockup() {
  return (
    <div
      style={{
        position: "relative",
        zIndex: 1,
        width: "clamp(280px, 36vw, 460px)",
        aspectRatio: "446 / 917",
        margin: "0 auto",
        marginBottom: "clamp(56px, 9vw, 120px)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: "-22% -34%",
          background: `
            radial-gradient(ellipse 60% 50% at 50% 60%, color-mix(in oklch, var(--accent-glow) 50%, transparent) 0%, transparent 65%),
            radial-gradient(ellipse 55% 48% at 42% 75%, color-mix(in oklch, var(--accent) 42%, transparent) 0%, transparent 62%)
          `,
          filter: "blur(46px)",
          opacity: 0.85,
          animation: "turnup-glow-pulse 7s ease-in-out infinite",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          zIndex: 1,
          filter: "drop-shadow(0 50px 80px rgba(0,0,0,0.55))",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "9% 6.8% 3.6% 5.6%",
            borderRadius: "16px",
            overflow: "hidden",
            background: "#f4f3ef",
            zIndex: 1,
          }}
        />
        <Image
          src="/Model=iPhone 17, Color=Lavender, Orientation=Portrait.png"
          alt=""
          fill
          sizes="460px"
          style={{ objectFit: "contain", zIndex: 2, pointerEvents: "none" }}
          priority
        />
      </div>
    </div>
  );
}

function AuroraField() {
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "100dvh",
          pointerEvents: "none",
          background: `
            linear-gradient(to bottom, transparent 0%, transparent 68%, #000 100%),
            radial-gradient(ellipse 70% 55% at 50% 78%, color-mix(in oklch, var(--accent-glow) 30%, transparent) 0%, transparent 62%),
            radial-gradient(ellipse 65% 50% at 32% 88%, color-mix(in oklch, var(--accent) 34%, transparent) 0%, transparent 60%),
            radial-gradient(ellipse 55% 45% at 72% 92%, color-mix(in oklch, var(--accent-glow) 22%, transparent) 0%, transparent 58%)
          `,
          filter: "blur(4px)",
          animation: "turnup-aurora-drift 24s ease-in-out infinite alternate",
          willChange: "transform",
          transform: "translateZ(0)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse 50% 42% at 50% 56%, color-mix(in oklch, var(--accent) 14%, transparent) 0%, transparent 70%)",
        }}
      />
    </>
  );
}

function NoiseTexture() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        opacity: 0.05,
        mixBlendMode: "overlay",
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.7'/></svg>\")",
      }}
    />
  );
}

function Reveal({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 700ms cubic-bezier(.2,.7,.2,1) ${delay}s, transform 800ms cubic-bezier(.2,.7,.2,1) ${delay}s`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
