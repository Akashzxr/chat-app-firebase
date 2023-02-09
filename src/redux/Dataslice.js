import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    adduser:false,
    userdetails:false,
    sidebardisplay:true,
    date: null,
    searchinput: "",
    darktheme: false,
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
           if(action.payload){
            var date = new Date(action.payload*1000);
            var DD = date.getDate();
            var MM = date.getMonth() +1;
            var YY = date.getFullYear() -2000;
            var hh = date.getHours();
            var mm = date.getMinutes();
            state.date = DD+"/"+MM+"/"+YY+"  "+hh+":"+mm;
           }
        },
        chatsearchinput:(state,action)=>{
           state.searchinput = action.payload;
        },
        darktheme: (state)=>{
          if(state.darktheme == true){
            state.darktheme = false;
          }
          else{
            state.darktheme = true;
          }
        },
        

    }
})

export const {useradd,canceluserbox,chatuserdetails,darktheme,
    sidebardisplaytrue,sidebardisplayfalse,updatedate,chatsearchinput} = Dataslice.actions;
export default Dataslice.reducer;