const projects = [
  {
    title: "Sales Dashboard",
    description: "Power BI Sales Analytics Dashboard",
  },
  {
    title: "Supply Chain Dashboard",
    description: "Inventory & Warehouse Analytics",
  },
  {
    title: "HR Analytics",
    description: "Employee Performance Dashboard",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold mb-10">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project) => (

            <div
              key={project.title}
              className="bg-slate-900 p-6 rounded-xl"
            >

              <h3 className="text-2xl font-bold">
                {project.title}
              </h3>

              <p className="text-gray-400 mt-4">
                {project.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}