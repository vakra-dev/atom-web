import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "atom: pull requests, where your team already is";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0A0A0A",
          color: "#FFFFFF",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="56" height="56" viewBox="0 0 64 64">
            <rect width="64" height="64" rx="14" fill="#FFFFFF" />
            <g fill="none" stroke="#0A0A0A" strokeWidth="3">
              <ellipse cx="32" cy="32" rx="20" ry="9" transform="rotate(-30 32 32)" />
              <ellipse cx="32" cy="32" rx="20" ry="9" transform="rotate(30 32 32)" />
            </g>
            <circle cx="32" cy="32" r="5" fill="#0A0A0A" />
          </svg>
          <div style={{ fontSize: 40, fontWeight: 700 }}>atom</div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.1, letterSpacing: -2 }}>
            pull requests, where your team already is.
          </div>
          <div style={{ fontSize: 30, color: "#A3A3A3", lineHeight: 1.4 }}>
            github to slack: living pr threads, reminders, and standups.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 26,
            color: "#A3A3A3",
          }}
        >
          <div>useatom.dev</div>
          <div style={{ fontFamily: "monospace" }}>$ npx @useatom/cli init</div>
        </div>
      </div>
    ),
    size
  );
}
