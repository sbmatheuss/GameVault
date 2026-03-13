
import { ChevronUp } from 'lucide-react';


export function Filters() {
  return (
    <aside className="filters-sidebar">
      <h2 className="filters-title">FILTERS</h2>

      {/* Seção de Gênero */}
      <div className="filter-group">
        <div className="filter-header">
          <span>Genre</span>
          <ChevronUp size={18} />
        </div>
        <div className="filter-options">
          <label className="checkbox-container">
            <input type="checkbox" /> <span className="checkmark"></span> RPG
          </label>
          <label className="checkbox-container">
            <input type="checkbox" /> <span className="checkmark"></span> FPS
          </label>
          <label className="checkbox-container">
            <input type="checkbox" /> <span className="checkmark"></span> Action
          </label>
        </div>
      </div>

      {/* Seção de Plataforma */}
      <div className="filter-group">
        <div className="filter-header">
          <span>Platform</span>
          <ChevronUp size={18} />
        </div>
        <div className="filter-options">
          <label className="checkbox-container">
            <input type="checkbox" /> <span className="checkmark"></span> PC
          </label>
          <label className="checkbox-container">
            <input type="checkbox" /> <span className="checkmark"></span> Console
          </label>
        </div>
      </div>

      {/* Seção de Preço */}
      <div className="filter-group">
        <div className="filter-header">
          <span>Price Range</span>
        </div>
        <div className="price-range">
          <span className="price-display">$30.99 - $69.99</span>
          <div className="range-slider">
            <div className="slider-track"></div>
            <div className="slider-thumb left"></div>
            <div className="slider-thumb right"></div>
          </div>
        </div>
      </div>

      
      <div className="filter-group">
      
        
      </div>
    </aside>
  );
}