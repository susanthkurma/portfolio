import Image from "next/image";

const certifications = [
  {
    title: "Microsoft Certified: Power BI Data Analyst Associate",
    issuer: "Microsoft",
    year: "2025",
    image: "/certifications/microsoft.png",
    link: "https://learn.microsoft.com/",
  },
  {
    title: "Microsoft Fabric Analytics Engineer",
    issuer: "Microsoft",
    year: "2026",
    image: "/certifications/fabric.png",
    link: "https://learn.microsoft.com/",
  },
  {
    title: "Python for Data Science",
    issuer: "Coursera",
    year: "2024",
    image: "/certifications/python.png",
    link: "https://www.coursera.org/",
  },
  {
    title: "SQL Advanced Certification",
    issuer: "HackerRank",
    year: "2024",
    image: "/certifications/sql.png",
    link: "https://www.hackerrank.com/",
  },
];

export default function Certification() {
  return (
    <section
      id="certifications"
      className="bg-slate-950 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-4">
          Certifications
        </h2>

        <p className="text-center text-slate-400 mb-16">
          Professional certifications that demonstrate my technical expertise.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {certifications.map((cert, index) => (
            <div
              key={index}
              className="
                bg-slate-900
                rounded-2xl
                p-6
                border
                border-slate-800
                shadow-lg
                hover:shadow-cyan-500/20
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              <div className="flex justify-center mb-6">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>

              <h3 className="text-xl font-semibold text-center">
                {cert.title}
              </h3>

              <p className="text-center text-cyan-400 mt-3">
                {cert.issuer}
              </p>

              <p className="text-center text-slate-400 mt-2">
                {cert.year}
              </p>

              <div className="mt-6 flex justify-center">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    bg-cyan-500
                    hover:bg-cyan-600
                    px-5
                    py-2
                    rounded-lg
                    font-medium
                    transition
                  "
                >
                  View Certificate
                </a>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}