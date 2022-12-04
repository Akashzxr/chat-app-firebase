import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    adduser:false,
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
        }
    }
})

export const {useradd,canceluserbox} = Dataslice.actions;
export default Dataslice.reducer;