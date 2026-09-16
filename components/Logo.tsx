import Image from "next/image";

/** Open Ring mark + optional wordmark — craft amber identity. */
export default function Logo({
  size = 22,
  withWordmark = true,
  className = "",
}: {
  size?: number;
  withWordmark?: boolean;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      <Image
        src="/osclub-mark.png"
        alt=""
        width={size}
        height={size}
        className="shrink-0"
        priority
      />
      {withWordmark && (
        <span className="text-[13px] font-semibold tracking-tight text-foreground">
          OSClub
        </span>
      )}
    </span>
  );
}

/** Crisp inline SVG fallback / favicon-style mark when image unavailable. */
export function OpenRingSvg({
  size = 20,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden
      className={className}
    >
      {/* Open ring — gap at ~1–2 o'clock */}
      <path
        d="M26.2 8.4A11.5 11.5 0 1 1 23.8 6.2"
        stroke="#c45c26"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      {/* Workshop stem */}
      <path
        d="M16 11.5v9.5M16 14.5c-1.6-.9-3.2-.6-4.2.4"
        stroke="#c45c26"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
