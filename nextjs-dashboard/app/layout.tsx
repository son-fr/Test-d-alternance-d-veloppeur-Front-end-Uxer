
import type { Metadata } from "next";
import layout from "@/src/ui/first_page.module.scss";

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
      className={`${layout["layout_html"]}`}
    >
      <body className={`${layout["layout_body"]}`}>{children}</body>
    </html>
  );
}
