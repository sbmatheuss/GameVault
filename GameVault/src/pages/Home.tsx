 import '../styles/Home.css'
 import images from '../images/card-cyberpunk.jpg'

 export function Home() {
   return (
    <div>
      <header className="header container">
        <div className='logo'>GameVaut</div>
        <div className='justify-align-center'>
          <nav className='NavBar font_m c_text'>
            <a href="#">iten</a>
            <a href="#">iten</a>
            <a href="#">iten</a>
            <a href="#">iten</a>
          </nav>
          <div>
            cart
          </div>
          <div>
            perfil
          </div>

        </div>
      </header>
      
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