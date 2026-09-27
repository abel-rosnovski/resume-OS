import { JetBrains_Mono, Archivo_Black } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

export const metadata = {
  title: "Sourav B — Resume OS",
  description: "Interactive resume by Sourav B",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${archivoBlack.variable}`}>
      <body className="font-mono bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}