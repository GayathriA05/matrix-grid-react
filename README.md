
# matrix-grid-react

A tiny React project (Vite + plain CSS) showcasing:

- **A) Simple Grid** — static CSS Grid layout  
- **B) Interactive Matrix** — multi-select cells + Reset button

Built by **[@GayathriA05](https://github.com/GayathriA05)**.

## ▶️ Quick Start

```bash
# 1) Install deps
npm install

# 2) Run dev server
npm run dev

# 3) Build for production
npm run build && npm run preview
```

## 🧱 Tech

- React 18 + Vite
- CSS Grid (no Tailwind)
- Accessible interactions (keyboard toggle via Space/Enter)

## 📁 Structure

```
matrix-grid-react/
├─ index.html
├─ package.json
├─ vite.config.js
├─ src/
│  ├─ main.jsx
│  ├─ App.jsx
│  ├─ App.css
│  ├─ index.css
│  └─ components/
│     ├─ SimpleGrid.jsx
│     └─ InteractiveMatrix.jsx
```

## 💡 Notes

- `SimpleGrid.jsx` uses CSS Grid to render an `rows × cols` static layout.
- `InteractiveMatrix.jsx` keeps a 2D boolean matrix in state, lets you **multi-select** cells, and **Reset**.
- The project uses **plain CSS** for clarity and portability.

## 🚀 Deploy

- Push this folder to your GitHub as `matrix-grid-react`.
- One-click deploy to **Vercel** or **Netlify** using your repo.
- For GitHub Pages, build and set the `docs` folder (or use a GH Actions workflow).
```

