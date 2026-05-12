"use client" 

import Link from "next/link" 

export default function Nav() {
  return (
    <nav className="flex gap-6">

      {/* Link para página inicial */}
      <Link href="/" className="hover:underline">
        Início
      </Link>

      {/* Link para lista de currículos */}
      <Link href="/sistema/paginas/curriculos/" className="hover:underline">
        Lista de Currículos
      </Link>

      {/* Link para criar novo currículo */}
      <Link href="/sistema/paginas/curriculos/novo" className="hover:underline">
        Novo Curriculo
      </Link>

    </nav>
  )
}