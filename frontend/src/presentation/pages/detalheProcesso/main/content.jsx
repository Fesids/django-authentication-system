import { useParams } from "react-router-dom";
import { ProcessoDetalheContainer } from "../../processos/processoDetalhe/processoDetalheContainer"
import { useEffect, useState } from "react";
import { fetchProcessoByCNPJAndProdCod } from "../../../../context/functions/processos/processosFunctions";
import { mainURI } from "../../../constants/uri";
import { DetalheProcessoForm } from "../form/DetalheProessoForm";


export const DetalheProcessoMainContent = () => {
    const {cnpj, cod_prod} = useParams();
    const [processo, setProcesso] = useState({});

 

    useEffect(() => {
        fetchProcessoByCNPJAndProdCod(cnpj, cod_prod)
        .then(resp => setProcesso(resp[0]));

       
    },[])

   

    return(
        <div className="mx-3 dark:bg-gray-800">
            <div>
                <h2 className="text-4xl font-semibold mt-2 mb-1 dark:text-gray-100 mx-3">
                    Processo Aprovação {processo? processo.nome_prod: ""}
                </h2>

            </div>
            <ProcessoDetalheContainer {...processo}/>
            <DetalheProcessoForm processo={processo}/>
        </div>
       
    )
}