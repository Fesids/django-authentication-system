import axios from "axios"
import { mainURI } from "../../../constants/uri"

export const fetchProcessoByCNPJAndProdCod  = async (cnpj, prod_cod) => {

    const response = await axios.get(`${mainURI}/processos/${cnpj}/${prod_cod}`)
    if(response.data){
        return response.data
    } else{
        console.log(`Falha ao retornar os detalhes do processo de cnpj ${cnpj} e Cod produto ${prod_cod}`);
    }
}

export const createProcesso = async (body) => {
    
    const response = await axios.put(`${mainURI}/processos/insert`, body);

    if(response.data){
        console.log("createdSucessfully");
    } else{
        console.log("Failed")
    }

}