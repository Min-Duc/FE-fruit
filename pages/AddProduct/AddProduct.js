import React, { useState } from 'react'
import "./AddProduct.css"

const AddProduct = () => {
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Fruit');
  const [price, setPrice] = useState('');
  const [sku, setSku] = useState('');
  const [stock, setStock] = useState('');
  const [active, setActive] = useState('yes');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form submission, e.g., send data to server
    // Include the captured field values (image, name, description, category, price, sku, stock, active) in the request payload
    console.log('Form submitted:', { image, name, description, category, price, sku, stock, active });

    // Reset form fields
    setImage('');
    setName('');
    setDescription('');
    setCategory('Fruit');
    setPrice('');
    setSku('');
    setStock('');
    setActive('yes');
  };
  return (
    <div className="addProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm" onSubmit={handleSubmit}>
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file" value={image} onChange={(e) => setImage(e.target.value)} />
        </div>
        <div className="addProductItem">
          <label>Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className="addProductItem">
          <label>Category</label>
          <select name="category" id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="Fruit">Giỏ Hoa Quả</option>
            <option value="Detox">Detox</option>
            <option value="DryFood">Đồ Khô</option>
            <option value="Alcohol">Whine & Whisky</option>
            <option value="GiftCard">Thiệp Chúc Mừng</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div className="addProductItem">
          <label>Stock keeping unit</label>
          <input type="text" value={sku} onChange={(e) => setSku(e.target.value)} />
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <input type="text" value={stock} onChange={(e) => setStock(e.target.value)} />
        </div>
        <div className="addProductItem">
          <label>Active</label>
          <select name="active" id="active" value={active} onChange={(e) => setActive(e.target.value)}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="addProductButton" type="submit">Create</button>
      </form>
    </div>
  )
}

export default AddProduct