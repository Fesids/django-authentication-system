import { createContext, useContext } from "react";

export  const FilterContext = createContext(undefined);

export const useFilterContext = () => {
    const context = useContext(FilterContext);
    if(!context){
        throw new Error(
            'UseFilterContext deve ser usado dentro de um FilterContextProvider'
        )
    }

    return context;
}