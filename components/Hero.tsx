export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="text-center">

        <img
          src="/profile.jpg"
          className="mx-auto rounded-full w-48 h-48 border-4 border-cyan-400"
        />

        <h1 className="text-6xl font-bold mt-8">
          Hi, I'm Susanth
        </h1>

        <p className="text-2xl text-gray-400 mt-5">
          Data Analyst | Power BI | Microsoft Fabric | SQL
        </p>

        <div className="mt-10 space-x-4">

          <a
            href="/resume.pdf"
            className="bg-cyan-500 px-6 py-3 rounded-lg"
          >
            Resume
          </a>

          <a
            href="https://github.com/susanthkurma/portfolio"
            className="border px-6 py-3 rounded-lg"
          >
            GitHub
          </a>

        </div>

      </div>
    </section>
  );
}