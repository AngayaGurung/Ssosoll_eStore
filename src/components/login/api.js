import axios from "axios";

export const logInUser = async (userData) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/user/log-in",
      userData,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
