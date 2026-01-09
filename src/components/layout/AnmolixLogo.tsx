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
      aria-hidden={ariaHidden ? true : undefined}
      aria-label={ariaHidden ? undefined : title}
      width={width}
      height={height}
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      {ariaHidden ? null : <title>{title}</title>}
      <path d="M63.3,169.5c-2.3,1.3-5.3,2.2-9.2,2.2c-12.3,0-21.5-8.5-21.5-22.3c0-13.2,9.2-22,21.5-22c4,0,7,1,9.2,2.2V169.5z M100.3,171.7V127.3c0-10-6.2-16.3-16.2-16.3c-9.8,0-16.3,6.3-16.3,16.3v44.5c0,10,6.5,16.3,16.3,16.3C94,188,100.3,181.7,100.3,171.7z M100.3,153.8v-10.7c-2.7-1.3-6-2.2-9.8-2.2c-11.3,0-19,7.5-19,19.3c0,11.8,7.7,19.3,19,19.3c3.8,0,7.2-0.8,9.8-2.2v-10.7c-2.3,1-5,1.7-8,1.7c-5.2,0-8.2-3-8.2-8.5c0-5.5,3-8.5,8.2-8.5C95.3,152.2,98,152.8,100.3,153.8z M167.9,127.3v-15.5h-16.3v66.3h16.3v-27.2c0-10.7-5.5-16.8-14.3-16.8h-1V127.3H167.9z M226.9,111.8h-16.3v66.3h16.3V111.8z M267.3,149.3c0-14.8-10.3-25.2-25.2-25.2c-14.8,0-25.2,10.3-25.2,25.2c0,14.8,10.3,25.2,25.2,25.2C257,174.5,267.3,164.2,267.3,149.3z M251,149.3c0,6.5-4.2,10.7-9.8,10.7c-5.7,0-9.8-4.2-9.8-10.7c0-6.5,4.2-10.7,9.8-10.7C246.8,138.7,251,142.8,251,149.3z M315.8,111.8h-16.3v66.3h16.3V111.8z M353.9,165.2l-3-6.3c-4.2,3.3-9.5,5.2-15.2,5.2c-11.7,0-20.2-8.8-20.2-21.7c0-12.8,8.5-21.7,20.2-21.7c5.7,0,11,1.8,15.2,5.2l3-6.3c-5.2-4.2-12.2-6.5-18.2-6.5c-17,0-31.5,12.8-31.5,28s14.5,28,31.5,28C341.7,171.7,348.7,169.3,353.9,165.2z M416.5,111.8l-15.3,43.2L385.8,111.8h-17.2l24.8,63.5h16.3l24.8-63.5H416.5z" />
    </svg>
  );
}