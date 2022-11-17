import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { redirect, useNavigate } from "react-router-dom";
import googleLogin from "../services/googleLogin";


const initialState = {
    user: null,
    isSignin:false,
}

//user signin
export const signinuser = createAsyncThunk('createuser',async () => {
    try{
        return await googleLogin()
    }catch(error){
        console.log("error")
    }
})


export const Authslice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        login: async (state) =>{
            state.user = await  googleLogin()
            
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(signinuser.pending, (state)=>{
            state.isSignin= false;
        })
        .addCase(signinuser.fulfilled, (state,action)=>{
            state.isSignin=true;
            state.user = action.payload
        })
        .addCase(signinuser.rejected, (state,action)=>{
            state.isSignin=false;
            console.log("rejected")
        })
    }
});

export  const { login } = Authslice.actions;

export default Authslice.reducer