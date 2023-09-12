import { createSlice } from "@reduxjs/toolkit";
import Input from "../../components/UI/Input/Input";




const initialState = {
    currentUser: null,
    hiddenMenu: true
}


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            return {
                ...state,
                currentUser: action.payload
            }
        },
        setVerified: state => {
            if (state.currentUser) {
                state.currentUser.verified = true;
            }
        },

        setPassword: (state, action) => {
            if (state.currentUser) {
                state.currentUser.password = Input.value;
            }
    
        },


        toggleMenu: state => {
            return {
                ...state,
                hiddenMenu: !state.hiddenMenu
            }
        },


    }

})



export const { setCurrentUser, toggleMenu,  setVerified, setPassword } = userSlice.actions

export default userSlice.reducer