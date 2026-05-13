"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  function active(path: string) {
    return pathname === path;
  }

  return (
    <nav className="flex items-center gap-2">
      <Link
        href="/"
        className={`rounded-lg px-4 py-2 text-sm transition ${
          active("/")
            ? "bg-blue-600 text-white"
            : "text-slate-600 hover:bg-slate-100"
        }`}
      >
        Home
      </Link>

      <Link
        href="/sistema/paginas/curriculos"
        className={`rounded-lg px-4 py-2 text-sm transition ${
          active("/sistema/paginas/curriculos")
            ? "bg-blue-600 text-white"
            : "text-slate-600 hover:bg-slate-100"
        }`}
      >
        Currículos
      </Link>

      <Link
        href="/sistema/paginas/curriculos/novo"
        className={`rounded-lg px-4 py-2 text-sm transition ${
          active("/sistema/paginas/curriculos/novo")
            ? "bg-blue-600 text-white"
            : "text-slate-600 hover:bg-slate-100"
        }`}
      >
        Novo
      </Link>
    </nav>
  );
}