import Link from 'next/link';
import AnmolixLogo from './AnmolixLogo';

export function Logo() {
    return (
        <Link href="/" aria-label="anmolix Home">
           <AnmolixLogo />
        </Link>
    );
}
