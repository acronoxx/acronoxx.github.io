import { useEffect } from 'react'
import { Nav } from './components/Nav'
import { profile } from './data/cv'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Education } from './sections/Education'
import { Experience } from './sections/Experience'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'

function App() {
  // fade blocks in the first time they scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    )
    document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Nav />
      <div className="page">
        <span className="rail rail--left mono tiny muted">{profile.alias} / Engineering notebook</span>
        <span className="rail rail--right mono tiny muted">
          {profile.location} · {profile.coordinates}
        </span>
        <main>
          <Hero />
          <About />
          <Experience />
          <Education />
          <Projects />
          <Skills />
          <Contact />
        </main>
      </div>
    </>
  )
}

export default App
