import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { storeUserRegistrationDetails } from "./api";
import { toast } from "react-toastify";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    contact: "",
    role: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userDetails = new FormData();
      for (let data in formData) {
        userDetails.append(data, formData[data]);
      }

      const registerUser = await storeUserRegistrationDetails(userDetails);

      if (registerUser.success) {
        toast.success(registerUser.message);
      } else {
        toast.error(registerUser.message);
      }
    } catch (error) {
      toast.error("An unexpected error occurred.");
    }
  };

  return (
    <div className="main-container d-flex justify-content-center">
      <div className="sign-up m-5 w-25 p-4 shadow-lg rounded-3">
        <h3>Register Yourself</h3>
        <form
          className="d-flex flex-column gap-4"
          encType="multipart/form-data"
        >
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Address</label>
            <input
              type="text"
              className="form-control"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter Address"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Contact</label>
            <input
              type="text"
              className="form-control"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Enter Contact"
            />
          </div>
          <div>
            <label className="form-label">Role</label>
            <select
              name="role"
              className="form-control"
              onChange={handleChange}
            >
              <option selected>Select Role</option>
              <option value="Customer">Customer</option>
              <option value="Vendor">Vendor</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-control"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="form-control bg-primary"
            onClick={handleSubmit}
          >
            Register
          </button>
          <button
            className="form-control bg-success"
            onClick={() => navigate("/log-in")}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
