import { useState } from 'react'
import { SectionHeader } from '../components/SectionHeader'
import { featuredProjects, projects } from '../data/cv'

export function Projects() {
  const [showAll, setShowAll] = useState(false)
  const hiddenCount = projects.length - featuredProjects

  return (
    <section id="projects" className="section">
      <SectionHeader num="04" name="Projects" title="Selected Work" aside={`${projects.length} projects / school & side projects`} />
      <div className="projects">
        {projects.map((project, i) => {
          // extra cards stay mounted so the scroll reveal still catches them once shown
          const hidden = !showAll && i >= featuredProjects
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
              hidden={hidden}
              data-reveal
            >
              {body}
            </a>
          ) : (
            <article key={project.name} className="project" hidden={hidden} data-reveal>
              {body}
            </article>
          )
        })}
      </div>
      {hiddenCount > 0 && (
        <button
          type="button"
          className="button mono projects__toggle"
          aria-expanded={showAll}
          onClick={() => setShowAll((value) => !value)}
        >
          {showAll ? 'Show less' : `Show all projects (+${hiddenCount})`}
          <span className="arrow" aria-hidden="true">
            {showAll ? '↑' : '↓'}
          </span>
        </button>
      )}
    </section>
  )
}
