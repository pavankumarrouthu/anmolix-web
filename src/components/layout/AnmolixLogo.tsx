// AnmolixLogo.tsx
import React from "react";

type Props = {
  width?: number | string;      // e.g. 120 or "100%"
  height?: number | string;     // optional; if omitted, scales with width
  color?: string;               // primary color of the logo text
  className?: string;
  title?: string;               // accessible title
  ariaHidden?: boolean;         // set true if decorative
};

/**
 * AnmolixLogo - responsive SVG logo component.
 * Features a stylized "a" in a square followed by the rest of the name.
 *
 * Note: for best visual match install/import a geometric sans font like "Poppins" or "Inter".
 */
export default function AnmolixLogo({
  width = 220,
  height,
  color,
  className,
  title = "Anmolix",
  ariaHidden = false,
}: Props) {
  // If height isn't provided, height will scale with viewBox aspect ratio.
  // ViewBox is slightly wider to accommodate the icon and text.
  const viewBoxWidth = 1100;
  const viewBoxHeight = 240;

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

      {/* Logo Icon: Square with 'a' */}
      <g>
        {/* The square background */}
        <rect x="0" y="40" width="200" height="200" rx="40" fill="currentColor" />
        
        {/* The letter 'a' inside the square. Positioned carefully. */}
        <text
          x="100"
          y="180" // Adjusted for vertical centering
          fill="white"
          fontFamily="'Poppins', 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial"
          fontWeight={700}
          fontSize={160}
          letterSpacing={-6}
          dominantBaseline="middle"
          textAnchor="middle"
        >
          a
        </text>
      </g>
      
      {/* Text part of the logo: "nmolix" */}
      <text
        x="240" // Positioned to the right of the icon
        y="170"
        fill="currentColor"
        fontFamily="'Poppins', 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial"
        fontWeight={700}
        fontSize={160}
        letterSpacing={-6}
        dominantBaseline="alphabetic"
        textAnchor="start"
      >
        nmolix
      </text>
    </svg>
  );
}
