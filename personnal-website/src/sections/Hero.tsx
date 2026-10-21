import { Logo } from '../components/Logo'
import { profile } from '../data/cv'

const code = [
  { indent: false, text: 'const acronoxx = {' },
  { indent: true, text: 'based: "Brest",' },
  { indent: true, text: 'school: "IMT Atlantique",' },
  { indent: true, text: 'gym: "5x / week",' },
  { indent: true, text: 'fuel: "shakes",' },
  { indent: false, text: '};' },
]

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__bar mono tiny muted">
        <span>{profile.alias} / Resume edition 001</span>
        <span>{profile.location}</span>
      </div>

      <div className="hero__grid">
        <div className="hero__main">
          <p className="hero__status mono">
            <span className="hero__dot" aria-hidden="true" />
            {profile.availability}
          </p>
          <h1 className="brand">{profile.name}</h1>
          <p className="hero__role mono">{profile.role}</p>
          <p className="hero__role mono">{profile.focus.join(' · ')}</p>
          <span className="hero__rule" />
          <p className="hero__meta mono">
            {profile.school} · {profile.site}
          </p>
          <div className="hero__actions">
            <a className="button button--solid mono" href="#contact">
              Get in touch
            </a>
            {profile.resume && (
              <a className="button mono" href={profile.resume} download>
                Download PDF
              </a>
            )}
            <a className="button mono" href="#projects">
              See projects
            </a>
          </div>
        </div>

        <div className="hero__code" aria-hidden="true">
          <Logo className="hero__ghost" ghost />
          <pre className="mono">
            {code.map((line, i) => (
              <span
                key={line.text}
                className={line.indent ? 'type type--indent' : 'type'}
                style={{ animationDelay: `${0.4 + 0.65 * i}s` }}
              >
                {line.text}
              </span>
            ))}
            <span className="cursor" style={{ animationDelay: `${0.4 + 0.65 * code.length}s` }} />
          </pre>
        </div>
      </div>
    </section>
  )
}
