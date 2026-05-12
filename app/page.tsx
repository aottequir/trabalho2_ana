// app/page.tsx

import Link from "next/link"
import { FaFileAlt, FaUserTie, FaSearch } from "react-icons/fa"

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center">

      {/* HERO (APRESENTAÇÃO DO SISTEMA) */}
      <section className="py-16 max-w-4xl">

        <h1 className="text-4xl font-bold mb-4">
          Sistema de Gestão de Currículos
        </h1>

        <p className="text-lg text-zinc-600 mb-6">
          Crie, gerencie e visualize currículos de forma simples,
          rápida e organizada.
        </p>

        {/* BOTÕES PRINCIPAIS */}
        <div className="flex gap-4 justify-center">

          {/* ir para cadastro */}
          <Link
            href="/curriculos/novo"
            className="bg-black text-white px-6 py-3 rounded hover:bg-zinc-800"
          >
            Criar Currículo
          </Link>

          {/* ir para listagem */}
          <Link
            href="/curriculos"
            className="border px-6 py-3 rounded hover:bg-zinc-100"
          >
            Ver Currículos
          </Link>

        </div>
      </section>

      {/* BENEFÍCIOS DO SISTEMA */}
      <section className="grid md:grid-cols-3 gap-6 max-w-5xl px-4 pb-16">

        {/* CARD 1 */}
        <div className="border p-6 rounded shadow-sm hover:shadow-md transition">

          <FaFileAlt className="text-3xl mb-3 mx-auto" />

          <h3 className="font-semibold text-lg mb-2">
            Cadastro Completo
          </h3>

          <p className="text-zinc-600">
            Insira dados pessoais, experiências, formações e habilidades.
          </p>

        </div>

        {/* CARD 2 */}
        <div className="border p-6 rounded shadow-sm hover:shadow-md transition">

          <FaUserTie className="text-3xl mb-3 mx-auto" />

          <h3 className="font-semibold text-lg mb-2">
            Organização Profissional
          </h3>

          <p className="text-zinc-600">
            Gerencie múltiplos currículos de forma prática.
          </p>

        </div>

        {/* CARD 3 */}
        <div className="border p-6 rounded shadow-sm hover:shadow-md transition">

          <FaSearch className="text-3xl mb-3 mx-auto" />

          <h3 className="font-semibold text-lg mb-2">
            Busca Inteligente
          </h3>

          <p className="text-zinc-600">
            Encontre currículos por nome ou cargo rapidamente.
          </p>

        </div>

      </section>

    </div>
  )
}