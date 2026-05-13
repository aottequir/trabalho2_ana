import type { Metadata } from "next";
import "./globals.css";
import Header from "@/componentes/header";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Sistema de Currículos",
  description: "Gerenciador de currículos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        {children}

        <Toaster
          richColors
          position="top-right"
        />
      </body>
    </html>
  );
}