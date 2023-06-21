import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "../../contexts/MainContext";

function Card({id , title, price, image, description, rate, quantity }) {

  const {incrementQuantity , decrementQuantity , removeFromCart} = useContext(MainContext)

  return (
    <div className="card mb-3 p-3 w-75">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={image}
            className="card-img-top p-3"
            alt="..."
            style={{ maxHeight: "250px" }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <div className="d-flex justify-content-between my-4">
              <p className="card-text">
                Price : {price*quantity}
                <i className="bi bi-currency-dollar"></i>
              </p>
              <p className="card-text">
                Rate : {rate}
                <i className="bi bi-star-fill text-warning mx-1"></i>
              </p>
            </div>
            <p className="card-text">
              <small className="text-body-secondary">
                {description}
              </small>
            </p>
            <div className="d-flex justify-content-between">
              <div>
                <i className="bi bi-dash btn btn-primary" onClick={()=> decrementQuantity(id)}/>
                <span className="mx-2">{quantity}</span>
                <i className="bi bi-plus btn btn-primary" onClick={()=> incrementQuantity(id)}/>
              </div>
              <a href="#" className="btn btn-danger" onClick={()=> removeFromCart(id)}>
                Delete
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
