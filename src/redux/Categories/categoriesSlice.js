import { createSlice } from "@reduxjs/toolkit";
import { categories } from "../../data/Categories";

const initialState ={
    categories: categories,
    selectedCategory: null === "todos"

}
    


export const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers:{
        getCategories: state => state,
        selectCategory: (state, action)=>{
            return{
                ...state,
                selectedCategory: action.payload !== state.selectedCategory ? action.payload : null

            }

        }

    }
})


export const {getCategories, selectCategory} = categoriesSlice.actions 

export default categoriesSlice.reducer