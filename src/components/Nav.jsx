import { useEffect, useRef } from 'react'
import LogoMark from './LogoMark'

export default function Nav() {
  const navRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      navRef.current.style.background =
        window.scrollY > 40 ? 'rgba(11,7,5,.92)' : ''
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav id="nav" ref={navRef}>
      <a href="#top" className="logo">
        <LogoMark />
        Forged Pixel
      </a>
      <div className="nav-links">
        <a href="#why">Why us</a>
        <a href="#how">How it works</a>
        <a href="#ladder">The ladder</a>
        <a href="#belief">What we believe</a>
        <a href="#join" className="nav-cta">Join</a>
      </div>
    </nav>
  )
}
