import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "../../contexts/MainContext";

function Card({ item, toggleWishList, addToCart }) {
  const {cartItems} = useContext(MainContext)


  return (
    <div className="card shadow m-1 p-2" style={{ width: "18rem" }}>
      <Link to={`/showProduct/${item.id}`}>
        <img src={item.image} className="card-img-top" alt="..." />
      </Link>
      <div className="card-body">
        <h5 className="height card-title">{item.title}</h5>
        <div className="d-flex justify-content-between align-items-center px-2">
          <p className="card-text">{item.price}<i className="bi bi-currency-dollar"></i></p>
          <i className={`bi ${ item.inWishList ? "bi-heart-fill" : "bi-heart"} text-danger fs-5`}
            onClick={() => toggleWishList(item.id)}
          />
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <button className="btn btn-primary px-4 w-100" onClick={() => {addToCart(item.id)
          console.log(cartItems)
          }}>Add To Cart </button>
        </div>
      </div>
    </div>
  );
}

export default Card;