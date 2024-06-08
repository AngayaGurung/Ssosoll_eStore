import React from "react";
import { useNavigate } from "react-router-dom";

const VendorHeader = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container-fluid mt-4 border-bottom  pb-4">
        <div className="row ">
          <div className="col-md-3">Ssolsoll_eStore</div>
          <div className="col-md-6 d-flex gap-3">
            <input className="form-control" placeholder="Search Here" />
            <button className="btn btn-outline-dark">Search</button>
          </div>
          <div className="col-md-3 d-flex align-items-center justify-content-center gap-3">
            <button
              className="rounded-circle border border-dark p-1 d-flex justify-content-center align-items-center"
              style={{ height: "30px", width: "30px" }}
            >
              <i className="fa-solid fa-bell text-primary "></i>
            </button>
            <button
              className="rounded-circle border border-dark p-1 d-flex justify-content-center align-items-center"
              style={{ height: "30px", width: "30px" }}
            >
              <i className="fa-solid fa-user text-danger"></i>
            </button>
            <button
              className="rounded-circle border border-dark p-1 d-flex justify-content-center align-items-center mx-5"
              style={{ height: "30px", width: "30px" }}
            >
              <i class="fa-solid fa-right-from-bracket"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default VendorHeader;
