import localFont from "next/font/local";
import "lenis/dist/lenis.css";
import "./globals.css";
import { person } from "../content/resume";

// Archivo variable font with weight (100–900) and width (62–125%) axes, self-hosted.
const archivo = localFont({
  src: "./fonts/Archivo.woff2",
  weight: "100 900",
  style: "normal",
  display: "swap",
  variable: "--font-archivo",
  declarations: [{ prop: "font-stretch", value: "62% 125%" }],
});

const description =
  "I build growth engines from zero: −60% CAC in month one and 3× sales in a quarter at Elevato. Open to early-stage growth roles.";

export const metadata = {
  metadataBase: new URL("https://resume-os-nine.vercel.app"),
  title: `${person.name} — Growth`,
  description,
  openGraph: {
    title: `${person.name} — Growth`,
    description,
    type: "website",
  },
  twitter: { card: "summary_large_image", title: `${person.name} — Growth`, description },
};

export const viewport = {
  themeColor: "#fafaf8",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={archivo.variable}>
      <body>{children}</body>
    </html>
  );
}
