import { useState } from 'react'
import './App.css'
import SimpleGrid from './components/SimpleGrid.jsx'
import InteractiveMatrix from './components/InteractiveMatrix.jsx'

export default function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="title">Matrix / Grid Visualizations (React + Vite)</div>
        <div className="credit">
          Built by <a href="https://github.com/GayathriA05" target="_blank" rel="noreferrer">@GayathriA05</a>
        </div>
      </header>

      <section className="card" style={{ marginBottom: 18 }}>
        <div className="section-title">A) Simple Grid (static 8×5)</div>
        <SimpleGrid rows={5} cols={8} />
      </section>

      <section className="card">
        <div className="section-title">B) Interactive Matrix (multi-select + reset)</div>
        <InteractiveMatrix rows={10} cols={10} />
        <div className="footer">
          Tip: Click to select multiple cells. Click again to unselect. Use the Reset button to clear.
        </div>
      </section>
    </div>
  )
}
