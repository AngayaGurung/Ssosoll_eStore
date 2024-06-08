import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const VendorContent = () => {
  const navigate = useNavigate();
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 row shadow min-vh-100">
          <div className="container-fluid">
            <div className="row mt-4 d-flex justify-content-center">
              <div className="col text-center d-flex flex-column justify-content-center ">
                <button
                  className="border-0 bg-transparent mb-4 border-bottom"
                  onClick={() => navigate("/vendor")}
                >
                  <i className="fa-solid fa-home m-2"></i>
                  Home
                </button>
                <button
                  className="border-0 bg-transparent mb-4 border-bottom"
                  onClick={() => navigate("/vendor/add-product")}
                >
                  <i className="fa-brands fa-product-hunt m-2"></i>
                  Add Product
                </button>
                <button
                  className="border-0 bg-transparent mb-4 border-bottom"
                  onClick={() => navigate("/vendor/product-list")}
                >
                  <i className="fa-solid fa-list m-2"></i>
                  Product List
                </button>
                <button className="border-0 bg-transparent mb-4 border-bottom">
                  <i className="fa-brands fa-sellsy m-2"></i>
                  Product Sold
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-9 d-flex justify-content-center align-items-center">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default VendorContent;
