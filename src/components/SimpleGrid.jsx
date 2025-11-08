export default function SimpleGrid({ rows = 5, cols = 8 }) {
  const cells = Array.from({ length: rows * cols })
  return (
    <div className="grid simple">
      {cells.map((_, i) => (
        <div key={i} className="cell">{i + 1}</div>
      ))}
    </div>
  )
}
