import React, { useState } from "react";
import { addProduct as addProductApi } from "./api"; // Rename the imported function

const AddProduct = () => {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: null,
    quantity: null,
    category: "",
    image: "",
  });
  const formData = new FormData();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleSubmission = async (e) => {
    e.preventDefault();
    for (const key in productData) {
      formData.append(key, productData[key]);
    }
    const addProductResponse = await addProductApi(formData); // Rename the variable here
  };

  return (
    <div className="main">
      <div
        className="container min-vh-100 d-flex justify-content-center align-items-center"
        style={{ width: "700px" }}
      >
        <div className="row">
          <div className="col">
            <form encType="multipart/form-data">
              <div className="row gap-3">
                <div className="col-md-7">
                  <label htmlFor="name" className="form-label">
                    Product Name
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Enter Product Name"
                    value={productData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="image" className="form-label">
                    Image
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    name="image"
                    placeholder="Enter Product Image"
                    value={productData.image}
                    onChange={handleChange}
                  ></input>
                </div>
                <div className="col-md-7">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="description"
                    placeholder="Enter Product Description"
                    value={productData.description}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-12">
                  <label htmlFor="price" className="form-label">
                    Price
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    name="price"
                    placeholder="Enter Product Price"
                    value={productData.price}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-12">
                  <label htmlFor="quantity" className="form-label">
                    Quantity
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    name="quantity"
                    placeholder="Enter Product Quantity"
                    value={productData.quantity}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-12">
                  <label className="form-label">Category</label>
                  <select
                    htmlFor="category"
                    className="form-control"
                    name="category"
                    value={productData.category}
                    onChange={handleChange}
                  >
                    <option value="" className="text-center">
                      Select Product Category
                    </option>
                    <option value="Mobile">Mobile</option>
                    <option value="Laptop">Laptop</option>
                    <option value="Television">Television</option>
                  </select>
                </div>
                <div className="col-md-12">
                  <button
                    className="form-control text-light bg-success"
                    onClick={handleSubmission}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
