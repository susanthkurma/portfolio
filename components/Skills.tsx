import Image from "next/image";

const skills = [
  {
    name: "Power BI",
    image: "/icons/powerbi.png",
  },
  {
    name: "Microsoft Fabric",
    image: "/icons/fabric.png",
  },
  {
    name: "SQL",
    image: "/icons/sql.png",
  },
  {
    name: "Python",
    image: "/icons/python.png",
  },
  {
    name: "PySpark",
    image: "/icons/pyspark.png",
  },
  {
    name: "Azure Synapse",
    image: "/icons/synapse.png",
  },
  {
    name: "Excel",
    image: "/icons/excel.png",
  },
  {
    name: "Git",
    image: "/icons/github.png",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-4">
          Technical Skills
        </h2>

        <p className="text-center text-slate-400 mb-14">
          Technologies I use to build data solutions.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {skills.map((skill) => (
            <div
              key={skill.name}
              className="
                bg-slate-800
                rounded-2xl
                p-6
                flex
                flex-col
                items-center
                hover:scale-105
                hover:bg-slate-700
                transition
              "
            >
              <Image
                src={skill.image}
                alt={skill.name}
                width={60}
                height={60}
              />

              <p className="mt-4 font-semibold">
                {skill.name}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}