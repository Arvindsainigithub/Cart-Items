import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../Redux/CreateSlice";
import "./CartItem.css";
import { toast } from "react-toastify";

function CartItem({ item }) {
  console.log("CartItem from here");
  console.log(item);
  const dispatch = useDispatch();
  function RemoveCart() {
    dispatch(remove(item.id));
    toast.success("Item removed")
  }
  return (
    <div className="CartItems">
      <div className="m-2">
        <img src={item.image} alt="images" />
      </div>
      <div className="CartTitles m-2">
        <div>
          <h1 className="MainTitle">{item.title}</h1>
          <h1 className="MainDis">{item.description.split(" ").slice(0, 10).join(" ") + "..."}</h1>
        </div>
        <div className="CartPrice">
          <p className="Price">${item.price}</p>
          <div onClick={RemoveCart} className="CartItemD">
            <MdDelete />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
