import Header from "../componentes/header";
import Footer from "../componentes/footer";

import Link from "next/link";

import { Button } from "@/components/ui/button";

import { Card } from "@/components/ui/card";

import {
  Briefcase,
  FileText,
  Users,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-br from-sky-950 via-blue-900 to-cyan-800 text-white">

      {/* HERO */}
      <section className="relative container mx-auto px-6 py-24">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"></div>

        <div className="relative grid items-center gap-16 lg:grid-cols-2">
          {/* Texto */}
          <div>
            <span className="inline-flex items-center rounded-full border border-cyan-300/30 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-200 backdrop-blur">
              Plataforma moderna de recrutamento
            </span>

            <h1 className="mt-8 text-5xl font-extrabold leading-tight md:text-6xl">
              O jeito moderno de
              <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                {" "}
                gerenciar currículos
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-blue-100/80">
              Organize candidatos, visualize perfis profissionais
              e simplifique processos seletivos com uma plataforma
              rápida, elegante e totalmente responsiva.
            </p>

            {/* BENEFÍCIOS */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-blue-100">
                <CheckCircle2 className="h-5 w-5 text-cyan-300" />
                Cadastro completo de candidatos
              </div>

              <div className="flex items-center gap-3 text-blue-100">
                <CheckCircle2 className="h-5 w-5 text-cyan-300" />
                Interface moderna e intuitiva
              </div>

              <div className="flex items-center gap-3 text-blue-100">
                <CheckCircle2 className="h-5 w-5 text-cyan-300" />
                Acesso em qualquer dispositivo
              </div>
            </div>

            {/* BOTÕES */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/sistema/paginas/curriculos">
                <Button
                  size="lg"
                  className="group rounded-xl bg-cyan-400 px-8 text-slate-900 hover:bg-cyan-300"
                >
                  Ver Currículos

                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>

              <Link href="/sistema/paginas/curriculos/novo">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-xl border-blue-300/30 bg-white/10 px-8 text-white backdrop-blur hover:bg-white/20"
                >
                  Novo Cadastro
                </Button>
              </Link>
            </div>
          </div>

          {/* Cards */}
          <div className="grid gap-6">
            <Card className="rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl transition-all hover:scale-[1.02] hover:bg-white/15">
              <div className="flex items-center gap-5">
                <div className="rounded-2xl bg-cyan-400/20 p-4">
                  <Users className="h-8 w-8 text-cyan-300" />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-white">
                    Gestão Inteligente
                  </h2>

                  <p className="mt-1 text-sm text-blue-100/70">
                    Organize e visualize candidatos de forma simples
                    e eficiente.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl transition-all hover:scale-[1.02] hover:bg-white/15">
              <div className="flex items-center gap-5">
                <div className="rounded-2xl bg-blue-400/20 p-4">
                  <FileText className="h-8 w-8 text-blue-300" />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-white">
                    Cadastro Completo
                  </h2>

                  <p className="mt-1 text-sm text-blue-100/70">
                    Informações profissionais detalhadas em um só lugar.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl transition-all hover:scale-[1.02] hover:bg-white/15">
              <div className="flex items-center gap-5">
                <div className="rounded-2xl bg-sky-400/20 p-4">
                  <Briefcase className="h-8 w-8 text-sky-300" />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-white">
                    Totalmente Responsivo
                  </h2>

                  <p className="mt-1 text-sm text-blue-100/70">
                    Funciona perfeitamente no celular, tablet e desktop.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="container mx-auto px-6 pb-24">
        <div className="rounded-[40px] border border-white/10 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 p-12 text-center shadow-2xl backdrop-blur-xl">
          <h2 className="text-4xl font-bold">
            Comece a organizar currículos hoje mesmo
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100/80">
            Tenha mais controle, produtividade e praticidade
            no gerenciamento de candidatos da sua empresa.
          </p>

          <div className="mt-8">
            <Link href="/sistema/paginas/curriculos/novo">
              <Button
                size="lg"
                className="rounded-xl bg-cyan-400 px-10 text-slate-900 hover:bg-cyan-300"
              >
                Começar Agora
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}