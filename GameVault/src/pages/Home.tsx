 import '../styles/Home.css'
 import images from '../images/card-cyberpunk.jpg'
 import LogoImg from '../images/logo-gamevault.png'
 import {User, Heart, ShoppingCart, Search} from "lucide-react"

 export function Home() {
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



          <div className='card-categories'>
                <div><span>New Releases</span></div>
                <div><span>Best Sellers</span></div>
                <div><span>Pre-Orders</span></div>
                <div><span>PC</span></div>
                <div><span>PS5</span></div>
                <div><span>xBOX</span></div>
                <div><span>Nintendo Switch</span></div>
          </div>
    </div>
  );
}