"use client";

import { useState, type ReactNode } from "react";

interface TermProps {
  label?: string;
  children: ReactNode;
  copyText?: string;
}

export function Term({ label, children, copyText }: TermProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!copyText) return;
    navigator.clipboard.writeText(copyText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{
      background: "#16141c",
      border: "1px solid #2a2630",
      borderRadius: 10,
      fontFamily: "var(--font-jetbrains, var(--font-mono, monospace))",
      fontSize: "12.5px",
      boxShadow: "0 14px 40px -20px rgba(20, 16, 30, 0.45)",
      overflow: "hidden",
    }}>
      {/* Header */}
      <div style={{
        background: "#1c1924",
        borderBottom: "1px solid #2a2630",
        padding: "9px 14px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <div style={{ display: "flex", gap: 6 }}>
          <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#403a4f" }} />
          <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#403a4f" }} />
          <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#403a4f" }} />
        </div>
        {label && (
          <span style={{
            fontFamily: "inherit",
            fontSize: "10.5px",
            letterSpacing: "0.16em",
            textTransform: "uppercase" as const,
            color: "#7d7689",
          }}>
            {label}
          </span>
        )}
        {copyText && (
          <button
            onClick={handleCopy}
            style={{
              background: "none",
              border: "none",
              color: "#7d7689",
              fontSize: "10.5px",
              fontFamily: "inherit",
              cursor: "pointer",
              letterSpacing: "0.06em",
            }}
          >
            {copied ? "copied" : "copy"}
          </button>
        )}
      </div>
      {/* Body */}
      <div style={{
        padding: "16px 18px",
        whiteSpace: "pre",
        lineHeight: 1.7,
        overflowX: "auto",
        color: "#ffffff",
      }}>
        {children}
      </div>
    </div>
  );
}

/** Text color helpers for terminal content */
export function TC({ c, children }: { c: "prompt" | "cmd" | "flag" | "str" | "cmt" | "ok" | "warn" | "url" | "dim"; children: ReactNode }) {
  const colors: Record<string, string> = {
    prompt: "#9c97a6",
    cmd: "#ffffff",
    flag: "#a298d4",
    str: "#a8c98a",
    cmt: "#5d5868",
    ok: "#7fb98c",
    warn: "#d4a574",
    url: "#9b95d8",
    dim: "#7d7689",
  };

  const style: React.CSSProperties = {
    color: colors[c] || "#ffffff",
    fontWeight: c === "cmd" ? 500 : undefined,
    fontStyle: c === "cmt" ? "italic" : undefined,
    textDecoration: c === "url" ? "underline" : undefined,
    textUnderlineOffset: c === "url" ? "3px" : undefined,
  };

  return <span style={style}>{children}</span>;
}
