export default function Footer() {
  return (
    <footer className="bg-zinc-800 text-white p-4 mt-10">

      <div className="max-w-5xl mx-auto text-center">

        {/* Texto de copyright */}
        <p>
          © {new Date().getFullYear()} Sistema de Currículos
        </p>

        {/* Links secundários */}
        <div className="mt-2 flex justify-center gap-4 text-sm">

          <a href="#" className="hover:underline">
            Sobre
          </a>

          <a href="#" className="hover:underline">
            Contato
          </a>

        </div>

      </div>

    </footer>
  )
}