import { SectionHeader } from '../components/SectionHeader'
import { Timeline } from '../components/Timeline'
import { experience } from '../data/cv'

export function Experience() {
  return (
    <section id="experience" className="section">
      <SectionHeader num="02" name="Experience" title="Experience & Clubs" aside={`${experience.length} entries`} />
      <Timeline entries={experience} />
    </section>
  )
}
