import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IAtopiamx",
  description: "Proyecto escolar de la materia de Matemáticas Discretas",
  icons: "/mexico.jpg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
