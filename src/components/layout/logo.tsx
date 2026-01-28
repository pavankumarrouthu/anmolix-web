import Link from 'next/link';
import AnmolixLogo from './AnmolixLogo';

export function Logo({ width = 160, height = 22 }) {
    return (
        <Link href="/" aria-label="anmolix Home">
           <AnmolixLogo
                width={width}
                height={height}
            />
        </Link>
    );
}
