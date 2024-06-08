import React from "react";

const Footer = () => {
  return (
    <>
      <div className="container-fluid border-top">
        <div className="row d-flex flex-column">
          <div className="col-7 offset-md-2">
            <ul className="list-unstyled d-flex justify-content-evenly m-4">
              <li>Home</li>
              <li>Features</li>
              <li>Pricing</li>
              <li>FAQs</li>
              <li>About</li>
            </ul>
            <hr></hr>
          </div>
          <div className="col d-flex justify-content-center m-2">
            <p> @ 2024 Company Ssolsoll_eStore</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
