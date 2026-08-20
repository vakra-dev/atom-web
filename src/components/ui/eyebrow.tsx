import type { ReactNode } from "react";

interface EyebrowProps {
  children: ReactNode;
  color?: string;
  className?: string;
}

export function Eyebrow({ children, color, className }: EyebrowProps) {
  return (
    <p
      className={`eyebrow ${className || ""}`}
      style={color ? { color } : undefined}
    >
      {children}
    </p>
  );
}
