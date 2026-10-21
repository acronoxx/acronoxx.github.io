// Same "a" + leaf mark as the GitHub profile (acronoxx/scripts/build_profile.py)
const LOGO_A =
  'M201 420Q173.2 420 152.1 409.8Q130.9 399.6 119 381.8Q107.1 364.1 107.1 341.2Q107.1 314.9 120.7 299.9' +
  'Q134.3 284.8 164.5 278.2Q194.6 271.7 244.7 271.7H263.2V264.8Q263.2 247.3 254.2 240Q245.2 232.7 223.3 232.7' +
  'Q211.7 232.7 197.1 235.4Q182.5 238.1 164.5 244.9Q151.3 249.8 142.1 246.4Q132.9 243 127.8 234.7' +
  'Q122.6 226.4 122.9 216.7Q123.1 207 129.2 198.2Q135.3 189.5 147.9 184.6Q171.3 175.8 191 172.9' +
  'Q210.7 170 227.2 170Q267.1 170 293.1 181.4Q319.1 192.9 332 216.4Q344.9 240 344.9 277V375.3' +
  'Q344.9 396.7 334.7 407.8Q324.5 419 305 419Q285.1 419 274.9 407.8Q265.6 398.1 264.2 380.6' +
  'Q261.3 389.4 255.9 396.2Q247.2 407.4 233.1 413.7Q218.9 420 201 420ZM263.2 321.3V312.5H244.7' +
  'Q225.8 312.5 213.4 315.2Q201 317.9 195.1 323.5Q189.3 329 189.3 337.8Q189.3 349 197.3 356.3' +
  'Q205.3 363.6 220.4 363.6Q232.6 363.6 242.1 358.2Q251.5 352.9 257.4 343.4Q263.2 333.9 263.2 321.3Z'
export const LEAF = 'M0-72C38-39.6 38 39.6 0 72C-38 39.6-38-39.6 0-72Z'

type Props = { className?: string; ghost?: boolean }

export function Logo({ className, ghost = false }: Props) {
  return (
    <svg className={className} viewBox="100 66 330 360" aria-hidden="true">
      <path d={LOGO_A} fill={ghost ? 'var(--ghost)' : 'currentColor'} />
      <g transform="translate(358.3 142.8) rotate(36)">
        <path d={LEAF} fill="var(--hero-accent)" />
      </g>
    </svg>
  )
}

export function Leaf({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="-40 -76 80 172" aria-hidden="true">
      <g className="sway">
        <path d={LEAF} fill="var(--hero-accent)" />
        <path d="M0 61.9V-57.6" stroke="var(--vein)" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path
          d="M0-26L14-40M0-26L-14-40M0 4L19-12M0 4L-19-12M0 34L15 20M0 34L-15 20"
          stroke="var(--vein)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <path d="M0 66V92" stroke="var(--hero-accent)" strokeWidth="5" strokeLinecap="round" />
      </g>
    </svg>
  )
}
