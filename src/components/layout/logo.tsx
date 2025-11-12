import Link from 'next/link';

export function Logo({ width = 160, height = 50 }) {
    return (
        <Link href="/" aria-label="Anmolix Home">
            <svg
                width={width}
                height={height}
                viewBox="0 0 600 160"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Anmolix logo"
                role="img"
            >
                <rect width="600" height="160" fill="transparent" />
                <g transform="translate(10,28)">
                    <text x="0" y="100" fontFamily="Poppins, sans-serif"
                        fontWeight="700" fontSize="120" fill="hsl(var(--foreground))">anmolix</text>
                </g>
            </svg>
        </Link>
    );
}
