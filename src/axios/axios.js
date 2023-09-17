import axios from "axios"
import { BASE_URL } from "../utils/constants"



export const registerUser = async (nombre, email, password) => {
    try {
        const { data } = await axios.post(`${BASE_URL}/auth/register`, {
            nombre,
            email,
            password
        })
        return data
    } catch (error) {
        console.log(error);
        return alert(error.response.data.errors[0].msg);
    }
}





export const verify = async (email, code) => {
    try {
        const response = await axios.patch(`${BASE_URL}/auth/verify`, {
            email,
            code,
        });
        return response.data;
    } catch (error) {
        console.log(error);
        return alert(error.response.data.msg);
    }

}



export const login = async (email, password) => {
    try {
        const response = await axios.post(`${BASE_URL}/auth/login`, {
            email,
            password
        })
        return response.data



    } catch (error) {
        console.log(error);
        return alert(error.response.data.msg);
    }

}

export const recuperarPassword = async (email) => {
    try {
        const { data } = await axios.post(`${BASE_URL}/auth/recuperar`, {
            email
        })
        return data
    } catch (error) {
        console.log(error);
        return alert(error.response.data.msg);
    }
}


export const passwordNew = async (password, code) => {
    try {
        const response = await axios.patch(`${BASE_URL}/auth/password`, {
            code,
            password,

        });

        return response.data;
    } catch (error) {
        console.log(error);
        return alert(error.response.data.msg);
    }

}