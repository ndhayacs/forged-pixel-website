const tags = [
  'People over profit',
  'How you earn it matters',
  'Lift as you rise',
  'Mission locked in',
  'Radical transparency',
  'Autonomy non-negotiable',
  'Creativity is the point',
]

export default function Belief() {
  return (
    <section className="belief pad" id="belief">
      <div className="wrap">
        <div className="sec-label reveal" style={{ textAlign: 'center' }}>
          What we believe
        </div>
        <div className="big reveal">
          Prosperity <span className="em">wide,</span> not tall.
        </div>
        <p className="reveal">
          A world with ten thousand creators making millions through their own work beats a world with ten billionaires sitting atop armies of underpaid labor.
        </p>
        <p className="reveal">
          That's why we're locked to our mission forever — and why our profits flow back into creative communities worldwide, reviewed openly, every year.
        </p>
        <div className="tags reveal">
          {tags.map((t) => (
            <span className="tag" key={t}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
