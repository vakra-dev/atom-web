import type { ReactNode } from "react";

interface PillProps {
  children: ReactNode;
  color?: string;
  className?: string;
}

export function Pill({ children, color = "var(--ink-3)", className }: PillProps) {
  return (
    <span
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        fontFamily: "var(--font-jetbrains, var(--font-mono, monospace))",
        fontSize: "10.5px",
        fontWeight: 500,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        padding: "3px 8px",
        borderRadius: 4,
        border: "1px solid var(--line)",
        background: "var(--surface)",
        color,
      }}
    >
      {children}
    </span>
  );
}
