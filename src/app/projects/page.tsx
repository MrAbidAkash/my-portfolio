/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
// app/projects/page.js
export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 md:px-12 bg-gray-50">
      <h2 className="text-4xl font-bold mb-8 text-center">My Projects</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          /* array of project data */
        ].map((project: any) => (
          <div
            key={project.id}
            className="group bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a href={project.link} className="text-blue-600 hover:underline">
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
