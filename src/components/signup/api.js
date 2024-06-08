import axios from "axios";

export const storeUserRegistrationDetails = async (formData) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/user/sign-up",
      formData,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    return {
      success: false,
      message: error.response
        ? error.response.data.message
        : "Something went wrong!",
      data: null,
    };
  }
};
