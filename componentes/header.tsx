import Nav from "./nav";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-lg">
      <div className="container mx-auto flex items-center justify-between p-4">
        <h1 className="text-2xl font-black tracking-tight text-blue-600">
          TalentHub
        </h1>

        <Nav />
      </div>
    </header>
  );
}