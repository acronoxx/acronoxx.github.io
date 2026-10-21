import { useEffect, useState } from 'react'
import { Logo } from './Logo'

const items = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Toolkit' },
  { id: 'contact', label: 'Contact' },
]

type Theme = 'light' | 'dark'

function currentTheme(): Theme {
  const set = document.documentElement.dataset.theme
  if (set === 'light' || set === 'dark') return set
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function Nav() {
  const [theme, setTheme] = useState<Theme>(currentTheme)
  const [active, setActive] = useState('')

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    try {
      localStorage.setItem('theme', next)
    } catch {
      // storage unavailable: the choice only lasts for this visit
    }
    setTheme(next)
  }

  // highlight the section currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    for (const { id } of items) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <nav className="nav">
      <a href="#top" className="nav__brand" aria-label="Back to top">
        <Logo className="nav__logo" />
        <span className="brand">acronox</span>
      </a>
      <ul className="nav__links">
        {items.map((item, i) => (
          <li key={item.id}>
            <a href={`#${item.id}`} className={`mono${active === item.id ? ' is-active' : ''}`}>
              <span className="nav__num">{String(i + 1).padStart(2, '0')}</span> {item.label}
            </a>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="nav__theme mono"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
      >
        {theme === 'dark' ? 'Light' : 'Dark'} ed.
      </button>
    </nav>
  )
}
