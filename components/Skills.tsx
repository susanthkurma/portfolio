const skills = [
  "Power BI",
  "Microsoft Fabric",
  "SQL",
  "Python",
  "PySpark",
  "Azure Synapse",
  "Excel",
  "DAX",
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-900">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold mb-10">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-slate-800 p-5 rounded-xl text-center hover:bg-cyan-500 transition"
            >
              {skill}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}