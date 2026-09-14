
import type { Metadata } from "next";
import "@/src/styles/first_page.css";

export const metadata: Metadata = {
  title: "Button Uxer",
  description: "Generated 4 button who used a ButtonComponent",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
