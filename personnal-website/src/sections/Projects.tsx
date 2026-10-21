import { SectionHeader } from '../components/SectionHeader'
import { projects } from '../data/cv'

export function Projects() {
  return (
    <section id="projects" className="section">
      <SectionHeader num="04" name="Projects" title="Selected Work" aside={`${projects.length} projects / school & challenges`} />
      <div className="projects">
        {projects.map((project, i) => {
          const body = (
            <>
              <div className="project__top mono tiny muted">
                <span>
                  {String(i + 1).padStart(2, '0')} / {project.kind}
                </span>
                <span>{project.period}</span>
              </div>
              <h3 className="serif">
                {project.name}
                {project.href && (
                  <span className="arrow" aria-hidden="true">
                    ↗
                  </span>
                )}
              </h3>
              <p className="serif muted">{project.summary}</p>
              {project.result && <p className="project__result mono">{project.result}</p>}
              <div className="tags">
                {project.stack.map((tech) => (
                  <span key={tech} className="tag mono">
                    {tech}
                  </span>
                ))}
              </div>
            </>
          )
          return project.href ? (
            <a
              key={project.name}
              className="project project--link"
              href={project.href}
              target="_blank"
              rel="noreferrer"
              data-reveal
            >
              {body}
            </a>
          ) : (
            <article key={project.name} className="project" data-reveal>
              {body}
            </article>
          )
        })}
      </div>
    </section>
  )
}
