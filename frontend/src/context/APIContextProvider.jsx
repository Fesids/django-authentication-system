import { useQuery } from "@tanstack/react-query";
import axios from "axios"
import { mainURI } from "../constants/uri";
import { ApiContext, ClientesContext, ProcessosContext, ProdutosContext, UserContext} from "./ApiContext";
import { useEffect, useState } from "react";


export const fetchData = async (url) => {
    const response = await axios.get(url, {
        headers: {
            'Content-Type': "application/json"
        }
    });
    if(response.data){
        return response.data;
    } else {
        console.log("Falha ao retornar os dados da API. Cheque a formtação da sua URL")
        return []
    }
}

export const fetchDataByParam = async (url, param) => {
    const response = await axios.get(`${url}/${param}`);
    if(response.data){
        return response.data;
    } else {
        console.log("Falha ao retornar o requerido objeto. Verfifique a formatação da sua URL ou o parâmetro utilizado")
    }
}

export const ApiContextProvider = ({children}) => {

   /*const {
        data: usuarios,
        isLoading: isLoadingUsuarios,
        isError: isErrorUsuarios,
        refetch: refetchUsuarios
    } = useQuery({
        queryKey: ["usuarios"],
        queryFn: () => fetchData(`${mainURI}/usuarios`)
    });

    const {
        data: processos,
        isLoading: isLoadingUProcessos,
        isError: isErrorProcessos,
        refetch: refetchProcessos
    } = useQuery({
        queryKey: ["processos"],
        queryFn: () => fetchData(`${mainURI}/processos`)
    });

    const {
        data: produtos,
        isLoading: isLoadingProdutos,
        isError: isErrorProdutos,
        refetch: refetchProdutos
    } = useQuery({
        queryKey: ["produtos"],
        queryFn: () => fetchData(`${mainURI}/produtosClientes`)
    })

    const {
        data: clientes,
        isLoading: isLoadingClientes,
        isError: isErrorClientes,
        refetch: refetchClientes

    } = useQuery({
        queryKey: ["clientes"],
        queryFn: () => fetchData(`${mainURI}/clientes/`)
    })*/

  
    

    return(
        <ApiContext.Provider>
            {children}
        </ApiContext.Provider>
    )
}