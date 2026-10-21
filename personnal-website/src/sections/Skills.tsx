import { SectionHeader } from '../components/SectionHeader'
import { offHours, skills } from '../data/cv'
import icons from '../data/icons.json'

const iconMap: Record<string, string> = icons

export function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHeader num="05" name="Toolkit" title="Technical Index" aside={`${skills.length} tools / favourites first`} />
      <ul className="toolkit" data-reveal>
        {skills.map((name, i) => (
          <li key={name} className="toolkit__item">
            <svg
              viewBox="0 0 24 24"
              className="toolkit__icon"
              aria-hidden="true"
              dangerouslySetInnerHTML={{ __html: iconMap[name] ?? '' }}
            />
            <span className="mono toolkit__name">{name}</span>
            <span className="mono toolkit__num muted">{String(i + 1).padStart(2, '0')}</span>
          </li>
        ))}
      </ul>

      <div className="offhours">
        <SectionHeader num="06" name="Off hours" title="When I'm Not Coding" />
        <div className="offhours__grid" data-reveal>
          {offHours.map((item, i) => (
            <div key={item.label} className="offhours__item">
              <span className="mono tiny muted">
                {String(i + 1).padStart(2, '0')} / {item.label}
              </span>
              <h3 className="serif">{item.title}</h3>
              <p className="serif muted small">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
