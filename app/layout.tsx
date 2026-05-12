import Header from "./componentes/header"
import Footer from "./componentes/footer"
import "./globals.css"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>

        {/* TOPO DO SITE */}
        <Header />

        {/* CONTEÚDO DAS PÁGINAS */}
        <main className="max-w-5xl mx-auto p-6">
          {children}
        </main>

        {/* RODAPÉ */}
        <Footer />

      </body>
    </html>
  )
}