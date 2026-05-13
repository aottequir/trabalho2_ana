"use client"

import { useState } from "react"

import Link from "next/link"

import {
  Upload,
  ArrowRight,
  CheckCircle2,
  UserRound,
  FileText,
  Briefcase,
  Sparkles,
} from "lucide-react"

import { Button } from "@/components/ui/button"

export default function NovoCurriculoPage() {

  const [preview, setPreview] =
    useState<string | null>(null)

  // ESTADOS
  const [telefone, setTelefone] =
    useState("")

  const [cpf, setCpf] =
    useState("")

  // ================================
  // MÁSCARA TELEFONE
  // ================================
  function mascaraTelefone(
    value: string
  ) {

    value = value.replace(/\D/g, "")

    value = value.slice(0, 11)

    value = value.replace(
      /^(\d{2})(\d)/g,
      "($1) $2"
    )

    value = value.replace(
      /(\d{5})(\d{4})$/,
      "$1-$2"
    )

    return value
  }

  // ================================
  // MÁSCARA CPF
  // ================================
  function mascaraCPF(
    value: string
  ) {

    value = value.replace(/\D/g, "")

    value = value.replace(
      /(\d{3})(\d)/,
      "$1.$2"
    )

    value = value.replace(
      /(\d{3})(\d)/,
      "$1.$2"
    )

    value = value.replace(
      /(\d{3})(\d{1,2})$/,
      "$1-$2"
    )

    return value
  }

  // ================================
  // PREVIEW IMAGEM
  // ================================
  function handleImageUpload(
    event: React.ChangeEvent<HTMLInputElement>
  ) {

    const file =
      event.target.files?.[0]

    if (file) {

      const fakeImageUrl =
        URL.createObjectURL(file)

      setPreview(fakeImageUrl)
    }
  }

  // ================================
  // SUBMIT
  // ================================
  function handleSubmit(
    event: React.FormEvent
  ) {

    event.preventDefault()

    alert(
      "Currículo cadastrado com sucesso!"
    )
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-sky-950 via-blue-900 to-cyan-800 text-white">

      {/* EFEITOS */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl"></div>

      <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"></div>

      <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl"></div>

      {/* HERO */}
      <section className="relative container mx-auto px-6 pb-14 pt-20">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* TEXTO */}
          <div>

            <span className="inline-flex items-center rounded-full border border-cyan-300/20 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-200 backdrop-blur">
              Plataforma moderna de recrutamento
            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight md:text-6xl">
              Cadastre
              <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                {" "}
                novos talentos
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-blue-100/80">
              Organize currículos, gerencie candidatos
              e transforme seu recrutamento com uma
              interface moderna, rápida e profissional.
            </p>

            {/* BENEFÍCIOS */}
            <div className="mt-8 space-y-4">

              <div className="flex items-center gap-3 text-blue-100">
                <CheckCircle2 className="h-5 w-5 text-cyan-300" />
                Cadastro inteligente de candidatos
              </div>

              <div className="flex items-center gap-3 text-blue-100">
                <CheckCircle2 className="h-5 w-5 text-cyan-300" />
                Sistema moderno e responsivo
              </div>

              <div className="flex items-center gap-3 text-blue-100">
                <CheckCircle2 className="h-5 w-5 text-cyan-300" />
                Gestão profissional de currículos
              </div>

            </div>

            {/* BOTÕES */}
            <div className="mt-10 flex flex-wrap gap-4">

              <Link href="/sistema/paginas/curriculos">
                <Button
                  size="lg"
                  className="group rounded-2xl bg-cyan-400 px-8 text-slate-900 hover:bg-cyan-300"
                >
                  Ver Currículos

                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>

            </div>

          </div>

          {/* CARD HERO */}
          <div className="rounded-[40px] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">

            <div className="flex items-center gap-4">

              <div className="rounded-3xl bg-cyan-400/20 p-5">
                <Briefcase className="h-10 w-10 text-cyan-300" />
              </div>

              <div>
                <h2 className="text-2xl font-black">
                  Sistema inteligente de RH
                </h2>

                <p className="mt-2 text-blue-100/70">
                  Cadastre candidatos e gerencie
                  talentos com facilidade.
                </p>
              </div>

            </div>

            {/* STATUS */}
            <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-sm text-blue-100/70">
                    Experiência moderna
                  </p>

                  <h3 className="mt-2 text-3xl font-black">
                    100%
                  </h3>
                </div>

                <div className="rounded-3xl bg-cyan-400/20 p-4">
                  <Sparkles className="h-8 w-8 text-cyan-300" />
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* FORMULÁRIO */}
      <section className="relative container mx-auto px-6 pb-24">

        <form
          onSubmit={handleSubmit}
          className="rounded-[40px] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl md:p-12"
        >

          {/* FOTO */}
          <div className="mb-14 flex flex-col items-center text-center">

            <div className="relative">

              <div className="absolute inset-0 rounded-full bg-cyan-400/30 blur-2xl"></div>

              <div className="relative flex h-44 w-44 items-center justify-center overflow-hidden rounded-full border-4 border-cyan-300/20 bg-white/10 shadow-2xl">

                {preview ? (

                  <img
                    src={preview}
                    alt="Preview"
                    className="h-full w-full object-cover"
                  />

                ) : (

                  <UserRound className="h-20 w-20 text-cyan-300" />

                )}

              </div>

            </div>

            {/* UPLOAD */}
            <label className="mt-8 inline-flex cursor-pointer items-center rounded-2xl bg-cyan-400 px-6 py-4 font-semibold text-slate-900 transition hover:bg-cyan-300">

              <Upload className="mr-3 h-5 w-5" />

              Upload de Imagem

              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />

            </label>

            <p className="mt-4 text-sm text-blue-100/60">
              Upload ilustrativo para demonstração da interface
            </p>

          </div>

          {/* CAMPOS */}
          <div className="grid gap-6 md:grid-cols-2">

            {/* NOME */}
            <div>
              <label className="mb-3 block font-medium text-blue-100">
                Nome Completo
              </label>

              <input
                type="text"
                required
                placeholder="Digite o nome completo"
                className="w-full rounded-2xl border border-white/10 bg-white/10 p-4 text-white outline-none backdrop-blur-xl placeholder:text-blue-100/50 focus:border-cyan-300"
              />
            </div>

            {/* CARGO */}
            <div>
              <label className="mb-3 block font-medium text-blue-100">
                Cargo Desejado
              </label>

              <input
                type="text"
                required
                placeholder="Digite o cargo desejado"
                className="w-full rounded-2xl border border-white/10 bg-white/10 p-4 text-white outline-none backdrop-blur-xl placeholder:text-blue-100/50 focus:border-cyan-300"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="mb-3 block font-medium text-blue-100">
                E-mail
              </label>

              <input
                type="email"
                required
                placeholder="Digite o e-mail"
                className="w-full rounded-2xl border border-white/10 bg-white/10 p-4 text-white outline-none backdrop-blur-xl placeholder:text-blue-100/50 focus:border-cyan-300"
              />
            </div>

            {/* TELEFONE */}
            <div>
              <label className="mb-3 block font-medium text-blue-100">
                Telefone
              </label>

              <input
                type="text"
                required
                value={telefone}
                maxLength={15}
                placeholder="(00) 00000-0000"
                onChange={(e) =>
                  setTelefone(
                    mascaraTelefone(
                      e.target.value
                    )
                  )
                }
                className="w-full rounded-2xl border border-white/10 bg-white/10 p-4 text-white outline-none backdrop-blur-xl placeholder:text-blue-100/50 focus:border-cyan-300"
              />
            </div>

            {/* CPF */}
            <div>
              <label className="mb-3 block font-medium text-blue-100">
                CPF
              </label>

              <input
                type="text"
                required
                value={cpf}
                maxLength={14}
                placeholder="000.000.000-00"
                onChange={(e) =>
                  setCpf(
                    mascaraCPF(
                      e.target.value
                    )
                  )
                }
                className="w-full rounded-2xl border border-white/10 bg-white/10 p-4 text-white outline-none backdrop-blur-xl placeholder:text-blue-100/50 focus:border-cyan-300"
              />
            </div>

            {/* CIDADE */}
            <div>
              <label className="mb-3 block font-medium text-blue-100">
                Cidade
              </label>

              <input
                type="text"
                required
                placeholder="Digite a cidade"
                className="w-full rounded-2xl border border-white/10 bg-white/10 p-4 text-white outline-none backdrop-blur-xl placeholder:text-blue-100/50 focus:border-cyan-300"
              />
            </div>

            {/* ESCOLARIDADE */}
            <div>
              <label className="mb-3 block font-medium text-blue-100">
                Escolaridade
              </label>

              <select
                required
                className="w-full rounded-2xl border border-white/10 bg-white/10 p-4 text-white outline-none backdrop-blur-xl focus:border-cyan-300"
              >

                <option className="text-black">
                  Selecione
                </option>

                <option className="text-black">
                  Ensino Médio
                </option>

                <option className="text-black">
                  Ensino Técnico
                </option>

                <option className="text-black">
                  Ensino Superior
                </option>

                <option className="text-black">
                  Pós-graduação
                </option>

                <option className="text-black">
                  Mestrado
                </option>

              </select>
            </div>

            {/* EXPERIÊNCIA */}
            <div>
              <label className="mb-3 block font-medium text-blue-100">
                Tempo de Experiência
              </label>

              <input
                type="text"
                required
                placeholder="Ex: 3 anos"
                className="w-full rounded-2xl border border-white/10 bg-white/10 p-4 text-white outline-none backdrop-blur-xl placeholder:text-blue-100/50 focus:border-cyan-300"
              />
            </div>

            {/* HABILIDADES */}
            <div className="md:col-span-2">
              <label className="mb-3 block font-medium text-blue-100">
                Habilidades
              </label>

              <input
                type="text"
                placeholder="Ex: React, Next.js, Figma..."
                className="w-full rounded-2xl border border-white/10 bg-white/10 p-4 text-white outline-none backdrop-blur-xl placeholder:text-blue-100/50 focus:border-cyan-300"
              />
            </div>

            {/* RESUMO */}
            <div className="md:col-span-2">
              <label className="mb-3 block font-medium text-blue-100">
                Resumo Profissional
              </label>

              <textarea
                rows={6}
                required
                placeholder="Descreva a experiência profissional do candidato"
                className="w-full resize-none rounded-2xl border border-white/10 bg-white/10 p-4 text-white outline-none backdrop-blur-xl placeholder:text-blue-100/50 focus:border-cyan-300"
              />
            </div>

            {/* PDF */}
            <div className="md:col-span-2">

              <label className="mb-3 block font-medium text-blue-100">
                Upload do Currículo (PDF)
              </label>

              <input
                type="file"
                accept=".pdf"
                className="w-full rounded-2xl border border-white/10 bg-white/10 p-4 text-white"
              />

              <p className="mt-3 text-sm text-blue-100/60">
                Upload ilustrativo para demonstração da interface
              </p>

            </div>

          </div>

          {/* BOTÕES */}
          <div className="mt-14 flex flex-wrap justify-end gap-4">

            <Link
              href="/sistema/paginas/curriculos"
              className="rounded-2xl border border-white/10 bg-white/10 px-6 py-4 font-medium text-white transition hover:bg-white/20"
            >
              Cancelar
            </Link>

            <button
              type="submit"
              className="rounded-2xl bg-cyan-400 px-8 py-4 font-semibold text-slate-900 transition hover:bg-cyan-300"
            >
              Salvar Currículo
            </button>

          </div>

        </form>

        {/* CTA FINAL */}
        <div className="mt-20 rounded-[40px] border border-white/10 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 p-12 text-center shadow-2xl backdrop-blur-xl">

          <h2 className="text-4xl font-black">
            Transforme seu recrutamento
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-blue-100/80">
            Centralize candidatos, organize currículos
            e modernize o processo seletivo da sua empresa.
          </p>

          <div className="mt-10">

            <Link href="/sistema/paginas/curriculos">
              <Button
                size="lg"
                className="rounded-2xl bg-cyan-400 px-10 text-slate-900 hover:bg-cyan-300"
              >
                Explorar Currículos
              </Button>
            </Link>

          </div>

        </div>

      </section>
    </main>
  )
}