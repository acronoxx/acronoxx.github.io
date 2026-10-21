// All the resume content lives here: edit this file, the sections only render it.
// Source: Bucket CV (updated 21 October 2026).

export const profile = {
  name: 'Alexis Baret',
  alias: 'Acronox',
  role: 'Software Engineering Student',
  focus: ['Distributed systems', 'Interfaces', 'AI agents'],
  school: 'IMT Atlantique',
  location: 'Brest · France',
  coordinates: '48.39°N 4.49°W',
  site: 'acronoxx.github.io',
  email: 'alexisbaret.pro@gmail.com',
  availability: 'Looking for a 4-month internship from April',
  resume: '', // path to a PDF in /public, e.g. '/alexis-baret-cv.pdf'
}

export const links = [
  { label: 'GitHub', href: 'https://github.com/acronoxx', handle: '@acronoxx' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/alexis-baret-4786a3374', handle: 'alexis-baret' },
  { label: 'Email', href: `mailto:${profile.email}`, handle: profile.email },
  { label: 'Ko-fi', href: 'https://ko-fi.com/acronox', handle: 'acronox' },
]

export const about = {
  headline: 'I build things to understand them.',
  paragraphs: [
    'I like knowing what happens under the hood: how nodes agree, how interfaces feel, how agents decide.',
    'After two years of MP2I / MPI prep in Réunion, I joined IMT Atlantique in Brest, where I follow the distributed software engineering track.',
  ],
  now: 'Right now: failure detection in Elixir, a generative banking UI, and too many lab reports.',
  facts: [
    { label: 'Based', value: 'Brest · open to relocate' },
    { label: 'School', value: 'IMT Atlantique' },
    { label: 'Track', value: 'Distributed software' },
    { label: 'Internship', value: 'April · 4 months' },
  ],
}

export const languages = [
  { name: 'French', level: 'Native' },
  { name: 'English', level: 'B2 · TOEIC 915' },
  { name: 'Spanish', level: 'B2' },
  { name: 'Japanese', level: 'Beginner' },
]

export type Entry = {
  period: string
  title: string
  org: string
  place: string
  points: string[]
  tags?: string[]
}

export const experience: Entry[] = [
  {
    period: 'Jun 2026 · 4 weeks',
    title: 'Retail internship',
    org: 'RunMarket',
    place: 'Saint-André, Réunion',
    points: [
      'Ran 3 supermarket aisles on my own within a team of 50, with very little supervision.',
      'Shelving, labelling and facing, 1 to 3 pallets a day; helped customers find their way.',
    ],
    tags: ['Teamwork', 'Autonomy', 'Customer care'],
  },
  {
    period: '2025 — 2026',
    title: 'Robotics club member',
    org: 'IMT Atlantique',
    place: 'Brest',
    points: ['Built basic electronic systems and designed small circuits.'],
    tags: ['Electronics'],
  },
  {
    period: '2026 — Present',
    title: 'Chess club member',
    org: 'IMT Atlantique',
    place: 'Brest',
    points: ['About one session a week, matches between members. 1100 Elo, still fighting the clock.'],
  },
  {
    period: '2019 · 1 week',
    title: 'Observation internship',
    org: 'Pharmacie Timol',
    place: 'Saint-André, Réunion',
    points: ['First look at the working world: how a pharmacy runs, stock and labelling.'],
  },
]

export const education: Entry[] = [
  {
    period: '2025 — 2028',
    title: 'Engineering degree — Distributed software engineering (ILSD)',
    org: 'IMT Atlantique',
    place: 'Brest',
    points: [
      'First-year GPA 3.83/4: top 20 out of 450 students.',
      'Admitted through the Mines-Ponts entrance exam (MPI track), rank 261.',
      'Algorithms, distributed systems, networks, interactive systems engineering.',
    ],
  },
  {
    period: '2023 — 2025',
    title: 'Preparatory classes MP2I / MPI',
    org: 'Lycée Leconte de Lisle',
    place: 'Saint-Denis, Réunion',
    points: [
      'Ranked 2nd of 20. Admissible to ENS Paris-Saclay, top admissible at CCINP.',
      'Maths, physics and computer science: OCaml, C, SQL, graph theory, logic.',
      'TIPE: automatic exposure correction for landscape photos.',
    ],
    tags: ['OCaml', 'C', 'SQL'],
  },
  {
    period: '2020 — 2023',
    title: 'Baccalauréat — Maths & Physics-Chemistry',
    org: 'Lycée Sarda Garriga',
    place: 'Saint-André, Réunion',
    points: ['Highest honours (mention Très bien), 17.42/20, with advanced maths option.'],
  },
]

export const honours = [
  { year: '2026', text: 'Top 20 of 450 in first year at IMT Atlantique (GPA 3.83/4)' },
  { year: '2026', text: 'TOEIC — 915 points' },
  { year: '2026', text: 'TryHackMe — Pre Security learning path' },
  { year: '2025', text: 'Admissible to ENS Paris-Saclay · top admissible at CCINP' },
  { year: '2023', text: 'Baccalauréat with highest honours (17.42/20)' },
]

export type Project = {
  name: string
  period: string
  kind: string
  summary: string
  result?: string
  stack: string[]
  href?: string
}

export const projects: Project[] = [
  {
    name: 'Smart grid manager',
    period: 'May 2026',
    kind: 'Back-end · Team of 3',
    summary:
      'Web app to run and monitor smart electrical grids across a city. I did all the development: a full CRUD API in Java with a model / service / server layered architecture.',
    result: '15 routes, all covered by automated tests · graded A',
    stack: ['Java', 'SQL', 'JavaScript', 'Python'],
  },
  {
    name: 'GitLab penetration test',
    period: 'Dec 2025',
    kind: 'Cybersecurity · Wavegame by Wavestone',
    summary:
      'Security audit of an up-to-date GitLab instance and its CI/CD pipelines: exposed CI token, SSRF, poisoned pipeline, root code execution on runners. Wrapped up in a prioritised report.',
    result: '13 vulnerabilities found, 7 of high severity',
    stack: ['GitLab CI/CD', 'GitLab API', 'Pentest'],
  },
  {
    name: 'Text-to-speech web service',
    period: 'Feb — May 2026',
    kind: 'Web service · Team of 5',
    summary:
      'API giving access to Acapela speech synthesis, with an admin interface for user tokens and credits. I owned the architecture, user management, password hashing and role-based routes.',
    result: 'Working prototype delivered in 4 months',
    stack: ['Java', 'Vert.x', 'JavaScript'],
  },
  {
    name: 'PyRat pathfinding',
    period: 'Sep — Dec 2025',
    kind: 'Algorithms · Solo',
    summary:
      'Strategies for a rat collecting cheese in a maze, solo and 1 vs 1: Dijkstra, greedy, exhaustive search with backtracking, 2-opt route optimisation.',
    result: '5+ algorithms designed and compared',
    stack: ['Python', 'Graphs'],
  },
  {
    name: 'Solar irradiance sensor',
    period: 'Sep — Dec 2025',
    kind: 'Embedded · Team of 5',
    summary:
      'Sensor that infers solar irradiance from a temperature reading, built to last and handle heat. I wrote the Arduino code, soldered, and 3D-printed the case.',
    result: 'Precision around a thousandth of a degree',
    stack: ['Arduino', 'Electronics', '3D printing'],
  },
  {
    name: 'Exposure correction (TIPE)',
    period: '2023 — 2025',
    kind: 'Image processing · Solo',
    summary:
      'Algorithm that automatically fixes the exposure of landscape photos by searching for maximum luminous entropy. Presented at the 2025 entrance exams.',
    result: 'About half the images come out better exposed',
    stack: ['Python', 'Pillow'],
  },
]

// Technical index, most-liked first (same order as the GitHub profile)
export const skills = [
  'Python', 'TypeScript', 'Elixir', 'React', 'JavaScript', 'Next.js', 'Node.js', 'LangChain',
  'Docker', 'Git', 'C', 'C++', 'Java', 'Supabase', 'Pandas', 'NumPy',
  'HTML5', 'CSS3', 'Vite', 'Figma', 'LaTeX', 'Arduino', 'Go', 'OCaml',
  'Firebase', 'Google Cloud', 'MySQL', 'SQLite', 'PHP', 'WordPress',
]

export const offHours = [
  { label: 'Gym', title: 'Push · Pull · Legs', text: 'Five sessions a week since 2025, no skipping.' },
  { label: 'Games', title: 'Two extremes', text: 'The Finals · Animal Crossing · Minecraft redstone' },
  { label: 'Chess', title: '1100 Elo', text: 'Weekly club nights. Time management is the real opponent.' },
  { label: 'Learning', title: 'New languages', text: 'Go, Elixir and TypeScript on Exercism, tracked in learning-journey.' },
]
