import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="Anmolix Home">
      <span className="text-3xl font-bold text-primary tracking-tighter">
        anmolix
      </span>
    </Link>
  );
}
