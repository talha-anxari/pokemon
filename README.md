# 🔴 Pokédex Web App

A production-grade Pokédex built with React, featuring a sleek dark UI with neon accents, real-time PokéAPI integration, and persistent favorites — designed as a portfolio showcase of modern frontend architecture.

## ✨ Features

- 🔍 **Instant Search** — Debounced live search by Pokémon name
- ❤️ **Persistent Favorites** — Save favorites locally with Zustand, survives page refresh
- 📊 **Detailed Stats** — Full breakdown of stats, types, and abilities per Pokémon
- 🎨 **Type-Based Theming** — Cards and detail pages glow according to each Pokémon's type
- ⚡ **Smart Caching** — React Query handles caching, loading, and error states out of the box
- 📱 **Fully Responsive** — Optimized layout across mobile, tablet, and desktop
- 🌙 **Dark Neon UI** — Custom dark theme with glassmorphism and glow effects

## 🛠️ Tech Stack

**Core:** React · Vite · React Router

**Data & State:** Axios · TanStack React Query · Zustand

**Styling & UI:** Tailwind CSS · shadcn/ui · Radix UI · class-variance-authority

**Icons:** Lucide React · React Icons

## 📄 Pages

| Route | Description |
|---|---|
| `/` | Landing page — hero, features, stats, and the full Pokémon grid |
| `/pokemon/:name` | Detailed Pokémon page with stats and abilities |
| `/favorites` | Saved favorite Pokémon |
| `/about` | Project background and tech stack |
| `/contact` | Get in touch form |

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/talha-anxari/pokemon-web.git

# Install dependencies
npm install

# Run the dev server
npm run dev
```

## 📦 Data Source

All Pokémon data is fetched live from [PokéAPI](https://pokeapi.co).

## 👤 Author

Built by **Talha** — [GitHub](https://github.com/talha-anxari)
