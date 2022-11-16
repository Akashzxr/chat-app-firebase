import { createSlice } from "@reduxjs/toolkit";
import googleLogin from "../services/googleLogin";

const initialState = {
    user: null,
}

export const Authslice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        login: async (state) =>{
            state.user = await  googleLogin()
        }
    }
});

export  const { login } = Authslice.actions;

export default Authslice.reducer