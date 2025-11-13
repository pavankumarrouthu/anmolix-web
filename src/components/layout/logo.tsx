import Link from 'next/link';
import AnmolixLogo from './AnmolixLogo';

export function Logo({ width = 160, height = 40 }) {
    return (
        <Link href="/" aria-label="Anmolix Home" className="text-primary hover:text-primary/90 transition-colors">
           <AnmolixLogo
                width={width}
                height={height}
            />
        </Link>
    );
}
