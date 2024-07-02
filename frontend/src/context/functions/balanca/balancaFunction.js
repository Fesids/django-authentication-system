import axios from "axios"
import { balancaURI } from "../../../constants/uri"


export const cargaBalanca = async (cnpj, arquivo) => {
    var formData = new FormData();
    formData.append('cnpj', cnpj)
    formData.append("fileName", arquivo, arquivo.name)

    await axios.post(`${balancaURI}/carga`, formData)
    .then(resp => console.log("Carga efetivada com sucesso"))
    .catch(err => console.log(err))

}