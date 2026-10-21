type Props = { num: string; name: string; title: string; aside?: string }

export function SectionHeader({ num, name, title, aside }: Props) {
  return (
    <header className="section-header" data-reveal>
      <div className="section-header__top">
        <span className="mono tiny muted">
          {num} / {name}
        </span>
        {aside && <span className="mono tiny muted">{aside}</span>}
      </div>
      <div className="section-header__title">
        <h2 className="serif">{title}</h2>
        <span className="rule" />
      </div>
    </header>
  )
}
