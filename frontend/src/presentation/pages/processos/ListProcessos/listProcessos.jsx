import { useMemo } from "react";
import { useApiContext, useProcessosContext } from "../../../../context/ApiContext"
import { useFilterContext } from "../../../../context/FilterContext/FilterContext";
import { ProcessoContainer } from "./processo";
import { filterAndSortProcessos } from "../../../../helpers/FilterProcessosHelper";

export const ListProcessos = () => {
    const [processos] = useProcessosContext();
    const {filters} = useFilterContext();

    const filtedAndSortProcesso = useMemo(
        () => filterAndSortProcessos(processos, filters),
        [processos, filters]
    )

    

    return(
         
    <div class="w-3/3 m-4">
         {filtedAndSortProcesso?.map(processo => <ProcessoContainer {...processo}/>)}
       
       
    </div>
    )
}