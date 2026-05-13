"use client";

import { useParams } from "next/navigation";

import Image from "next/image";

import Link from "next/link";

import { Button } from "@/components/ui/button";

import {
  Mail,
  Phone,
  BadgeCheck,
  GraduationCap,
  Briefcase,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  UserRound,
} from "lucide-react";

// ================================
// DADOS FAKE
// ================================
const curriculos = [
  {
    id: 1,
    nome: "Ana Silva",
    cargo: "Desenvolvedora Front-end",
    resumo: "Experiência com React e UI moderna.",
    email: "ana@email.com",
    telefone: "(48) 99999-9999",
    cpf: "123.456.789-00",
    experiencias: "React, Next.js e TailwindCSS",
    formacoes: "ADS - IFSC",
    habilidades: "React, UX/UI, TypeScript",
    imagem: "/uploads/avatar1.png",
  },

  {
    id: 2,
    nome: "João Souza",
    cargo: "Back-end Developer",
    resumo: "Especialista em APIs e Node.js.",
    email: "joao@email.com",
    telefone: "(48) 98888-7777",
    cpf: "987.654.321-00",
    experiencias: "Node.js e PostgreSQL",
    formacoes: "Ciência da Computação",
    habilidades: "Node, APIs REST, SQL",
    imagem: "/uploads/avatar2.png",
  },

  {
    id: 3,
    nome: "Maria Oliveira",
    cargo: "UX Designer",
    resumo: "Foco em experiência do usuário.",
    email: "maria@email.com",
    telefone: "(48) 97777-6666",
    cpf: "111.222.333-44",
    experiencias: "Figma e Design Systems",
    formacoes: "Design Gráfico",
    habilidades: "UX, UI, Figma",
    imagem: "/uploads/avatar1.png",
  },
];

export default function DetalhesPage() {
  const params = useParams();

  const id = Number(params.id);

  const curriculo = curriculos.find(
    (item) => item.id === id
  );

  if (!curriculo) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-sky-950 via-blue-900 to-cyan-800 px-6">
        <div className="rounded-[40px] border border-white/10 bg-white/10 p-12 text-center shadow-2xl backdrop-blur-xl">
          <h1 className="text-3xl font-bold text-white">
            Currículo não encontrado
          </h1>

          <p className="mt-4 text-blue-100/80">
            O perfil solicitado não existe ou foi removido.
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-sky-950 via-blue-900 to-cyan-800 text-white">

      {/* BACKGROUND */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl"></div>

      <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"></div>

      <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl"></div>

      {/* HERO */}
      <section className="relative container mx-auto px-6 pb-10 pt-20">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* TEXTO */}
          <div>
            <span className="inline-flex items-center rounded-full border border-cyan-300/20 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-200 backdrop-blur">
              Sistema inteligente de currículos
            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight md:text-6xl">
              Conheça o perfil de
              <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                {" "}
                {curriculo.nome}
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-blue-100/80">
              Visualize informações profissionais completas,
              habilidades técnicas e experiências do candidato
              em uma plataforma moderna e responsiva.
            </p>

            {/* BENEFÍCIOS */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-blue-100">
                <CheckCircle2 className="h-5 w-5 text-cyan-300" />
                Perfil profissional organizado
              </div>

              <div className="flex items-center gap-3 text-blue-100">
                <CheckCircle2 className="h-5 w-5 text-cyan-300" />
                Dados completos e acessíveis
              </div>

              <div className="flex items-center gap-3 text-blue-100">
                <CheckCircle2 className="h-5 w-5 text-cyan-300" />
                Gestão moderna de recrutamento
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

              <Link href="/sistema/paginas/curriculos/novo">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-2xl border-white/20 bg-white/10 px-8 text-white backdrop-blur hover:bg-white/20"
                >
                  Novo Cadastro
                </Button>
              </Link>
            </div>
          </div>

          {/* PERFIL */}
          <div className="relative">

            <div className="rounded-[40px] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">

              {/* FOTO */}
              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-cyan-400/30 blur-2xl"></div>

                  <Image
                    src={curriculo.imagem}
                    alt={curriculo.nome}
                    width={170}
                    height={170}
                    className="relative rounded-full border-4 border-cyan-300/30 object-cover shadow-2xl"
                  />
                </div>

                <h2 className="mt-6 text-3xl font-black">
                  {curriculo.nome}
                </h2>

                <p className="mt-2 text-lg text-cyan-300">
                  {curriculo.cargo}
                </p>

                <p className="mt-5 max-w-lg leading-7 text-blue-100/80">
                  {curriculo.resumo}
                </p>
              </div>

              {/* INFORMAÇÕES */}
              <div className="mt-10 grid gap-5">

                {/* CONTATO */}
                <div className="rounded-3xl border border-white/10 bg-white/10 p-6 transition-all hover:scale-[1.02] hover:bg-white/15">

                  <div className="mb-5 flex items-center gap-3">
                    <div className="rounded-2xl bg-cyan-400/20 p-3">
                      <Mail className="h-6 w-6 text-cyan-300" />
                    </div>

                    <h2 className="text-xl font-bold">
                      Contato
                    </h2>
                  </div>

                  <div className="space-y-4 text-blue-100/80">
                    <p className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-cyan-300" />
                      {curriculo.email}
                    </p>

                    <p className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-cyan-300" />
                      {curriculo.telefone}
                    </p>

                    <p className="flex items-center gap-3">
                      <BadgeCheck className="h-4 w-4 text-cyan-300" />
                      {curriculo.cpf}
                    </p>
                  </div>
                </div>

                {/* GRID */}
                <div className="grid gap-5 md:grid-cols-2">

                  {/* FORMAÇÃO */}
                  <div className="rounded-3xl border border-white/10 bg-white/10 p-6 transition-all hover:scale-[1.02] hover:bg-white/15">

                    <div className="mb-5 flex items-center gap-3">
                      <div className="rounded-2xl bg-blue-400/20 p-3">
                        <GraduationCap className="h-6 w-6 text-blue-300" />
                      </div>

                      <h2 className="text-lg font-bold">
                        Formação
                      </h2>
                    </div>

                    <p className="leading-7 text-blue-100/80">
                      {curriculo.formacoes}
                    </p>
                  </div>

                  {/* EXPERIÊNCIAS */}
                  <div className="rounded-3xl border border-white/10 bg-white/10 p-6 transition-all hover:scale-[1.02] hover:bg-white/15">

                    <div className="mb-5 flex items-center gap-3">
                      <div className="rounded-2xl bg-sky-400/20 p-3">
                        <Briefcase className="h-6 w-6 text-sky-300" />
                      </div>

                      <h2 className="text-lg font-bold">
                        Experiências
                      </h2>
                    </div>

                    <p className="leading-7 text-blue-100/80">
                      {curriculo.experiencias}
                    </p>
                  </div>

                </div>

                {/* HABILIDADES */}
                <div className="rounded-3xl border border-white/10 bg-white/10 p-6 transition-all hover:scale-[1.02] hover:bg-white/15">

                  <div className="mb-5 flex items-center gap-3">
                    <div className="rounded-2xl bg-cyan-400/20 p-3">
                      <Sparkles className="h-6 w-6 text-cyan-300" />
                    </div>

                    <h2 className="text-xl font-bold">
                      Habilidades
                    </h2>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {curriculo.habilidades
                      .split(",")
                      .map((habilidade, index) => (
                        <span
                          key={index}
                          className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100"
                        >
                          {habilidade.trim()}
                        </span>
                      ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative container mx-auto px-6 pb-24">

        <div className="rounded-[40px] border border-white/10 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 p-12 text-center shadow-2xl backdrop-blur-xl">

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-cyan-400/20">
            <UserRound className="h-10 w-10 text-cyan-300" />
          </div>

          <h2 className="mt-8 text-4xl font-black">
            Gerencie talentos com mais eficiência
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-blue-100/80">
            Centralize informações profissionais,
            visualize currículos modernos e otimize
            processos seletivos com uma plataforma
            elegante e intuitiva.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link href="/sistema/paginas/curriculos">
              <Button
                size="lg"
                className="rounded-2xl bg-cyan-400 px-8 text-slate-900 hover:bg-cyan-300"
              >
                Explorar Currículos
              </Button>
            </Link>

            <Link href="/sistema/paginas/curriculos/novo">
              <Button
                variant="outline"
                size="lg"
                className="rounded-2xl border-white/20 bg-white/10 px-8 text-white backdrop-blur hover:bg-white/20"
              >
                Criar Novo Perfil
              </Button>
            </Link>

          </div>
        </div>
      </section>
    </main>
  );
}