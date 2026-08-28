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
            <g transform="translate(32 32) scale(0.8) translate(-32 -32)">
              <path
                fillRule="evenodd"
                d="M 52.65 43.21 L 38.67 54.53 L 20.79 52.65 L 9.47 38.67 L 11.35 20.79 L 25.33 9.47 L 43.21 11.35 L 54.53 25.33 Z M 43.70 44.33 L 31.55 48.99 L 19.67 43.70 L 15.01 31.55 L 20.30 19.67 L 32.45 15.01 L 44.33 20.30 L 48.99 32.45 Z"
                fill="#0A0A0A"
              />
              <path
                d="M 36.52 41.48 L 28.50 41.90 L 22.52 36.52 L 22.10 28.50 L 27.48 22.52 L 35.50 22.10 L 41.48 27.48 L 41.90 35.50 Z"
                fill="#0A0A0A"
              />
            </g>
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
