const items = [
  { text: 'Your work. ', bold: 'Your wealth.', suffix: ' Your way.' },
  { text: 'No bosses. ', bold: 'No ceilings.', suffix: ' No fear.' },
  { text: 'Make what you love. ', bold: 'Keep what you earn.', suffix: '' },
  { text: 'Prosperity ', bold: 'wide,', suffix: ' not tall.' },
]

export default function Marquee() {
  const doubled = [...items, ...items]

  return (
    <div className="marquee">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i}>
            {item.text}<b>{item.bold}</b>{item.suffix}
          </span>
        ))}
      </div>
    </div>
  )
}
