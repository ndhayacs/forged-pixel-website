export default function FinalCTA() {
  return (
    <section className="final pad" id="join">
      <div className="wrap">
        <h2 className="reveal">
          Make what you love.<br />
          <span className="em">Keep what you earn.</span>
        </h2>
        <p className="reveal">
          Forge your own. The path is clear — all that's missing is what you'll build.
        </p>
        <div
          className="reveal"
          style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a href="#" className="btn btn-primary">Start building →</a>
          <a href="#manifesto" className="btn btn-ghost">Read the manifesto</a>
        </div>
      </div>
    </section>
  )
}
