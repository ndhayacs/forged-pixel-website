const cells = [
  {
    icon: (
      <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 3v18M5 8l7-5 7 5" /><circle cx="12" cy="14" r="3" />
      </svg>
    ),
    title: 'You choose the work',
    body: "No assigned projects. No building someone else's vision. You make what calls to you.",
  },
  {
    icon: (
      <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" />
      </svg>
    ),
    title: "You can't be fired",
    body: "Your work is yours. There's no boss who can take your project away. Job security through ownership.",
  },
  {
    icon: (
      <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" /><circle cx="12" cy="12" r="4" />
      </svg>
    ),
    title: 'You keep what you earn',
    body: 'A modest 20% to publish, operate and grow — never a controlling cut. The rest is yours, split how your team decides.',
  },
  {
    icon: (
      <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
      </svg>
    ),
    title: 'Never alone in the grind',
    body: 'Our AI-powered operator sets milestones and keeps your project moving — so ideas ship instead of stalling.',
  },
  {
    icon: (
      <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M4 20h16M7 20V9M12 20V4M17 20v-7" />
      </svg>
    ),
    title: 'A real growth ladder',
    body: 'From your first $2K project to a Triple-A team shipping worldwide — guided at every rung.',
  },
  {
    icon: (
      <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
      </svg>
    ),
    title: 'Global from day one',
    body: 'A brilliant maker in Nairobi gets the same shot as one in San Francisco. Talent is everywhere — now opportunity is too.',
  },
]

export default function Why() {
  return (
    <section className="pad" id="why">
      <div className="wrap">
        <div className="sec-label reveal">Why creators come here</div>
        <h2 className="sec-title reveal">
          Everything you'd want from a studio —{' '}
          <span className="em">without the studio.</span>
        </h2>
        <div className="grid reveal">
          {cells.map((c, i) => (
            <div className="cell" key={i}>
              {c.icon}
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
