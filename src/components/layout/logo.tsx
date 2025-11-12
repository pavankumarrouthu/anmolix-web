import Link from 'next/link';
import Image from 'next/image';

export function Logo({ width = 160, height = 40 }) {
    return (
        <Link href="/" aria-label="Anmolix Home">
           <Image
                src="/anmolix-logo.png"
                alt="Anmolix Logo"
                width={width}
                height={height}
                priority
            />
        </Link>
    );
}