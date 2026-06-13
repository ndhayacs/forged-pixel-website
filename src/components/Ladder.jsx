const rungs = [
  { tier: 'Individual', meta: '1 — solo', rev: '$2K–$30K', w: '8%' },
  { tier: 'Small', meta: '3–6 people', rev: '~$100K', w: '16%' },
  { tier: 'Medium', meta: '6–15 people', rev: '~$500K', w: '28%' },
  { tier: 'Large', meta: '50–100 people', rev: 'up to $10M', w: '45%' },
  { tier: 'Extra Large', meta: '200–300 people', rev: '$100M–$200M', w: '65%' },
  { tier: 'Platinum', meta: '~1,000 people', rev: '$500M+', w: '82%' },
  { tier: 'Triple A', meta: '1,000–3,000', rev: '$1B+', w: '100%' },
]

export default function Ladder() {
  return (
    <section className="ladder pad" id="ladder">
      <div className="wrap">
        <div className="sec-label reveal">The growth ladder</div>
        <h2 className="sec-title reveal">
          Start where you are.{' '}
          <span className="em">Climb as far as you want.</span>
        </h2>
        <p className="reveal" style={{ color: 'var(--ash)', maxWidth: '54ch' }}>
          Guidance, not rules — you decide your team size and how revenue is shared. Here's what each rung tends to look like.
        </p>
        <div className="rungs reveal">
          {rungs.map((r) => (
            <div className="rung" key={r.tier} style={{ '--w': r.w }}>
              <div className="tier">{r.tier}</div>
              <div className="meta">{r.meta}</div>
              <div className="rev">{r.rev}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
