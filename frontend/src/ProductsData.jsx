import React from 'react'
import { useState, useEffect } from 'react'

const getproducts = "http://localhost:5101/api/users/getproducts"

const ProductsData = () => {
    const [products, setProducts] = useState([])
    
    const fetchProducts = async () => {
      try {
        const res = await fetch(getproducts)
        const data = await res.json()
        setProducts(data)
      } catch (error) {
        console.log(error)
      }
    }

    useEffect(() => {
      fetchProducts()
    }, [])

    return (
      <div>
        <h2>Product List</h2>

        <div>
          {products.length === 0 ? (
            <p>No products found</p>
          ) : (
            products.map((prod, index) => (
              <div key={index} className="product-card">
                <p><b>Name:</b> {prod.name}</p>
                <p><b>Description:</b> {prod.description}</p>
                <p><b>Price:</b> ₹{prod.price}</p>
              </div>
            ))
          )}
        </div>
      </div>
    )
}

export default ProductsData
