import type { Entry } from '../data/cv'

export function Timeline({ entries }: { entries: Entry[] }) {
  return (
    <ol className="timeline">
      {entries.map((entry, i) => (
        <li key={`${entry.org}-${i}`} className="timeline__item" data-reveal>
          <div className="timeline__meta mono">
            <span className="timeline__index">{String(i + 1).padStart(2, '0')}</span>
            <span>{entry.period}</span>
            <span className="muted">{entry.place}</span>
          </div>
          <div className="timeline__body">
            <h3 className="serif">{entry.title}</h3>
            <p className="timeline__org mono">{entry.org}</p>
            <ul>
              {entry.points.map((point) => (
                <li key={point} className="serif">
                  {point}
                </li>
              ))}
            </ul>
            {entry.tags && (
              <div className="tags">
                {entry.tags.map((tag) => (
                  <span key={tag} className="tag mono">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </li>
      ))}
    </ol>
  )
}
