import React, { useContext } from 'react'
import '../Card/Card.css'
import { StoreContext } from '../../components/Context/StoreContext'
import { useNavigate } from 'react-router'

const Card = () => {
  const navigate = useNavigate();
  const { cardItems = {}, food_list = [], removeFromCart } = useContext(StoreContext);

  const items = (food_list || []).filter(item => (cardItems || {})[item._id] > 0);
  const subtotal = items.reduce((s, item) => s + item.price * (cardItems[item._id] || 0), 0);

  return (
    <div className="card">
      <h2 className="cart-title">Your Cart</h2>
      <div className='cart'>
        <div className="cart-header">
          <div>Item</div>
          <div>Title</div>
          <div>Price</div>
          <div>Qty</div>
          <div>Total</div>
          <div>Remove</div>
        </div>

        <hr />

        <div className="cart-list">
          {items.length === 0 && <p className="empty">Your cart is empty.</p>}
          {items.map((item) => (
            <div className="cart-row" key={item._id}>
              <div className="col col-image"><img src={item.image || item.img} alt={item.name} /></div>
              <div className="col col-title">{item.name}</div>
              <div className="col col-price">${item.price.toFixed(2)}</div>
              <div className="col col-qty">{cardItems[item._id]}</div>
              <div className="col col-total">${(item.price * cardItems[item._id]).toFixed(2)}</div>
              <div className="col col-remove"><button className="remove-btn" onClick={() => removeFromCart(item._id)}>Remove</button></div>
            </div>
          ))}
        </div>

        <div className="cart-footer">
          <div className="subtotal">Subtotal: <strong>${subtotal.toFixed(2)}</strong></div>
          <button onClick={()=>navigate('/order')} className="checkout-btn">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Card
