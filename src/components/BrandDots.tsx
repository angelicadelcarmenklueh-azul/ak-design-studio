/**
 * The two original hand-drawn brand dots (pink + green), vectorised from the
 * source artwork — irregular organic scraps, not perfect circles.
 */
const PINK_D = `M5224 6744 c-17 -8 -41 -32 -53 -54 -12 -21 -74 -92 -139 -157 -157
-158 -178 -184 -186 -229 -4 -22 -20 -55 -36 -76 -16 -20 -39 -66 -51 -102
-21 -63 -21 -68 -5 -108 9 -24 31 -60 50 -81 29 -33 98 -142 135 -214 10 -19
20 -23 57 -23 29 0 56 -7 73 -19 44 -31 128 -61 172 -61 29 0 50 -7 71 -25 46
-39 96 -33 161 21 18 16 47 25 87 30 48 5 70 14 103 40 23 19 49 34 57 34 26
1 99 38 125 64 36 36 33 77 -9 123 -24 27 -39 58 -51 105 -15 63 -15 72 0 137
16 63 24 76 81 136 70 73 79 103 45 146 -10 13 -25 38 -34 54 -8 17 -45 61
-82 100 -36 38 -76 86 -87 107 -35 62 -61 68 -270 68 -143 0 -190 -4 -214 -16z`;

const GREEN_D = `M6798 6988 c-9 -7 -22 -33 -28 -56 -8 -32 -29 -62 -79 -114 -44 -45
-73 -85 -80 -109 -7 -22 -22 -46 -35 -55 -47 -30 -51 -59 -43 -298 6 -161 11
-171 81 -167 43 2 47 0 72 -39 26 -38 29 -40 80 -40 45 0 56 -4 69 -24 26 -39
60 -47 146 -37 41 6 88 15 103 21 15 5 48 10 74 10 50 0 122 40 122 68 0 8
-13 30 -30 49 -23 26 -30 43 -30 76 0 78 18 115 90 190 58 60 71 79 76 115 9
61 -1 108 -32 149 -15 20 -37 63 -48 97 -21 60 -22 61 -76 80 -30 10 -91 21
-135 24 -48 3 -94 12 -116 23 -28 14 -143 49 -161 49 -2 0 -11 -6 -20 -12z`;

type DotProps = { size: string; className?: string; style?: React.CSSProperties };

export function PinkDot({ size, className = "", style }: DotProps) {
  return (
    <svg
      aria-hidden
      viewBox="472 52 123 123"
      className={className}
      style={{ width: size, height: size, display: "block", ...style }}
    >
      <g transform="translate(0,730) scale(0.1,-0.1)" fill="var(--dot-pink)">
        <path d={PINK_D} />
      </g>
    </svg>
  );
}

export function GreenDot({ size, className = "", style }: DotProps) {
  return (
    <svg
      aria-hidden
      viewBox="650 28 100 100"
      className={className}
      style={{ width: size, height: size, display: "block", ...style }}
    >
      <g transform="translate(0,730) scale(0.1,-0.1)" fill="var(--dot-green)">
        <path d={GREEN_D} />
      </g>
    </svg>
  );
}