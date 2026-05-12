/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { SetStateAction, useState } from "react"
import { FaPlus, FaTrash } from "react-icons/fa"
import InputMask from "react-input-mask"
import { toast } from "sonner"

export default function Page() {

  // =========================
  // CAMPOS PRINCIPAIS
  // =========================
  const [nome, setNome] = useState("")
  const [cargo, setCargo] = useState("")
  const [email, setEmail] = useState("")
  const [telefone, setTelefone] = useState("")
  const [cpf, setCpf] = useState("")
  const [resumo, setResumo] = useState("")

  // =========================
  // EXPERIÊNCIAS
  // =========================
  const [experiencias, setExperiencias] = useState([
    {
      empresa: "",
      cargo: ""
    }
  ])

  // =========================
  // FORMAÇÕES
  // =========================
  const [formacoes, setFormacoes] = useState([
    {
      instituicao: "",
      curso: ""
    }
  ])

  // =========================
  // HABILIDADES
  // =========================
  const [habilidades, setHabilidades] = useState<string[]>([])
  const [novaHabilidade, setNovaHabilidade] = useState("")

  // =========================
  // VALIDAÇÃO
  // =========================
  function validarFormulario() {

    if (
      !nome ||
      !cargo ||
      !email ||
      !telefone ||
      !cpf ||
      !resumo
    ) {
      toast.error("Preencha todos os campos obrigatórios!")
      return false
    }

    if (!email.includes("@")) {
      toast.error("Digite um e-mail válido!")
      return false
    }

    if (resumo.length < 10) {
      toast.error("Resumo muito curto!")
      return false
    }

    return true
  }

  // =========================
  // SALVAR CURRÍCULO
  // =========================
  function salvarCurriculo() {

    // valida antes de salvar
    if (!validarFormulario()) return

    const novoCurriculo = {
      id: Date.now(),
      nome,
      cargo,
      email,
      telefone,
      cpf,
      resumo,
      experiencias,
      formacoes,
      habilidades
    }

    // pega currículos existentes
    const curriculosSalvos = JSON.parse(
      localStorage.getItem("curriculos") || "[]"
    )

    // adiciona novo currículo
    curriculosSalvos.push(novoCurriculo)

    // salva novamente
    localStorage.setItem(
      "curriculos",
      JSON.stringify(curriculosSalvos)
    )

    toast.success("Currículo salvo com sucesso!")

    // limpa formulário
    setNome("")
    setCargo("")
    setEmail("")
    setTelefone("")
    setCpf("")
    setResumo("")

    setExperiencias([
      {
        empresa: "",
        cargo: ""
      }
    ])

    setFormacoes([
      {
        instituicao: "",
        curso: ""
      }
    ])

    setHabilidades([])
  }

  // =========================
  // EXPERIÊNCIAS
  // =========================
  function addExperiencia() {

    setExperiencias([
      ...experiencias,
      {
        empresa: "",
        cargo: ""
      }
    ])
  }

  function removeExperiencia(index: number) {

    const novaLista = experiencias.filter(
      (_, i) => i !== index
    )

    setExperiencias(novaLista)
  }

  function updateExperiencia(
    index: number,
    campo: "empresa" | "cargo",
    valor: string
  ) {

    const lista = [...experiencias]

    lista[index][campo] = valor

    setExperiencias(lista)
  }

  // =========================
  // FORMAÇÕES
  // =========================
  function addFormacao() {

    setFormacoes([
      ...formacoes,
      {
        instituicao: "",
        curso: ""
      }
    ])
  }

  function removeFormacao(index: number) {

    const novaLista = formacoes.filter(
      (_, i) => i !== index
    )

    setFormacoes(novaLista)
  }

  function updateFormacao(
    index: number,
    campo: "instituicao" | "curso",
    valor: string
  ) {

    const lista = [...formacoes]

    lista[index][campo] = valor

    setFormacoes(lista)
  }

  // =========================
  // HABILIDADES
  // =========================
  function addHabilidade() {

    if (!novaHabilidade.trim()) return

    setHabilidades([
      ...habilidades,
      novaHabilidade
    ])

    setNovaHabilidade("")
  }

  function removeHabilidade(index: number) {

    const novaLista = habilidades.filter(
      (_, i) => i !== index
    )

    setHabilidades(novaLista)
  }

  return (

    <div className="max-w-5xl mx-auto p-6 space-y-6">

      {/* =========================
          TÍTULO
      ========================= */}

      <h1 className="text-3xl font-bold">
        Novo Currículo
      </h1>

      {/* =========================
          CAMPOS PRINCIPAIS
      ========================= */}

      <input
        className="input"
        placeholder="Nome completo"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <input
        className="input"
        placeholder="Cargo desejado"
        value={cargo}
        onChange={(e) => setCargo(e.target.value)}
      />

      <input
        className="input"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {/* TELEFONE COM MÁSCARA */}
      <InputMask
        mask="(99) 99999-9999"
        value={telefone}
        onChange={(e: { target: { value: SetStateAction<string> } }) => setTelefone(e.target.value)}
      >
        {(inputProps: any) => (

          <input
            {...inputProps}
            className="input"
            placeholder="Telefone"
          />

        )}
      </InputMask>

      {/* CPF COM MÁSCARA */}
      <InputMask
        mask="999.999.999-99"
        value={cpf}
        onChange={(e: { target: { value: SetStateAction<string> } }) => setCpf(e.target.value)}
      >
        {(inputProps: any) => (

          <input
            {...inputProps}
            className="input"
            placeholder="CPF"
          />

        )}
      </InputMask>

      <textarea
        className="input min-h-[120px]"
        placeholder="Resumo profissional"
        value={resumo}
        onChange={(e) => setResumo(e.target.value)}
      />

      {/* =========================
          EXPERIÊNCIAS
      ========================= */}

      <div>

        <h2 className="text-xl font-bold mb-2">
          Experiências Profissionais
        </h2>

        {experiencias.map((exp, index) => (

          <div
            key={index}
            className="flex gap-2 mb-2"
          >

            <input
              className="input"
              placeholder="Empresa"
              value={exp.empresa}
              onChange={(e) =>
                updateExperiencia(
                  index,
                  "empresa",
                  e.target.value
                )
              }
            />

            <input
              className="input"
              placeholder="Cargo"
              value={exp.cargo}
              onChange={(e) =>
                updateExperiencia(
                  index,
                  "cargo",
                  e.target.value
                )
              }
            />

            <button
              onClick={() =>
                removeExperiencia(index)
              }
              className="bg-red-500 text-white px-3 rounded"
            >
              <FaTrash />
            </button>

          </div>

        ))}

        <button
          onClick={addExperiencia}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded"
        >
          <FaPlus />
          Adicionar experiência
        </button>

      </div>

      {/* =========================
          FORMAÇÕES
      ========================= */}

      <div>

        <h2 className="text-xl font-bold mb-2">
          Formações Acadêmicas
        </h2>

        {formacoes.map((form, index) => (

          <div
            key={index}
            className="flex gap-2 mb-2"
          >

            <input
              className="input"
              placeholder="Instituição"
              value={form.instituicao}
              onChange={(e) =>
                updateFormacao(
                  index,
                  "instituicao",
                  e.target.value
                )
              }
            />

            <input
              className="input"
              placeholder="Curso"
              value={form.curso}
              onChange={(e) =>
                updateFormacao(
                  index,
                  "curso",
                  e.target.value
                )
              }
            />

            <button
              onClick={() =>
                removeFormacao(index)
              }
              className="bg-red-500 text-white px-3 rounded"
            >
              <FaTrash />
            </button>

          </div>

        ))}

        <button
          onClick={addFormacao}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded"
        >
          <FaPlus />
          Adicionar formação
        </button>

      </div>

      {/* =========================
          HABILIDADES
      ========================= */}

      <div>

        <h2 className="text-xl font-bold mb-2">
          Habilidades
        </h2>

        <div className="flex gap-2">

          <input
            className="input"
            placeholder="Digite uma habilidade"
            value={novaHabilidade}
            onChange={(e) =>
              setNovaHabilidade(e.target.value)
            }
          />

          <button
            onClick={addHabilidade}
            className="bg-green-600 text-white px-4 rounded"
          >
            <FaPlus />
          </button>

        </div>

        <div className="flex flex-wrap gap-2 mt-3">

          {habilidades.map((habilidade, index) => (

            <div
              key={index}
              className="bg-zinc-200 px-3 py-1 rounded flex items-center gap-2"
            >

              {habilidade}

              <button
                onClick={() =>
                  removeHabilidade(index)
                }
                className="text-red-500"
              >
                <FaTrash size={12} />
              </button>

            </div>

          ))}

        </div>

      </div>

      {/* =========================
          BOTÃO SALVAR
      ========================= */}

      <button
        onClick={salvarCurriculo}
        className="bg-black text-white px-6 py-3 rounded hover:bg-zinc-800 transition"
      >
        Salvar Currículo
      </button>

    </div>
  )
}