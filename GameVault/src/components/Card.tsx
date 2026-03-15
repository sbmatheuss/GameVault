import { useState } from 'react'
import '../styles/global.css'
import '../styles/cart.css'
import { X, ShoppingCart } from 'lucide-react'

const initialItems = [
  { id: 1, name: 'Spider-Man 2',      platform: 'PS5',    price: 89.99, rating: 4 },
  { id: 2, name: 'Zelda: TotK',       platform: 'Switch', price: 79.99, rating: 4 },
  { id: 3, name: 'AC Mirage',         platform: 'PC',     price: 79.99, rating: 3 },
]

function StarRating({ value }: { value: number }) {
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {[1, 2, 3, 4, 5].map(i => (
        <svg key={i} width="11" height="11" viewBox="0 0 24 24"
          style={{ fill: i <= value ? 'var(--accent-gold)' : 'var(--border-normal)' }}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  )
}

export function Cart() {
  const [items, setItems] = useState(initialItems)

  const remove = (id: number) => setItems(i => i.filter(x => x.id !== id))
  const subtotal = items.reduce((s, i) => s + i.price, 0)
  const discount = 10
  const total = subtotal - discount

  return (
    <div className="cart-page">
      <div className="cart-page-header">
        <ShoppingCart size={20} />
        <h1 className="cart-page-title">Carrinho</h1>
        <span className="cart-count-badge">{items.length}</span>
      </div>

      <div className="cart-layout">
        {/* Items */}
        <section className="cart-items-section">
          {items.length === 0 && (
            <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-muted)' }}>
              <ShoppingCart size={40} style={{ opacity: 0.3, marginBottom: '1rem' }} />
              <p>Seu carrinho está vazio</p>
            </div>
          )}
          {items.map(item => (
            <div key={item.id} className="cart-item-card">
              <div className="cart-item-img">
                <div style={{ width: '100%', height: '100%', background: 'var(--bg-elevated)' }} />
              </div>
              <div className="cart-item-details">
                <p className="cart-item-title">{item.name}</p>
                <p className="cart-item-platform">{item.platform}</p>
                <div className="cart-item-rating">
                  <StarRating value={item.rating} />
                </div>
              </div>
              <span className="cart-item-price">${item.price.toFixed(2)}</span>
              <button className="cart-item-remove" onClick={() => remove(item.id)}>
                <X size={15} />
              </button>
            </div>
          ))}
        </section>

        {/* Summary */}
        <aside className="order-summary">
          <p className="order-summary-title">Resumo do Pedido</p>
          <div className="order-summary-rows">
            <div className="order-row">
              <span>Subtotal ({items.length} itens)</span>
              <span className="val">${subtotal.toFixed(2)}</span>
            </div>
            <div className="order-row">
              <span>Desconto</span>
              <span className="discount-badge">-${discount.toFixed(2)}</span>
            </div>
            <div className="order-row">
              <span>Entrega</span>
              <span className="val" style={{ color: 'var(--accent-green)' }}>Grátis</span>
            </div>
            <div className="order-row total">
              <span>Total</span>
              <span className="val">${total.toFixed(2)}</span>
            </div>
          </div>
          <button className="checkout-full-btn">Finalizar Compra</button>
        </aside>
      </div>
    </div>
  )
}