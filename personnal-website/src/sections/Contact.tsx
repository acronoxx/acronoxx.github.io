import { Logo } from '../components/Logo'
import { SectionHeader } from '../components/SectionHeader'
import { links, profile } from '../data/cv'

const year = new Date().getFullYear()

export function Contact() {
  return (
    <section id="contact" className="section">
      <SectionHeader num="07" name="Contact" title="Let's Talk" />
      <div className="contact" data-reveal>
        <p className="serif lead">
          {profile.availability}, in France or abroad. A project, a question, or just distributed systems talk? My
          inbox is open.
        </p>
        <a className="contact__mail serif" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <ul className="contact__links">
          {links.map((link) => {
            const external = link.href.startsWith('http')
            return (
              <li key={link.label}>
                <a href={link.href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>
                  <span className="mono tiny muted">{link.label}</span>
                  <span className="serif">{link.handle}</span>
                  <span className="arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>

      <footer className="signature">
        <Logo className="signature__logo" />
        <div className="signature__text">
          <p className="serif signature__title">See you in the commits.</p>
          <p className="mono tiny muted">
            {profile.name} · {profile.alias} · {profile.location}
          </p>
        </div>
        <div className="signature__right mono tiny">
          <span>{profile.site}</span>
          <span className="hero__rule" />
          <span className="muted">Resume / Edition 001 · © {year}</span>
        </div>
      </footer>
    </section>
  )
}
