export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-slate-900 shadow-lg z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-5">
        <h1 className="text-xl font-bold text-cyan-400">
          Susanth Kurma
        </h1>

        <div className="space-x-6">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}