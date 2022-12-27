import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    adduser:false,
    userdetails:{},
}

export const Dataslice = createSlice({
    name:"data",
    initialState,
    reducers:{
        useradd: (state)=>{
            state.adduser = true;
        },
        canceluserbox: (state)=>{
            state.adduser = false;
        },
        chatuserdetails: (state,action)=>{
            state.userdetails = action.payload;
            //console.log(state.userdetails);
        }

    }
})

export const {useradd,canceluserbox,chatuserdetails} = Dataslice.actions;
export default Dataslice.reducer;