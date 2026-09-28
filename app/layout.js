import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata = {
  metadataBase: new URL("https://resume-os-nine.vercel.app"),
  title: "Sourav B — Interactive Resume",
  description:
    "A generalist across growth, data, automation and product. Explore what I've built, from an AI content agent to a 60% CAC reduction at Elevato.",
  openGraph: {
    title: "Sourav B — Interactive Resume",
    description:
      "A generalist across growth, data, automation and product. Explore what I've built.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body className="font-mono bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}