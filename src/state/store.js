import { configureStore } from "@reduxjs/toolkit";

import uidReducer from "./uid";
import detailReducer from "./detail";
import photoReducer from "./photo";
import cartReducer from "./cart";
import menuReducer from "./menu";
import menuSelectionReducer from "./menuSelection";
import dataReducer from "./data";
import searchReducer from "./search";
import checkoutReducer from "./checkout";
import reviewReducer from "./review";
import pageReducer from "./page";
import adminProductReducer from "./adminProduct";


const store = configureStore({
  reducer: {
    uid: uidReducer,
    detail: detailReducer,
    photo: photoReducer,
    cart: cartReducer,
    menu: menuReducer,
    menuSelection: menuSelectionReducer,
    data: dataReducer,
    search: searchReducer,
    checkout: checkoutReducer,
    review: reviewReducer,
    page: pageReducer,
    adminProduct: adminProductReducer
  },
});

export default store;
