import { useState } from 'react'
import '../styles/global.css'
import '../styles/Home.css'
import '../styles/Filters.css'

import cyberpunkImg from '../images/card-cyberpunk.jpg'
import LogoImg from '../images/logo-gamevault.png'
import {
  User, Heart, ShoppingCart, Search,
  Rocket, Crown, Calendar, Monitor, X, ShoppingBag
} from 'lucide-react'
import { FaPlaystation, FaXbox } from 'react-icons/fa'
import { Filters } from '../components/filters'
import { useNavigate } from 'react-router'

const games = [
  { id: 1, title: 'Starfield',          platform: 'PC · XBOX', price: '$69.99', rating: 4.8 },
  { id: 2, title: 'Final Fantasy XVI',  platform: 'PC · PS5',  price: '$69.99', rating: 4.8 },
  { id: 3, title: 'Street Fighter 6',   platform: 'PC · PS5',  price: '$69.99', rating: 4.8 },
  { id: 4, title: 'Spider-Man 2',       platform: 'PC · PS5',  price: '$69.99', rating: 4.8 },
  { id: 5, title: 'Zelda: TotK',        platform: 'Switch',    price: '$69.99', rating: 4.6 },
]

const cartItems = [
  { id: 1, name: 'Spider-Man 2', price: '$89.99', rating: 4 },
  { id: 2, name: 'Zelda: TotK',  price: '$79.99', rating: 4 },
  { id: 3, name: 'AC Mirage',    price: '$79.99', rating: 3 },
]

const categories = [
  { id: 1, label: 'Novos Lançamentos', icon: <Rocket size={20} />,       color: 'blue'  },
  { id: 2, label: 'Mais Vendidos',     icon: <Crown size={20} />,        color: 'blue'  },
  { id: 3, label: 'Pré-encomendas',   icon: <Calendar size={20} />,     color: 'cyan'  },
  { id: 4, label: 'PC',               icon: <Monitor size={20} />,      color: 'white' },
  { id: 5, label: 'PS5',              icon: <FaPlaystation size={20} />, color: 'white' },
  { id: 6, label: 'Xbox',             icon: <FaXbox size={20} />,       color: 'green' },
]

function StarRating({ value }: { value: number }) {
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {[1, 2, 3, 4, 5].map(i => (
        <svg key={i} width="12" height="12" viewBox="0 0 24 24" style={{ fill: i <= Math.round(value) ? 'var(--accent-gold)' : 'var(--border-normal)' }}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  )
}

export function Home() {
  const navigate = useNavigate()
  const [cartOpen, setCartOpen] = useState(false)
  const [cart, setCart] = useState(cartItems)

  const removeFromCart = (id: number) => setCart(c => c.filter(i => i.id !== id))

  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo-container">
          <div className="logo-icon">
            <img src={LogoImg} width="22" alt="GV" style={{ filter: 'brightness(10)' }} />
          </div>
          <span className="logo-text">GAME<span>VAULT</span></span>
        </div>

        <div className="search-wrapper">
          <div className="search-container">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="Buscar Elden Ring, jogos PS5..."
              className="search-input"
            />
          </div>
        </div>

        <div className="nav-actions">
          <div  onClick={() => navigate("/account")} className="nav-item">
            <User size={18} />
            <span>Conta</span>
          </div>
          <div onClick={() => navigate("/")} className="nav-item">
            <Heart size={18} />
            <span>Lista</span>
          </div>
          <div
            className={`nav-item ${cartOpen ? 'active' : ''}`}
            style={{ position: 'relative' }}
            onClick={() => setCartOpen(o => !o)}
          >
            <ShoppingCart size={18} />
            <span className="cart-badge">{cart.length}</span>
            <span>Carrinho</span>
          </div>
        </div>
      </nav>

      {/* Quick Cart Panel */}
      <div className={`quick-cart-panel ${cartOpen ? 'open' : ''}`}>
        <div className="quick-cart-header">
          <span className="quick-cart-title">Carrinho Rápido</span>
          <button className="quick-cart-close" onClick={() => setCartOpen(false)}>
            <X size={16} />
          </button>
        </div>
        <div className="quick-cart-items">
          {cart.map(item => (
            <div key={item.id} className="quick-cart-item">
              <div className="quick-cart-img">
                <div style={{ width: '100%', height: '100%', background: 'var(--bg-elevated)' }} />
              </div>
              <div className="quick-cart-item-info">
                <div className="quick-cart-item-name">{item.name}</div>
                <div className="quick-cart-item-stars"><StarRating value={item.rating} /></div>
                <div className="quick-cart-item-price">{item.price}</div>
              </div>
              <button className="quick-cart-remove" onClick={() => removeFromCart(item.id)}>
                <X size={14} />
              </button>
            </div>
          ))}
        </div>
        <button className="checkout-btn">Finalizar Compra</button>
      </div>

      {/* Main Layout */}
      <div className="main-layout">
        <aside className="sidebar">
          <Filters />
        </aside>

        <main className="content-side">
          {/* Featured Banner */}
          <div className="featured-card">
            <img src={cyberpunkImg} alt="Cyberpunk 2077" className="featured-img" />
            <div className="featured-overlay">
              <span className="featured-label">Lançamento em Destaque</span>
              <h2 className="featured-title">Cyberpunk 2077 — Phantom Liberty</h2>
              <div className="featured-stars">
                <StarRating value={4.8} />
                <span className="featured-rating-text">4.8</span>
              </div>
              <div className="featured-info">
                <span className="price">$69.99</span>
                <button className="details-btn">Ver Detalhes</button>
              </div>
            </div>
            <div className="featured-dots">
              <div className="dot active" />
              <div className="dot" />
              <div className="dot" />
            </div>
          </div>

          {/* Categories */}
          <section className="categories-container">
            <div className="section-header">
              <div className="section-line" />
              <h3 className="categories-title">Navegar por Categorias</h3>
            </div>
            <div className="categories-grid">
              {categories.map(cat => (
                <div key={cat.id} className="category-item">
                  <div className={`category-icon-wrap ${cat.color}`}>
                    {cat.icon}
                  </div>
                  <span className="category-name">{cat.label}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Latest Releases */}
          <section className="latest-section">
            <div className="section-header">
              <div className="section-line" />
              <h3 className="section-title">Últimos Lançamentos</h3>
            </div>
            <div className="games-grid">
              {games.map(game => (
                <div key={game.id} className="game-card">
                  <div className="game-img-wrap">
                    <div className="game-img-placeholder">
                      <ShoppingBag size={32} style={{ opacity: 0.2 }} />
                    </div>
                    <div className="platform-badges">
                      {game.platform.split(' · ').map(p => (
                        <span key={p} className="platform-badge">{p}</span>
                      ))}
                    </div>
                    <div className="game-rating-badge">
                      <svg width="10" height="10" viewBox="0 0 24 24" style={{ fill: 'var(--accent-gold)' }}>
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                      <span>{game.rating}</span>
                    </div>
                  </div>
                  <div className="game-info">
                    <div className="game-price-row">
                      <h4 className="game-title">{game.title}</h4>
                    </div>
                    <div className="game-price-row">
                      <span className="game-price">{game.price}</span>
                    </div>
                    <button className="add-to-cart-btn">
                      <ShoppingCart size={13} />
                      Adicionar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-col">
            <p className="footer-col-title">Suporte</p>
            <a href="#">Links</a>
            <a href="#">Gamers</a>
          </div>
          <div className="footer-col">
            <p className="footer-col-title">Sobre</p>
            <a href="#">Sobre</a>
            <a href="#">Indoorplays</a>
          </div>
          <div className="footer-col">
            <p className="footer-col-title">Comunidade</p>
            <a href="#">Contato</a>
            <a href="#">Comunidade</a>
          </div>
          <div className="footer-col" style={{ gridColumn: '1 / -1' }}>
            <p className="footer-col-title">Newsletter</p>
            <div className="newsletter-form">
              <input type="email" className="newsletter-input" placeholder="Seu e-mail" />
              <button className="newsletter-btn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}