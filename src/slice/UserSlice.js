import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    id: null,
    name: "",
    address: "",
    contact: null,
    role: "",
    email: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user.id = action.payload.id;
      state.user.name = action.payload.name;
      state.user.address = action.payload.address;
      state.user.contact = action.payload.contact;
      state.user.role = action.payload.role;
      state.user.email = action.payload.email;
    },
    removeUser: (state, action) => {
      state.user = state.user.filter((u) => u.id !== action.payload.id);
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
