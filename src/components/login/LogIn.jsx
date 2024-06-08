import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logInUser } from "./api";
import { toast } from "react-toastify";
import { addUser } from "../../slice/UserSlice";
import { useDispatch } from "react-redux";

const LogIn = () => {
  const navigate = useNavigate();
  const [getUserDetail, setGetUserDetail] = useState();
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const isLoggedIn = await logInUser(userDetails);
      dispatch(addUser(isLoggedIn?.data));

      if (
        isLoggedIn.success === false ||
        isLoggedIn.message === "Email Not Found"
      ) {
        toast.error(isLoggedIn.message);
      } else {
        toast.success(isLoggedIn.message);
        isLoggedIn?.role === "Customer" ? navigate("/") : navigate("/vendor");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="login-main-container d-flex justify-content-center"
      style={{ marginTop: "100px" }}
    >
      <div className="shadow w-25 p-4 mt-5  rounded">
        <h3 className="">Log In</h3>
        <form className="d-flex flex-column justify-content-center align-items-center">
          <div className="w-100">
            <label className="form-label">Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={userDetails.email}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="w-100">
            <label className="form-label">Password</label>
            <input
              className="form-control"
              type="password"
              name="password"
              placeholder="Enter Your Password"
              value={userDetails.password}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="w-100">
            <button
              onClick={(e) => handleSubmit(e)}
              className="form-control bg-success mt-3"
            >
              Sign In
            </button>
            <button
              className="form-control bg-primary mt-3"
              onClick={() => navigate("/sign-up")}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
