// src/components/layout/Header.tsx

import Nav from "./nav" // importa o menu

export default function Header() {
  return (
    <header className="bg-zinc-900 text-white p-4">

      <div className="max-w-5xl mx-auto flex justify-between items-center">

        {/* Nome do sistema */}
        <h1 className="text-xl font-bold">
          Sistema de Currículos
        </h1>

        {/* Menu de navegação */}
        <Nav />

      </div>

    </header>
  )
}