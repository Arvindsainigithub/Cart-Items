import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const { cart } = useSelector((state) => state);
  return (
    <div>
      <div className="d-flex justify-content-around align-items-center Navbar">
        <div>
          <NavLink to="/" className="decoration">
            <h1 className="Mall"> Mall</h1>
          </NavLink>
        </div>
        <div className="NavBar">
          <div>
            <NavLink to="/" className="decoration">
              <p className="text-white Header">Home</p>
            </NavLink>
          </div>
          <div>
            <NavLink to="/cart" className="decoration">
                <div className="CartValue text-white">
                  <FaShoppingCart />
                  <div className="spanValue">
                    {cart.length > 0 && (
                      <span className="count">{cart.length}</span>
                    )}
                  </div>
                </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
