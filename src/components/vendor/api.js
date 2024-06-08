import axios from "axios";

export const addProduct = async (productData) => {
  console.log("reached till the api");
  try {
    const response = await axios.post(
      "http://localhost:8000/product/add-product",
      productData,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
