import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    adduser:false,
    userdetails:false,
    sidebardisplay:true,
    date: null,
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
        },
        sidebardisplaytrue: (state)=>{
            state.sidebardisplay = true;
        },
        sidebardisplayfalse: (state)=>{
            state.sidebardisplay = false;
        },
        updatedate: (state,action)=>{
           state.date = action.payload;
        },

    }
})

export const {useradd,canceluserbox,chatuserdetails,sidebardisplaytrue,sidebardisplayfalse,updatedate} = Dataslice.actions;
export default Dataslice.reducer;