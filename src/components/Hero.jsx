import { useEffect, useRef } from 'react'

export default function Hero() {
  const sparksRef = useRef(null)

  useEffect(() => {
    const container = sparksRef.current
    for (let i = 0; i < 26; i++) {
      const s = document.createElement('div')
      s.className = 'spark'
      s.style.left = Math.random() * 100 + '%'
      s.style.animationDuration = (5 + Math.random() * 7) + 's'
      s.style.animationDelay = (Math.random() * 8) + 's'
      const sc = 0.6 + Math.random() * 1.6
      s.style.transform = `scale(${sc})`
      container.appendChild(s)
    }
  }, [])

  return (
    <header className="hero" id="top">
      <div className="sparks" ref={sparksRef}></div>
      <div className="wrap hero-inner">
        <div className="eyebrow">A home for makers</div>
        <h1>
          <span>Build for <span className="em">yourself.</span></span>
          <span>Rise with everyone.</span>
        </h1>
        <p className="lede">
          Forged Pixel is where developers, artists, writers, and designers build what they love — for themselves, not for someone else's fortune.{' '}
          <b>You bring the talent. We clear the path. You keep what you earn.</b>
        </p>
        <div className="hero-cta">
          <a href="#join" className="btn btn-primary">Start building →</a>
          <a href="#manifesto" className="btn btn-ghost">Read the manifesto</a>
        </div>
      </div>
    </header>
  )
}
