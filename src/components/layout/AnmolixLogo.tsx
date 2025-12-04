// AnmolixLogo.tsx
import React from "react";

type Props = {
  width?: number | string;
  height?: number | string;
  color?: string;
  className?: string;
  title?: string;
  ariaHidden?: boolean;
};

/**
 * AnmolixLogo - responsive SVG logo component.
 * Renders the name "Anmolix" as text.
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
  // ViewBox is sized to fit the text.
  const viewBoxWidth = 860;
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
      
      {/* Text part of the logo: "Anmolix" */}
      <text
        x="0"
        y="170"
        fill="currentColor"
        fontFamily="'Poppins', 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial"
        fontWeight={700}
        fontSize={160}
        letterSpacing={-6}
        dominantBaseline="alphabetic"
        textAnchor="start"
      >
        Anmolix
      </text>
    </svg>
  );
}
