import axios from "axios";
import { mainURI } from "../../../constants/uri";

export const createProdutos = async (body) => {
    
    const response = await axios.put(`${mainURI}/produtosClientes/insert`, body);

    if(response.data){
        console.log("createdProductSucessfully");
    } else{
        console.log("Failed")
    }

}