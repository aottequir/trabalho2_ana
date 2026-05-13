"use client"

import { useState, useEffect } from "react"

import Link from "next/link"

import {
  Search,
  ArrowRight,
  Users,
  Briefcase,
  Sparkles,
  CheckCircle2,
} from "lucide-react"

import { Button } from "@/components/ui/button"

// ================================
// DADOS FAKE
// ================================
const dadosFake = [
  {
    id: 1,
    nome: "Ana Silva",
    cargo: "Desenvolvedora Front-end",
    resumo: "Experiência com React e UI moderna.",
  },

  {
    id: 2,
    nome: "João Souza",
    cargo: "Back-end Developer",
    resumo: "Especialista em APIs e Node.js.",
  },

  {
    id: 3,
    nome: "Maria Oliveira",
    cargo: "UX Designer",
    resumo: "Foco em experiência do usuário.",
  },
]

export default function Page() {

  // BUSCA
  const [busca, setBusca] = useState("")

  // LISTA
  const [curriculos, setCurriculos] =
    useState(dadosFake)

  // ================================
  // FILTRO
  // ================================
  useEffect(() => {

    const resultado = dadosFake.filter(
      (c) =>
        c.nome
          .toLowerCase()
          .includes(busca.toLowerCase()) ||

        c.cargo
          .toLowerCase()
          .includes(busca.toLowerCase())
    )

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurriculos(resultado)

  }, [busca])

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-sky-950 via-blue-900 to-cyan-800 text-white">

      {/* EFEITOS */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl"></div>

      <div className="absolute right-0 top-32 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"></div>

      <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl"></div>

      {/* HERO */}
      <section className="relative container mx-auto px-6 pb-12 pt-24">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* TEXTO */}
          <div>

            <span className="inline-flex items-center rounded-full border border-cyan-300/20 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-200 backdrop-blur">
              Plataforma inteligente de recrutamento
            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight md:text-6xl">
              Encontre os
              <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                {" "}
                melhores talentos
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-blue-100/80">
              Gerencie currículos, visualize candidatos
              e organize processos seletivos com uma
              plataforma moderna, rápida e responsiva.
            </p>

            {/* BENEFÍCIOS */}
            <div className="mt-8 space-y-4">

              <div className="flex items-center gap-3 text-blue-100">
                <CheckCircle2 className="h-5 w-5 text-cyan-300" />
                Busca inteligente em tempo real
              </div>

              <div className="flex items-center gap-3 text-blue-100">
                <CheckCircle2 className="h-5 w-5 text-cyan-300" />
                Organização moderna de candidatos
              </div>

              <div className="flex items-center gap-3 text-blue-100">
                <CheckCircle2 className="h-5 w-5 text-cyan-300" />
                Interface elegante e responsiva
              </div>

            </div>

            {/* BOTÕES */}
            <div className="mt-10 flex flex-wrap gap-4">

              <Link href="/sistema/paginas/curriculos/novo">
                <Button
                  size="lg"
                  className="group rounded-2xl bg-cyan-400 px-8 text-slate-900 hover:bg-cyan-300"
                >
                  Novo Currículo

                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>

            </div>
          </div>

          {/* CARD HERO */}
          <div className="rounded-[40px] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">

            <div className="flex items-center gap-4">

              <div className="rounded-3xl bg-cyan-400/20 p-5">
                <Users className="h-10 w-10 text-cyan-300" />
              </div>

              <div>
                <h2 className="text-2xl font-black">
                  Gestão moderna de talentos
                </h2>

                <p className="mt-2 text-blue-100/70">
                  Centralize currículos e simplifique
                  recrutamentos.
                </p>
              </div>

            </div>

            {/* BUSCA */}
            <div className="mt-10">

              <label className="mb-3 block text-sm font-medium text-blue-100">
                Buscar candidatos
              </label>

              <div className="relative">

                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-cyan-300" />

                <input
                  type="text"
                  placeholder="Buscar por nome ou cargo..."
                  value={busca}
                  onChange={(e) =>
                    setBusca(e.target.value)
                  }
                  className="w-full rounded-2xl border border-white/10 bg-white/10 py-4 pl-12 pr-4 text-white outline-none backdrop-blur-xl placeholder:text-blue-100/50 focus:border-cyan-300"
                />

              </div>

            </div>

            {/* STATUS */}
            <div className="mt-8 flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 p-5">

              <div>
                <p className="text-sm text-blue-100/70">
                  Currículos encontrados
                </p>

                <h3 className="mt-2 text-3xl font-black">
                  {curriculos.length}
                </h3>
              </div>

              <div className="rounded-3xl bg-cyan-400/20 p-4">
                <Briefcase className="h-8 w-8 text-cyan-300" />
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* LISTA */}
      <section className="relative container mx-auto px-6 pb-24">

        {/* VAZIO */}
        {curriculos.length === 0 && (

          <div className="rounded-[40px] border border-white/10 bg-white/10 p-12 text-center shadow-2xl backdrop-blur-xl">

            <Sparkles className="mx-auto h-14 w-14 text-cyan-300" />

            <h2 className="mt-6 text-3xl font-black">
              Nenhum currículo encontrado
            </h2>

            <p className="mt-4 text-blue-100/70">
              Tente buscar outro nome ou cargo.
            </p>

          </div>

        )}

        {/* CARDS */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {curriculos.map((curriculo) => (

            <div
              key={curriculo.id}
              className="group rounded-[32px] border border-white/10 bg-white/10 p-7 shadow-2xl backdrop-blur-xl transition-all hover:-translate-y-2 hover:bg-white/15"
            >

              {/* TOPO */}
              <div className="flex items-center justify-between">

                <div className="rounded-2xl bg-cyan-400/20 p-4">
                  <Users className="h-7 w-7 text-cyan-300" />
                </div>

                <span className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-100">
                  Profissional
                </span>

              </div>

              {/* TEXTO */}
              <div className="mt-6">

                <h2 className="text-2xl font-black">
                  {curriculo.nome}
                </h2>

                <p className="mt-2 text-cyan-300">
                  {curriculo.cargo}
                </p>

                <p className="mt-5 leading-7 text-blue-100/75">
                  {curriculo.resumo}
                </p>

              </div>

              {/* BOTÃO */}
              <Link
                href={`/sistema/paginas/curriculos/${curriculo.id}`}
                className="mt-8 inline-flex items-center text-cyan-300 transition-all hover:text-cyan-200"
              >
                Ver detalhes

                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

            </div>

          ))}

        </div>

        {/* CTA FINAL */}
        <div className="mt-20 rounded-[40px] border border-white/10 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 p-12 text-center shadow-2xl backdrop-blur-xl">

          <h2 className="text-4xl font-black">
            Modernize seu recrutamento
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-blue-100/80">
            Organize talentos, encontre candidatos
            rapidamente e transforme seu sistema
            de currículos em uma experiência moderna.
          </p>

          <div className="mt-10">

            <Link href="/sistema/paginas/curriculos/novo">
              <Button
                size="lg"
                className="rounded-2xl bg-cyan-400 px-10 text-slate-900 hover:bg-cyan-300"
              >
                Criar Novo Currículo
              </Button>
            </Link>

          </div>

        </div>

      </section>
    </main>
  )
}