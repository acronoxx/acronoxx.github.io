import { Leaf } from '../components/Logo'
import { SectionHeader } from '../components/SectionHeader'
import { about, languages } from '../data/cv'

export function About() {
  return (
    <section id="about" className="section">
      <div className="intro" data-reveal>
        <span className="mono tiny muted">00 / Hello</span>
        <p className="intro__headline serif">{about.headline}</p>
        <p className="mono small muted upper">School labs, side projects, and what I learn from both</p>
        <span className="rule" />
      </div>

      <SectionHeader num="01" name="About" title="About" />
      <div className="about" data-reveal>
        <div className="about__text">
          {about.paragraphs.map((p) => (
            <p key={p} className="serif lead">
              {p}
            </p>
          ))}
          <p className="serif muted italic">{about.now}</p>
        </div>
        <div className="about__side">
          <div className="about__leaf">
            <Leaf className="leaf" />
          </div>
          <dl className="facts">
            {[...about.facts, ...languages.map((l) => ({ label: l.name, value: l.level }))].map((fact) => (
              <div key={fact.label}>
                <dt className="mono tiny muted">{fact.label}</dt>
                <dd className="serif">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
