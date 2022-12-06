import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import googleLogin from "../services/googleLogin";


const initialState = {
    user: JSON.parse(localStorage.getItem('dataKey')),
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
        },
        logout: (state) => {
            state.user = false;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(signinuser.pending, (state)=>{
            state.isSignin= false;
        })
        .addCase(signinuser.fulfilled, (state,action)=>{
            state.isSignin=true;
            localStorage.setItem('dataKey', JSON.stringify(action.payload));
            state.user = JSON.parse(localStorage.getItem('dataKey'));
        })
        .addCase(signinuser.rejected, (state,action)=>{
            state.isSignin=false;
            console.log("rejected")
        })
    }
});

export  const { login, logout } = Authslice.actions;

export default Authslice.reducer