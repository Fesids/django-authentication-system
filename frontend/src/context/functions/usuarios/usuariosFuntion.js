import axios from "axios"
import { mainURI } from "../../../constants/uri"
import Cookies from "js-cookie"

export const loginUser = (loginData) => {

    axios.post(`${mainURI}/user/login/`, loginData)
    .then(response => {
        console.log(response)
        Cookies.set('accessToken', response.data.token.access, { expires: 7 }); 
        Cookies.set('refreshToken', response.data.token.refresh, { expires: 7 });
    
    })
    .catch(err => console.log(err))

}

export const registerUser = (regData) => {

    axios.post(`${mainURI}/user/register/`, regData)
    .then(response => {
        console.log(response)
        Cookies.set('accessToken', response.data.token.access, { expires: 7 }); 
        Cookies.set('refreshToken', response.data.token.refresh, { expires: 7 });
    
    })
    .catch(err => console.log(err))

}
