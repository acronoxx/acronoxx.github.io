import { SectionHeader } from '../components/SectionHeader'
import { Timeline } from '../components/Timeline'
import { education, honours } from '../data/cv'

export function Education() {
  return (
    <section id="education" className="section">
      <SectionHeader num="03" name="Education" title="Education" />
      <Timeline entries={education} />

      <div className="honours" data-reveal>
        <span className="mono tiny muted">Honours & certifications</span>
        <ul>
          {honours.map((item) => (
            <li key={item.text}>
              <span className="mono honours__year">{item.year}</span>
              <span className="serif">{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
