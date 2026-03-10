import "../styles/cart.css";

export function Cart() {
  return (
    <div className="cart-page-container">

      <div className="main-layout">
        <aside className="sidebar">
          <h3>FILTERS</h3>

          <div className="filter-group">
            <h4>Genre</h4>
            <label><input type="checkbox" /> RPG</label>
            <label><input type="checkbox" /> FPS</label>
            <label><input type="checkbox" /> Action</label>
          </div>
        </aside>

        <main className="content">
          <section className="games-section">
            <h2>LATEST RELEASES</h2>
            <div className="games-grid">
            
              <div className="game-card">
                <div className="game-img">         
                </div>
                <h4>Starfield</h4>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}