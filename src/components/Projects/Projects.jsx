import { PROJECTS } from './constants'

export default function Projects() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-8xl mx-auto px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="bg-white/90 backdrop-blur-sm border border-black/5 rounded-xl p-6 shadow-sm h-full w-full"
            >
              <h3 className="text-xl font-semibold text-audax-charcoal mb-3">
                {project.title}
              </h3>
              <p className="text-neutral-700 mb-4">{project.description}</p>
              <ul className="space-y-3 text-neutral-600">
                {project.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

