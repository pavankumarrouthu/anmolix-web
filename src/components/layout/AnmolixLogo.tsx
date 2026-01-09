// AnmolixLogo.tsx
import React from "react";

type Props = {
  width?: number | string;
  height?: number | string;
  className?: string;
  title?: string;
  ariaHidden?: boolean;
};

/**
 * AnmolixLogo - responsive SVG logo component.
 * Renders the name "anmolix" as text.
 *
 * Note: for best visual match install/import a geometric sans font like "Poppins" or "Inter".
 */
export default function AnmolixLogo({
  width = 220,
  height,
  className,
  title = "anmolix",
  ariaHidden = false,
}: Props) {
  // ViewBox is sized to fit the text.
  const viewBoxWidth = 860;
  const viewBoxHeight = 240;

  return (
    <svg
      role={ariaHidden ? undefined : "img"}
      aria-hidden={ariaHidden ? 'true' : undefined}
      aria-label={ariaHidden ? undefined : title}
      width={width}
      height={height}
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      {ariaHidden ? null : <title>{title}</title>}
      <text
        x="50%"
        y="50%"
        dominantBaseline="central"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="180"
        fontWeight="bold"
        className="font-space-grotesk"
      >
        anmolix
      </text>
    </svg>
  );
}
