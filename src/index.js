import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./Redux/StoreSlice";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
      <Provider store={store}>
        <ToastContainer/>
        <App />
      </Provider>
    </BrowserRouter>

    

);
