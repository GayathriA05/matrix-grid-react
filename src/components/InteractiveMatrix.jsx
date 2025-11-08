import { useMemo, useState } from 'react'

// Utility to create a 2D array with false (unselected)
function makeMatrix(rows, cols) {
  return Array.from({ length: rows }, () => Array.from({ length: cols }, () => false))
}

export default function InteractiveMatrix({ rows = 10, cols = 10 }) {
  const [selected, setSelected] = useState(() => makeMatrix(rows, cols))

  // Flatten to render with CSS Grid
  const flat = useMemo(() => selected.flat(), [selected])

  function toggleCell(r, c) {
    setSelected(prev => {
      const next = prev.map(row => row.slice())
      next[r][c] = !next[r][c]
      return next
    })
  }

  function reset() {
    setSelected(makeMatrix(rows, cols))
  }

  return (
    <div>
      <div className="toolbar">
        <button onClick={reset}>Reset</button>
        <span className="badge">
          Selected: {flat.filter(Boolean).length}
        </span>
        <div className="legend">
          <span className="swatch" />
          <span>Selected cell</span>
        </div>
      </div>

      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        }}
      >
        {selected.map((row, r) =>
          row.map((isOn, c) => (
            <div
              key={`${r}-${c}`}
              className={`cell ${isOn ? 'selected' : ''}`}
              onClick={() => toggleCell(r, c)}
              role="button"
              aria-pressed={isOn}
              aria-label={`Cell ${r + 1}, ${c + 1}`}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === ' ' || e.key === 'Enter') {
                  e.preventDefault()
                  toggleCell(r, c)
                }
              }}
            >
              {r + 1}×{c + 1}
            </div>
          ))
        )}
      </div>
    </div>
  )
}
