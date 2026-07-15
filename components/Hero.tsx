import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#16171d] text-white flex items-center">

      <div className="max-w-7xl mx-auto px-10">

        <div className="grid lg:grid-cols-2 items-center gap-16">

          {/* LEFT */}

          <div className="relative">

            <Image
              src="/profile.png"
              alt="Susanth"
              width={650}
              height={750}
              className="
              rounded-t-full
              rounded-b-full
              object-cover
              w-full
              max-w-xl
              mx-auto
              "
            />

          </div>

          {/* RIGHT */}

          <div>

            <h1
              className="
              text-7xl
              lg:text-8xl
              font-black
              uppercase
              leading-none
              "
            >
              Susanth
            </h1>

            <h1
              className="
              text-7xl
              lg:text-8xl
              font-black
              uppercase
              leading-none
              "
            >
              Kurma
            </h1>

            <p className="text-cyan-400 tracking-[6px] mt-6 uppercase">

              Data Analyst

            </p>

            <p className="text-slate-300 mt-10 leading-9 text-lg">

              Passionate Data Analyst with experience in
              Microsoft Fabric, Power BI, SQL, Python,
              PySpark, Azure Synapse and Business Intelligence.

              I enjoy transforming business data into
              actionable insights and interactive dashboards.

            </p>

          </div>

        </div>

      </div>

      <div className="mt-10 flex flex-wrap gap-4">

  <a
    href="/resume.pdf"
    download
    className="
      inline-flex
      items-center
      justify-center
      px-8
      py-4
      bg-cyan-500
      text-white
      font-semibold
      rounded-xl
      hover:bg-cyan-400
      transition-all
      duration-300
      shadow-lg
      hover:shadow-cyan-500/40
      hover:-translate-y-1
    "
  >
    Download CV
  </a>

  <a
    href="#projects"
    className="
      inline-flex
      items-center
      justify-center
      px-8
      py-4
      border
      border-cyan-500
      text-cyan-400
      font-semibold
      rounded-xl
      hover:bg-cyan-500
      hover:text-white
      transition-all
      duration-300
    "
  >
    View Projects
  </a>

</div>

    </section>
  );
}