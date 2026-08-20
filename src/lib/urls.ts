const isProd = process.env.NODE_ENV === "production";

export const urls = {
  home: "/",
  app: process.env.NEXT_PUBLIC_APP_URL || (isProd ? "https://app.useatom.dev" : "http://localhost:8501"),
};
