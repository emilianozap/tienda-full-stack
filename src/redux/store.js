import { combineReducers, configureStore } from "@reduxjs/toolkit";
import  categoriesReducer  from "./Categories/categoriesSlice";
import productReducer from "./Products/productSlice";
import {persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage';
import persistStore from "redux-persist/es/persistStore";
import  recommendedProductsReducer  from "./productsRecomendados/recomendadoSlice";
import cartReducer from "./Cart/cartSlice";
import userReducer from "./User/userSlice";
import ordersReducer from "./orders/ordersSlice";


const reducers = combineReducers({
    categories: categoriesReducer,
    products: productReducer,
    recommended: recommendedProductsReducer,
    cart: cartReducer,
    user: userReducer,
    orders: ordersReducer,
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart', 'user']
  };




const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({serializableCheck: false})
})

export const persistor = persistStore(store)