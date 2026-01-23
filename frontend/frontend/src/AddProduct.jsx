import React, { useState } from 'react'

posturl : "http://localhost:5101/api/users/productpost"

const AddProduct = () => {
    const [name, setName] = useState(" ")
    const [description, setDescription] = useState(" ")
    const [price, setPrice] = useState(" ")
    
    const productHandler = async (e) => {
      e.preventDefault()
      try {
        const prodData = await fetch(posturl, {
          method: "POST",
          headers: {
            "Content-Type": "applications.json"
          },
          body: JSON.stringify({
            name, description, price
          }),
        });
        const data = await prodData.json()
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
  return (
    <div>
      <form onSubmit={productHandler}>
        <h3>Name: </h3>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <h3>Description: </h3>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        <h3>Price: </h3>
        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default AddProduct
