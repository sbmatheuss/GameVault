import { useState } from 'react'
import '../styles/Filters.css'
import { SlidersHorizontal } from 'lucide-react'

export function Filters() {
  const [genres, setGenres] = useState({ rpg: false, fps: false, action: false, adventure: false })
  const [platforms, setPlatforms] = useState({ pc: false, console: false })
  const [priceMax, setPriceMax] = useState(70)
  const [rating, setRating] = useState<number | null>(null)

  const toggle = (obj: any, set: any, key: string) =>
    set({ ...obj, [key]: !obj[key] })

  return (
    <div className="filters-container">
      <div className="filters-header">
        <SlidersHorizontal size={14} color="var(--text-muted)" />
        <span className="filters-title">Filtros</span>
        <button className="filters-reset" onClick={() => {
          setGenres({ rpg: false, fps: false, action: false, adventure: false })
          setPlatforms({ pc: false, console: false })
          setPriceMax(70)
          setRating(null)
        }}>Limpar</button>
      </div>

      <div className="filter-body">
        {/* Gênero */}
        <div className="filter-group">
          <p className="filter-group-title">Gênero</p>
          {(['RPG', 'FPS', 'Ação', 'Aventura'] as const).map((label, i) => {
            const key = ['rpg', 'fps', 'action', 'adventure'][i] as keyof typeof genres
            return (
              <label key={key} className="filter-option">
                <input
                  type="checkbox"
                  checked={genres[key]}
                  onChange={() => toggle(genres, setGenres, key)}
                />
                {label}
              </label>
            )
          })}
        </div>

        {/* Plataforma */}
        <div className="filter-group">
          <p className="filter-group-title">Plataforma</p>
          {(['PC', 'Console'] as const).map((label, i) => {
            const key = ['pc', 'console'][i] as keyof typeof platforms
            return (
              <label key={key} className="filter-option">
                <input
                  type="checkbox"
                  checked={platforms[key]}
                  onChange={() => toggle(platforms, setPlatforms, key)}
                />
                {label}
              </label>
            )
          })}
        </div>

        {/* Preço */}
        <div className="filter-group">
          <p className="filter-group-title">Faixa de Preço</p>
          <div className="price-range-display">
            <span>$0</span>
            <span>${priceMax.toFixed(2)}</span>
          </div>
          <div className="range-track">
            <div className="range-fill" style={{ width: `${(priceMax / 100) * 100}%` }} />
            <input
              type="range"
              className="price-range-input"
              min={0}
              max={100}
              value={priceMax}
              onChange={e => setPriceMax(Number(e.target.value))}
            />
          </div>
        </div>

        {/* Avaliação */}
        <div className="filter-group">
          <p className="filter-group-title">Avaliação mínima</p>
          <div className="rating-options">
            {[5, 4, 3, 2].map(r => (
              <button
                key={r}
                className={`rating-chip ${rating === r ? 'active' : ''}`}
                onClick={() => setRating(rating === r ? null : r)}
              >
                <svg className="star-icon" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                {r}+
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}