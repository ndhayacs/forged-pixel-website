const steps = [
  { n: 'STEP 01', title: 'Join', body: 'Solo or as a team. Find collaborators by skill and need.' },
  { n: 'STEP 02', title: 'Build', body: 'Your project, your team, your split. We keep you on task.' },
  { n: 'STEP 03', title: 'Ship', body: 'We publish across major storefronts after a quick content review.' },
  { n: 'STEP 04', title: 'Earn', body: 'We collect and distribute revenue to your accounts — transparently.' },
  { n: 'STEP 05', title: 'Rise', body: "Prove yourself and we'll help fund your next project." },
]

export default function How() {
  return (
    <section className="pad" id="how" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="wrap">
        <div className="sec-label reveal">How it works</div>
        <h2 className="sec-title reveal">
          Five steps from idea <span className="em">to income.</span>
        </h2>
        <div className="steps">
          {steps.map((s) => (
            <div className="step reveal" key={s.n}>
              <div className="n">{s.n}</div>
              <h4>{s.title}</h4>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
