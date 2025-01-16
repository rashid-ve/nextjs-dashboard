import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Next Dashboard",
    default: "Next Dashboard",
  },
  description: "Next Dashboard, built with App Router.",
  metadataBase: new URL(
    "https://nextjs-dashboard-aoswb04v3-rashids-projects-5b4a0554.vercel.app/"
  ),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
