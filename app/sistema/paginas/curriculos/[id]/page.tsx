// ================================
// DADOS FAKE
// ================================
const curriculos = [
  {
    id: 1,
    nome: "Ana Silva",
    cargo: "Desenvolvedora Front-end",
    email: "ana@email.com",
    telefone: "(48) 99999-9999",
    resumo: "Experiência com React.",
    habilidades: ["React", "CSS"]
  },
  {
    id: 2,
    nome: "João Souza",
    cargo: "Back-end",
    email: "joao@email.com",
    telefone: "(11) 98888-8888",
    resumo: "Especialista em APIs.",
    habilidades: ["Node", "SQL"]
  }
]

// 🔥 AGORA É ASYNC
export default async function Page({ params }: any) {

  // 🔥 PRECISA FAZER ISSO
  const { id } = await params

  const idNumber = Number(id)

  const curriculo = curriculos.find(c => c.id === idNumber)

  if (!curriculo) {
    return <p className="p-6">Currículo não encontrado</p>
  }

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold">
        {curriculo.nome}
      </h1>

      <p><strong>Cargo:</strong> {curriculo.cargo}</p>
      <p><strong>Email:</strong> {curriculo.email}</p>

      <h2 className="mt-4 font-semibold">Habilidades</h2>
      <ul>
        {curriculo.habilidades.map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </ul>

    </div>
  )
}