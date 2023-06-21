import React, { useContext } from "react";
import Card from "./Card";
import { MainContext } from "../../contexts/MainContext";

function Products() {
  const { myData , toggleWishList , addToCart} = useContext(MainContext);


  return (
    <div className="container products py-4">
      <h2 className="mx-5 mb-4">All Products</h2>
      {myData.length ? (
        <div className="d-flex justify-content-center flex-wrap">
          {myData.map((item) => (
            <Card
              key={item.id}
              item={item}
              toggleWishList={toggleWishList}
              addToCart={addToCart}
            />
          ))}
        </div>
      ) : (
        <div className="py-5">
          <h3 className="text-center text-info my-5 py-5">Please Waite...</h3>
        </div>
      )}
    </div>
  );
}

export default Products;
