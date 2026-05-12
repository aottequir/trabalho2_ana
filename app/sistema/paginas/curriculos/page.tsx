"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

// ================================
// DADOS FAKE (inicial)
// ================================
const dadosFake = [
  {
    id: 1,
    nome: "Ana Silva",
    cargo: "Desenvolvedora Front-end",
    resumo: "Experiência com React e UI moderna."
  },
  {
    id: 2,
    nome: "João Souza",
    cargo: "Back-end Developer",
    resumo: "Especialista em APIs e Node.js."
  },
  {
    id: 3,
    nome: "Maria Oliveira",
    cargo: "UX Designer",
    resumo: "Foco em experiência do usuário."
  }
]

export default function Page() {

  // estado da busca
  const [busca, setBusca] = useState("")

  // lista exibida
  const [curriculos, setCurriculos] = useState(dadosFake)

  // ================================
  // FILTRO EM TEMPO REAL
  // ================================
  useEffect(() => {

    const resultado = dadosFake.filter((c) =>
      c.nome.toLowerCase().includes(busca.toLowerCase()) ||
      c.cargo.toLowerCase().includes(busca.toLowerCase())
    )

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurriculos(resultado)

  }, [busca])

  return (
    <div className="p-6 max-w-5xl mx-auto">

      <h1 className="text-2xl font-bold mb-6">
        Lista de Currículos
      </h1>

      {/* 🔍 CAMPO DE BUSCA */}
      <input
        type="text"
        placeholder="Buscar por nome ou cargo..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        className="w-full border p-2 rounded mb-6"
      />

      {/* RESULTADO */}
      {curriculos.length === 0 && (
        <p className="text-zinc-500">
          Nenhum currículo encontrado.
        </p>
      )}

      {/* CARDS */}
      <div className="grid gap-4">

        {curriculos.map((curriculo) => (

          <div
            key={curriculo.id}
            className="border p-4 rounded shadow-sm hover:shadow-md transition"
          >

            <h2 className="text-lg font-semibold">
              {curriculo.nome}
            </h2>

            <p className="text-zinc-600">
              {curriculo.cargo}
            </p>

            <p className="mt-2">
              {curriculo.resumo}
            </p>

            <Link
              href={`/sistema/paginas/curriculos/${curriculo.id}`}
              className="text-blue-600 mt-3 inline-block hover:underline"
            >
              Ver detalhes
            </Link>

          </div>

        ))}

      </div>

    </div>
  )
}