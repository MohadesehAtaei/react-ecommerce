import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MainContext } from '../../contexts/MainContext'

function ShowProduct() {
  const params = useParams()
  const {myData} = useContext(MainContext)
  const [product, setProduct] = useState([]);

  useEffect(() => {
    setProduct(
      myData.find((p)=>{
        return p.id == params.id
      })
    )
  }, []);
  
  return (
    <div className='container'>
      <div className='row  align-items-center my-5'>
        <img className="col-md-6 col-12 order-md-2" src={product.image} alt="" style={{maxHeight
        : "560px"}}/>
        <div className="col-md-6 col-12 order-md-1">
          <h3 className='mt-5'>{product.title}</h3>
          <h5 className='mt-5'>category : {product.category}</h5>
          <div className='d-flex justify-content-between my-4'>
            <span>Price : {product.price} 
              <i className="bi bi-currency-dollar"></i>
            </span>
            {/* <span>Rate : {product.rating.rate}
              <i className="bi bi-star-fill text-warning mx-1"></i>
            </span> */}
          </div>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  )
}

export default ShowProduct