// AnmolixLogo.tsx
import React from "react";

type Props = {
  width?: number | string;      // e.g. 120 or "100%"
  height?: number | string;     // optional; if omitted, scales with width
  color?: string;               // primary color of the logo
  className?: string;
  title?: string;               // accessible title
  ariaHidden?: boolean;         // set true if decorative
};

/**
 * AnmolixLogo - responsive SVG logo component.
 * Uses an inline <text> element so it's easy to style.
 *
 * Note: for best visual match install/import a geometric sans font like "Poppins" or "Inter".
 * Example (index.html or global CSS):
 *   <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&display=swap" rel="stylesheet">
 *
 * If you prefer an exact pixel match, replace this SVG with vector paths exported from your design tool.
 */
export default function AnmolixLogo({
  width = 220,
  height,
  color,
  className,
  title = "Anmolix",
  ariaHidden = false,
}: Props) {
  // If height isn't provided, height will scale with viewBox aspect ratio (we use 4:1).
  const viewBoxWidth = 1000;
  const viewBoxHeight = 240; // wide, short rectangle to match text layout

  return (
    <svg
      role={ariaHidden ? undefined : "img"}
      aria-hidden={ariaHidden ? true : undefined}
      aria-label={ariaHidden ? undefined : title}
      width={width}
      height={height}
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {ariaHidden ? null : <title>{title}</title>}

      {/* Optional background rectangle for alignment/testing (comment out) */}
      {/* <rect width="100%" height="100%" fill="transparent" /> */}

      {/* Text - adjust font-family/weight for closer match */}
      <text
        x="50"
        y="170"
        fill={color || "currentColor"}
        fontFamily="'Poppins', 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial"
        fontWeight={700}
        fontSize={160}
        letterSpacing={-6}
        // Use dominantBaseline & textAnchor for consistent vertical alignment
        dominantBaseline="alphabetic"
        textAnchor="start"
      >
        anmolix
      </text>
    </svg>
  );
}
