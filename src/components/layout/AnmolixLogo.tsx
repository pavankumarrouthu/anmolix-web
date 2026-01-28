import Image from 'next/image';

type Props = {
  width?: number | string;
  height?: number | string;
  className?: string;
};

export default function AnmolixLogo({
  width = 140,
  height = 19,
  className,
}: Props) {
  return (
    <Image
      src="/anmolix-logo.png"
      alt="Anmolix Logo"
      width={Number(width)}
      height={Number(height)}
      className={className}
      priority
    />
  );
}
