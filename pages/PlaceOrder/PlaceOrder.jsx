import React, { useContext } from 'react'
import '../PlaceOrder/PlaceOrder.css'
import { StoreContext } from '../../components/Context/StoreContext'

const PlaceOrder = () => {
  const { cardItems = {}, food_list = [], removeFromCart } = useContext(StoreContext);

  const items = (food_list || []).filter(item => (cardItems || {})[item._id] > 0);
  const subtotal = items.reduce((s, item) => s + item.price * (cardItems[item._id] || 0), 0);
  return (
    <div className='place-order'>
      <div className="place-order-left">
      <p className="title">
        Delivery Information
      </p>
      <div className="multi-field">
        <input type="text" placeholder='First Name'/>
        <input type="text" placeholder='Last Name'/>
      </div>
      <input type="email" placeholder='Email address' />
      <input type="text" placeholder='Street'/>
    <div className="multi-field">
        <input type="text" placeholder='city'/>
        <input type="text" placeholder='state'/>
      </div>
    <div className="multi-field">
        <input type="text" placeholder='pin code'/>
        <input type="text" placeholder='Country'/>
      </div>
      <input type="text" placeholder='Phone' />

    </div>
    <div className="place-order-right">
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
          <button  className="checkout-btn">Proceed to Pay</button>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder
