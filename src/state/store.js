import { configureStore } from "@reduxjs/toolkit";
import uidReducer from "./uid";

const store = configureStore({
    reducer: {
        uid: uidReducer,
    }
})

export default store; 