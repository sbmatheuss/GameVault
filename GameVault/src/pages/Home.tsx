  import '../styles/Home.css'
  import '../styles/Filters.css'
  import { Filters } from '../components/Filters'

  import images from '../images/card-cyberpunk.jpg'
  import LogoImg from '../images/logo-gamevault.png'
  import {User, Heart, ShoppingCart, Search, Rocket, Crown, Calendar, Monitor} from "lucide-react"

  import { FaPlaystation, FaXbox } from 'react-icons/fa'
  
  

  export function Home() {
  const categories = [
    { id: 1, label: 'Novos lançamentos', icon: <Rocket />, color: 'blue' },
    { id: 2, label: 'Mais vendidos', icon: <Crown />, color: 'blue' },
    { id: 3, label: 'Pré-encomendas', icon: <Calendar />, color: 'blue' },
    { id: 4, label: 'PC', icon: <Monitor />, color: 'white' },
    { id: 5, label: 'PS5', icon: <FaPlaystation />, color: 'white' },
    { id: 6, label: 'Xbox', icon: <FaXbox />, color: 'green' },
  ];

  return (
    <div className="home-container">
      {/* A Navbar permanece no topo, fora do layout de colunas */}
      <nav className="navbar">
        <div className="logo-container">
          <img src={LogoImg} width="90px" alt="GameVault Logo" />
          <span className="logo-text">GAMEVAULT</span>
        </div>

        <div className="search-container">
          <Search />
          <input 
            type="text" 
            placeholder="Search for Elden Ring, PS5 games..." 
            className="search-input"
          />
        </div>

        <div className="nav-actions">
          <div className="nav-item">
            <User />
            <span>Account</span>
          </div>
          <div className="nav-item">
            <Heart />
            <span>Wishlist</span>
          </div>
          <div className="nav-item cart-item">
            <ShoppingCart />
            <span className="cart-badge">3</span>
            <span>Cart</span>
          </div>
        </div>
      </nav>

      {/* NOVO CONTAINER DE LAYOUT: Une o Filtro e o Conteúdo lado a lado */}
      <div className="main-layout">
        
        {/* COLUNA ESQUERDA: Filtros */}
        <aside className="sidebar">
          <Filters />
        </aside>

        {/* COLUNA DIREITA: Banner e Categorias */}
        <main className="content-side">
          
          <div className="featured-card">
            <img 
              src={images} 
              alt="Cyberpunk 2077 Phantom Liberty"
              className="featured-img"
            />
            <div className="featured-overlay">
              <span className="featured-label">LANÇAMENTO EM DESTAQUE:</span>
              <h2 className="featured-title">
                CYBERPUNK 2077 - LIBERDADE FANTASMA
              </h2>
              <div className="featured-info">
                <span className="price">$ 69,99</span>
                <button className="details-btn">Ver detalhes</button>
              </div>
            </div>
          </div>

          <section className="categories-container">
            <h3 className="categories-title">NAVEGAR POR CATEGORIAS</h3>
            <div className="categories-grid">
              {categories.map((cat) => (
                <div key={cat.id} className="category-item">
                  <div className={`category-icon ${cat.color}`}>
                    {cat.icon}
                  </div>
                  <span className="category-name">{cat.label}</span>
                </div>
              ))}
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}

