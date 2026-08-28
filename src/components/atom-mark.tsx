export function AtomMark({ size = 22, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="9 9 46 46"
      className={className}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M 52.65 43.21 L 38.67 54.53 L 20.79 52.65 L 9.47 38.67 L 11.35 20.79 L 25.33 9.47 L 43.21 11.35 L 54.53 25.33 Z M 43.70 44.33 L 31.55 48.99 L 19.67 43.70 L 15.01 31.55 L 20.30 19.67 L 32.45 15.01 L 44.33 20.30 L 48.99 32.45 Z"
        fill="currentColor"
      />
      <path
        d="M 36.52 41.48 L 28.50 41.90 L 22.52 36.52 L 22.10 28.50 L 27.48 22.52 L 35.50 22.10 L 41.48 27.48 L 41.90 35.50 Z"
        fill="currentColor"
      />
    </svg>
  );
}
