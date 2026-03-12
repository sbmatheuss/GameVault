  import '../styles/Home.css'
  import images from '../images/card-cyberpunk.jpg'
  import LogoImg from '../images/logo-gamevault.png'
  import {User, Heart, ShoppingCart, Search, Rocket, Crown, Calendar, Monitor} from "lucide-react"

  import { FaPlaystation, FaXbox } from 'react-icons/fa'
  


  export function Home() {

    const categories = [
    { id: 1, label: 'New Releases', icon: <Rocket />, color: 'blue' },
    { id: 2, label: 'Best Sellers', icon: <Crown />, color: 'blue' },
    { id: 3, label: 'Pre-Orders', icon: <Calendar />, color: 'blue' },
    { id: 4, label: 'PC', icon: <Monitor />, color: 'white' },
    { id: 5, label: 'PS5', icon: <FaPlaystation />, color: 'white' },
    { id: 6, label: 'Xbox', icon: <FaXbox />, color: 'green' },
  ];


    return (
    <div>
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
      
      <div className="featured-card">

        <img 
          src={images} 
          alt="Cyberpunk 2077 Phantom Liberty"
          className="featured-img"
        />

        <div className="featured-overlay">
          <span className="featured-label">FEATURED RELEASE:</span>

          <h2 className="featured-title">
            CYBERPUNK 2077 - PHANTOM LIBERTY
          </h2>

          <div className="featured-info">
            <span className="price">$69.99</span>
            <button className="details-btn">View Details</button>
          </div>
        </div>

      </div>

        {/* --- NOVA SEÇÃO DE CATEGORIAS --- */}
      <section className="categories-container">
        <h3 className="categories-title">BROWSE CATEGORIES</h3>
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


          
    </div>
  );
}

  