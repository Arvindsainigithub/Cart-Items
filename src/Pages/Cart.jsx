import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./Cart.css"
import CartItem from "../Component/CartItem"

function Cart() {
  const { cart } = useSelector((state) => state);
  const [totalPrice, setTotalPrice] = useState(0);
  console.log(cart);

  useEffect(() => {
    setTotalPrice(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="Check">
      {cart.length > 0 ? (
        <div className="YourItem">
          <div>
            {cart.map((item) => (
              <CartItem key={item.id} item={item}/>
            ))}
          </div>
          <div>
            <div>
              <div className="Your-cart">Your Cart</div>
              <div className="Your-summary">Summary</div>
              <div>
                <p className="TotalItem">Total Item : {cart.length}</p>
              </div>
              <div>
                <div>
                  <p>Total Price : ${totalPrice}</p>
                </div>
                <div className="CartBtn">
                  <button>Checkout Items</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="Empty">
          <h2>Card is Empty</h2>
          <NavLink to="/">
            <button className="ShopNow">Shop Now</button>
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Cart;
