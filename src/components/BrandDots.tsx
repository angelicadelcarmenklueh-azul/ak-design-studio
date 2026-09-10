/**
 * The two brand dots (pink + blue), hand-drawn in Illustrator.
 */
const PINK_D = `M69.77,142.46c21.26,2.38,39.21-5.36,51.87-10.75,3.97-1.69,6.64.53,9.56-8.25,4.67-14.01,17.57-50.49,12.06-63.37-12.36-28.85-17.21-33.24-29.09-53.82,0,0-57.13-7.89-60.88-5.98-7.02,3.58-15.73,11.81-23.42,23.51-2.71,4.11-8.68,4.83-9.45,18.9-1.48,27.18,12.81,34.55,6.2,47.1C21,100.47.95,117.26.05,122.83c-1.26,7.77,22.5,14.35,69.73,19.63Z`;

const GREEN_D = `M48.27,162.11c-20.83-4.86-35.17-18.16-45.29-27.47-3.18-2.92-5.93-64.43,3.57-74.72C27.83,36.85,43.04,15.42,61.12,0c0,0,47.31,30.58,50.21,33.64,5.42,5.72,10.87,16.39,14.21,29.99,1.17,4.78,6.56,10.85,2.58,24.37-7.69,26.11-23.62,24.88-21.58,38.91,1.73,11.92,15.01,34.46,14,40-1.41,7.75-26,6-72.28-4.81Z`;

type DotProps = { size: string; className?: string; style?: React.CSSProperties };

export function PinkDot({ size, className = "", style }: DotProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 144.61 142.9"
      className={className}
      style={{ width: size, height: size, display: "block", ...style }}
    >
      <path d={PINK_D} fill="var(--dot-pink)" />
    </svg>
  );
}

export function GreenDot({ size, className = "", style }: DotProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 129.57 171.68"
      className={className}
      style={{ width: size, height: size, display: "block", ...style }}
    >
      <path d={GREEN_D} fill="var(--dot-green)" />
    </svg>
  );
}
