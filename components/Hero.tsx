import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white flex items-center justify-center">

      <div className="max-w-5xl mx-auto text-center px-6">

        {/* Profile Image */}

        <div className="relative group w-fit mx-auto">

          <Image
            src="/profile.png"
            width={230}
            height={150}
            alt="Susanth Kurma"
            className="
              rounded-full
              border-4
              border-cyan-400
              object-cover
              shadow-2xl
              transition-all
              duration-500
              group-hover:scale-105
            "
          />

          {/* Hover Overlay */}

          <div
            className="
              absolute
              inset-0
              rounded-full
              bg-black/70
              opacity-0
              group-hover:opacity-100
              transition
              flex
              items-center
              justify-center
            "
          >
            <h2 className="text-2xl font-bold">
              
            </h2>
          </div>

        </div>

        <h1 className="text-7xl font-extrabold mt-10">
          Hi, I'm Susanth
        </h1>

        <p className="text-3xl text-cyan-400 mt-5">
          Data Analyst
        </p>

        <p className="text-xl text-slate-300 mt-3">
          Excel • Power BI • SQL • Python • Azure • Dataiku
        </p>

        <p className="text-slate-400 mt-8 max-w-3xl mx-auto leading-8">
          I build interactive dashboards, automate reporting,
          and transform complex data into meaningful business insights.
        </p>

      </div>

    </section>
  );
}