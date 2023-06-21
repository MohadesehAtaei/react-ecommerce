import React, { useContext, useEffect, useState} from 'react'
import { MainContext } from '../../contexts/MainContext'
import Card2 from './Card2'

function Cart() {
  const { cartItems} = useContext(MainContext)
  const [totalPrice , setTotalPrice] = useState(0)

  useEffect(() => {
    let total = 0
    for(var item of cartItems){
      total += (item.info.price * item.quantity)
    }
    setTotalPrice(total.toFixed(2))
  }, [cartItems]);
    
  return (
    <div className="container py-4">
      <h2 className="mx-5 mb-4">My Products</h2>
      <h3>totalPrice : {totalPrice}$</h3>
      {cartItems.length ? (
        <div className="d-flex justify-content-center flex-wrap">
          {cartItems.map((p) => (
            <Card2
              key={p.info.id}
              id={p.info.id}
              title={p.info.title}
              price={p.info.price}
              image={p.info.image}
              description={p.info.description}
              rate={p.info.rating.rate}
              count={p.info.rating.count}
              quantity={p.quantity}
            />
          ))}
        </div>
      ) : (
        <div className="py-5">
          <h3 className="text-center text-info my-5 py-5">Your Cart Is empty...</h3>
        </div>
      )}
    </div>
  )
}

export default Cart