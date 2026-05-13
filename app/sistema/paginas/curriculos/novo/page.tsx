/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";

import InputMask from "react-input-mask";

import { toast } from "sonner";

import Header from "@/componentes/header";

import {
  FaUser,
  FaBriefcase,
  FaEnvelope,
  FaPhone,
  FaIdCard,
  FaFileAlt,
  FaGraduationCap,
  FaTools,
} from "react-icons/fa";

// ================================
// VALIDAÇÃO YUP
// ================================
const schema = yup.object({
  nome: yup
    .string()
    .required("O nome é obrigatório")
    .min(3, "Digite ao menos 3 caracteres"),

  cargo: yup
    .string()
    .required("O cargo é obrigatório"),

  email: yup
    .string()
    .email("Digite um e-mail válido")
    .required("O e-mail é obrigatório"),

  telefone: yup
    .string()
    .required("O telefone é obrigatório")
    .min(15, "Telefone inválido"),

  cpf: yup
    .string()
    .required("O CPF é obrigatório")
    .min(14, "CPF inválido"),

  resumo: yup
    .string()
    .required("O resumo profissional é obrigatório")
    .min(20, "Digite um resumo maior"),

  experiencias: yup
    .string()
    .required("As experiências são obrigatórias"),

  formacoes: yup
    .string()
    .required("As formações são obrigatórias"),

  habilidades: yup
    .string()
    .required("As habilidades são obrigatórias"),
});

export default function NovoCurriculoPage() {

  // ================================
  // REACT HOOK FORM
  // ================================
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // ================================
  // SUBMIT
  // ================================
  function onSubmit(data: any) {

    console.log(data);

    // SONNER
    toast.success(
      "Currículo cadastrado com sucesso!"
    );

    reset();
  }

  return (
    <main className="min-h-screen bg-slate-50">

      <Header />

      <section className="container mx-auto max-w-5xl px-6 py-10">

        {/* CARD */}
        <div className="rounded-3xl bg-white p-8 shadow-xl">

          {/* TOPO */}
          <div className="mb-10">

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
              Cadastro de Currículo
            </span>

            <h1 className="mt-6 text-5xl font-black tracking-tight text-slate-900">
              Novo candidato
            </h1>

            <p className="mt-4 text-lg text-slate-500">
              Preencha todas as informações do candidato.
            </p>

          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-8"
          >

            {/* GRID */}
            <div className="grid gap-6 md:grid-cols-2">

              {/* NOME */}
              <div>

                <label className="mb-2 flex items-center gap-2 font-semibold text-slate-700">
                  <FaUser />
                  Nome
                </label>

                <input
                  type="text"
                  placeholder="Digite o nome"
                  {...register("nome")}
                  className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 outline-none transition focus:border-blue-500 focus:bg-white"
                />

                <p className="mt-2 text-sm text-red-500">
                  {errors.nome?.message}
                </p>

              </div>

              {/* CARGO */}
              <div>

                <label className="mb-2 flex items-center gap-2 font-semibold text-slate-700">
                  <FaBriefcase />
                  Cargo desejado
                </label>

                <input
                  type="text"
                  placeholder="Digite o cargo"
                  {...register("cargo")}
                  className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 outline-none transition focus:border-blue-500 focus:bg-white"
                />

                <p className="mt-2 text-sm text-red-500">
                  {errors.cargo?.message}
                </p>

              </div>

              {/* EMAIL */}
              <div>

                <label className="mb-2 flex items-center gap-2 font-semibold text-slate-700">
                  <FaEnvelope />
                  E-mail
                </label>

                <input
                  type="email"
                  placeholder="Digite o e-mail"
                  {...register("email")}
                  className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 outline-none transition focus:border-blue-500 focus:bg-white"
                />

                <p className="mt-2 text-sm text-red-500">
                  {errors.email?.message}
                </p>

              </div>

              {/* TELEFONE */}
              <div>

                <label className="mb-2 flex items-center gap-2 font-semibold text-slate-700">
                  <FaPhone />
                  Telefone
                </label>

                <InputMask
                  mask="(99) 99999-9999"
                  {...register("telefone")}
                >
                  {(inputProps: any) => (
                    <input
                      {...inputProps}
                      type="text"
                      placeholder="(00) 00000-0000"
                      className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 outline-none transition focus:border-blue-500 focus:bg-white"
                    />
                  )}
                </InputMask>

                <p className="mt-2 text-sm text-red-500">
                  {errors.telefone?.message}
                </p>

              </div>

              {/* CPF */}
              <div className="md:col-span-2">

                <label className="mb-2 flex items-center gap-2 font-semibold text-slate-700">
                  <FaIdCard />
                  CPF
                </label>

                <InputMask
                  mask="999.999.999-99"
                  {...register("cpf")}
                >
                  {(inputProps: any) => (
                    <input
                      {...inputProps}
                      type="text"
                      placeholder="000.000.000-00"
                      className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 outline-none transition focus:border-blue-500 focus:bg-white"
                    />
                  )}
                </InputMask>

                <p className="mt-2 text-sm text-red-500">
                  {errors.cpf?.message}
                </p>

              </div>

            </div>

            {/* RESUMO */}
            <div>

              <label className="mb-2 flex items-center gap-2 font-semibold text-slate-700">
                <FaFileAlt />
                Resumo profissional
              </label>

              <textarea
                placeholder="Conte um resumo profissional..."
                {...register("resumo")}
                className="min-h-[140px] w-full rounded-xl border border-slate-200 bg-slate-50 p-4 outline-none transition focus:border-blue-500 focus:bg-white"
              />

              <p className="mt-2 text-sm text-red-500">
                {errors.resumo?.message}
              </p>

            </div>

            {/* EXPERIÊNCIAS */}
            <div>

              <label className="mb-2 flex items-center gap-2 font-semibold text-slate-700">
                <FaBriefcase />
                Experiências profissionais
              </label>

              <textarea
                placeholder="Descreva experiências profissionais..."
                {...register("experiencias")}
                className="min-h-[120px] w-full rounded-xl border border-slate-200 bg-slate-50 p-4 outline-none transition focus:border-blue-500 focus:bg-white"
              />

              <p className="mt-2 text-sm text-red-500">
                {errors.experiencias?.message}
              </p>

            </div>

            {/* FORMAÇÕES */}
            <div>

              <label className="mb-2 flex items-center gap-2 font-semibold text-slate-700">
                <FaGraduationCap />
                Formações acadêmicas
              </label>

              <textarea
                placeholder="Digite as formações..."
                {...register("formacoes")}
                className="min-h-[120px] w-full rounded-xl border border-slate-200 bg-slate-50 p-4 outline-none transition focus:border-blue-500 focus:bg-white"
              />

              <p className="mt-2 text-sm text-red-500">
                {errors.formacoes?.message}
              </p>

            </div>

            {/* HABILIDADES */}
            <div>

              <label className="mb-2 flex items-center gap-2 font-semibold text-slate-700">
                <FaTools />
                Habilidades
              </label>

              <textarea
                placeholder="Digite as habilidades..."
                {...register("habilidades")}
                className="min-h-[120px] w-full rounded-xl border border-slate-200 bg-slate-50 p-4 outline-none transition focus:border-blue-500 focus:bg-white"
              />

              <p className="mt-2 text-sm text-red-500">
                {errors.habilidades?.message}
              </p>

            </div>

            {/* BOTÃO */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="h-14 w-full rounded-xl bg-blue-600 text-lg font-semibold text-white transition hover:bg-blue-700 disabled:opacity-50"
            >
              {isSubmitting
                ? "Salvando..."
                : "Cadastrar currículo"}
            </button>

          </form>
        </div>
      </section>
    </main>
  );
}