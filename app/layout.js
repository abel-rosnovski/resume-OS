import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata = {
  title: "Sourav B — Resume OS",
  description: "Interactive resume by Sourav B",
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