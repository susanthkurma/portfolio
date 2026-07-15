import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-slate-950/90 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <h1 className="text-3xl font-bold text-cyan-400">
          Susanth Kurma
        </h1>

        <div className="flex gap-10 text-white font-medium">

          <Link href="#about" className="hover:text-cyan-400 transition">
            About
          </Link>

          <Link href="#skills" className="hover:text-cyan-400 transition">
            Skills
          </Link>

          <Link href="#projects" className="hover:text-cyan-400 transition">
            Projects
          </Link>

          <Link href="#contact" className="hover:text-cyan-400 transition">
            Contact
          </Link>

        </div>

      </div>
    </nav>
  );
}