import { configureStore } from '@reduxjs/toolkit';
import authReducer from "./Authslice"
import dataReducer from "./Dataslice"

export default configureStore({
    reducer:{
        auth: authReducer,
        data: dataReducer,
    },
})