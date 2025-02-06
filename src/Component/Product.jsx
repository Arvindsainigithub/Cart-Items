import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { add, remove } from "../Redux/CreateSlice";
import "./Product.css";
function Product({ post }) {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  const removeCart = () => {
    dispatch(remove(post.id));
    toast.success("Item removed");
  };
  const addCart = () => {
    dispatch(add(post));
    toast.success("Item Add to Cart");
  };
  return (
    <div className="Item">
      <div>{post.title}</div>
      <div>{post.description.split(" ").slice(0, 10).join(" ") + "..."}</div>
      <div>
        <img src={post.image} alt="imageError" />
      </div>

      <div className="CartItem">
        <div className="Price">${post.price}</div>
        <div>
          {cart.some((p) => p.id == post.id) ? (
            <button onClick={removeCart} className="btn">Remove Item</button>
          ) : (
            <button onClick={addCart} className="btn">Add to Cart</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;
