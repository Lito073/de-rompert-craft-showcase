import { cn } from "@/lib/utils";

type WaveTone = "background" | "muted" | "primary" | "secondary" | "accent" | "card";
type WaveVariant = "gentle" | "rolling" | "footer";

interface SectionWaveProps {
  className?: string;
  tone?: WaveTone;
  variant?: WaveVariant;
  position?: "top" | "bottom";
  flip?: boolean;
}

const toneFill: Record<WaveTone, string> = {
  background: "hsl(var(--background))",
  muted: "hsl(var(--muted))",
  primary: "hsl(var(--primary))",
  secondary: "hsl(var(--secondary))",
  accent: "hsl(var(--accent))",
  card: "hsl(var(--card))",
};

const wavePaths: Record<WaveVariant, string> = {
  gentle:
    "M0 0L0 17L60 25.8C120 34.7 240 52.3 360 52.3C480 52.3 600 34.7 720 25.8C840 17 960 17 1080 21.5C1200 26 1320 34.7 1380 38.8L1440 43V0Z",
  rolling:
    "M0 0L0 43C240 17 480 17 720 43C960 69 1200 69 1440 43L1440 0Z",
  footer:
    "M0 0L0 64C160 100 320 100 480 64C640 28 800 28 960 64C1120 100 1280 100 1440 64L1440 0Z",
};

const SectionWave = ({
  className,
  tone = "background",
  variant = "gentle",
  position = "top",
  flip = false,
}: SectionWaveProps) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className={cn(
        "pointer-events-none absolute left-0 z-0 h-12 w-full md:h-16 lg:h-20",
        position === "top" ? "top-0" : "bottom-0",
        position === "bottom" && "rotate-180",
        flip && "-scale-x-100",
        className,
      )}
      preserveAspectRatio="none"
      viewBox="0 0 1440 120"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={wavePaths[variant]} fill={toneFill[tone]} />
    </svg>
  );
};

export default SectionWave;
