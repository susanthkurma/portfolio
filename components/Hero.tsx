import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-950 to-slate-900 text-white">

      <div className="text-center">

        <div className="relative group w-fit mx-auto">

          <Image
            src="/profile.png"
            alt="Susanth Kurma"
            width={220}
            height={220}
            className="rounded-full border-4 border-cyan-400 shadow-2xl object-cover"
          />

          <div className="absolute inset-0 rounded-full bg-black/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
            <h2 className="text-2xl font-bold">
              Susanth Kurma
            </h2>
          </div>

        </div>

        <h1 className="text-6xl font-bold mt-10">
          Hi, I'm Susanth
        </h1>

        <p className="text-2xl text-slate-300 mt-6">
          Data Analyst | Power BI | Microsoft Fabric | SQL
        </p>

        <p className="text-slate-400 mt-5 max-w-3xl mx-auto">
          Passionate about transforming business data into meaningful insights
          using Microsoft Fabric, Power BI, SQL, Python, and modern analytics.
        </p>

      </div>

    </section>
  );
}