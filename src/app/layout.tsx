import type { Metadata, Viewport } from "next";
import "./globals.css";
import '@mantine/core/styles.css';
import MainLayout from "@/components/layout/main-layout";


export const metadata: Metadata = {
  title: "ANONYM - Mo mesaz",
  description: "Ene ban ti mesaz anonym",
};

export const viewport: Viewport = {
  width: 1,
  initialScale: 1,
  userScalable: false
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MainLayout>
        {children}
        </MainLayout>
      </body>
    </html>
  );
}
