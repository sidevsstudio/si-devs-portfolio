import { cn } from '@/lib/utils'

type LogoProps = {
  /** Use "chalk" on dark/Obsidian surfaces, "obsidian" on light surfaces. */
  variant?: 'obsidian' | 'chalk'
  className?: string
}

export function Logo({ variant = 'obsidian', className }: LogoProps) {
  const isChalk = variant === 'chalk'

  return (
    <svg
      width="259.96515"
      height="77.109318"
      viewBox="0 0 259.96515 77.109318"
      className={cn('h-8 w-auto select-none', className)}
      aria-label="SI Devs"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(-83.476503,-49.671117)">
        <g transform="translate(15.405904,-1.5045234)">
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: 'italic',
              fontWeight: 'bold',
              fontSize: '70.5556px',
              fontFamily: "'Fraunces 72pt Soft', var(--font-serif), ui-serif, Georgia, serif",
              fill: isChalk ? 'var(--horizon, #7494ea)' : 'var(--ember, #f15025)',
              strokeWidth: 0.515,
            }}
            x="171.11868"
            y="127.47357"
          >
            <tspan
              style={{
                fontStyle: 'italic',
                fontWeight: 'bold',
                fontSize: '70.5556px',
                fontFamily: "'Fraunces 72pt Soft', var(--font-serif), ui-serif, Georgia, serif",
                fill: isChalk ? 'var(--horizon, #7494ea)' : 'var(--ember, #f15025)',
                strokeWidth: 0.515,
              }}
              x="171.11868"
              y="127.47357"
            >
              Devs
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: 'italic',
              fontWeight: 'bold',
              fontSize: '105.833px',
              fontFamily: "'Fraunces 72pt Soft', var(--font-serif), ui-serif, Georgia, serif",
              fill: isChalk ? 'var(--chalk, #f3f1ec)' : 'var(--obsidian, #15130f)',
              strokeWidth: 0.515,
            }}
            x="65.943352"
            y="126.63457"
          >
            <tspan
              style={{
                fontStyle: 'italic',
                fontWeight: 'bold',
                fontSize: '105.833px',
                fontFamily: "'Fraunces 72pt Soft', var(--font-serif), ui-serif, Georgia, serif",
                fill: isChalk ? 'var(--chalk, #f3f1ec)' : 'var(--obsidian, #15130f)',
                strokeWidth: 0.515,
              }}
              x="65.943352"
              y="126.63457"
            >
              Si
            </tspan>
          </text>
        </g>
      </g>
    </svg>
  )
}

