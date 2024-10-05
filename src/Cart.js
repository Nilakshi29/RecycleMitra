import React from 'react';
import './Cart.css';

const Cart = ({ cartItems, clearCart, credits, checkout }) => {
  // Function to calculate the total price of all items in the cart
  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountedPrice = credits > 0 ? totalPrice - credits : totalPrice;

  return (
    <div className="cart">
      <div className="cart-header">
        <h2>Shopping Cart</h2>
        <div className="credits">Credits: ${credits.toFixed(2)}</div>
      </div>

      {/* Display a message if the cart is empty */}
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {/* List all the items in the cart */}
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <span>{item.name} (x{item.quantity})</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          
          {/* Show total price if there are items in the cart */}
          <h3 className="total">Total Price: ${discountedPrice.toFixed(2)}</h3>
          <button className="clear-cart" onClick={clearCart}>Clear Cart</button>
          <button className="checkout" onClick={checkout}>Checkout</button>
        </>
      )}
    </div>
  );
};

export default Cart;
