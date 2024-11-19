/* eslint-disable no-undef */

/* eslint-disable no-unused-vars */
import { useState , useEffect } from "react"


export default function ProductCard() {

  const [products , SetProducts] = useState([])

  useEffect(() => {
    async function FetchProducts(){
      const DataRequest = await fetch("");
      const Data = await DataRequest.json();

      SetProducts(Data)
    }
  });


  return (
    <div className="product-card">
      <img
        src={`http://yourserver.com${product.image_path}`}
        alt={product.name}
        className="product-image"
      />
      <div className="product-details">
        <h2>{product.name}</h2>
        <p>{product.price} DA</p>
      </div>
    </div>
  )
}
