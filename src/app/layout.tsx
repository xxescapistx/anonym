import type { Metadata } from "next";
import "./globals.css";
import '@mantine/core/styles.css';
import MainLayout from "@/components/layout/main-layout";


export const metadata: Metadata = {
  title: "ANONYM - Mo mesaz",
  description: "Ene ban ti mesaz anonym",
  viewport: 'width=device-width, initial-scale=1.0, user-scalable=no',
};

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
