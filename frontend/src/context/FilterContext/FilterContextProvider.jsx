import { useMemo, useState } from "react"
import { FilterContext } from "./FilterContext";

const FilterContextProvider = ({children}) =>{

    const [filters, setFilters] = useState({
        searchValue: "",
        sortBy: null
    });

    const contextValue = useMemo(
        () => ({filters, setFilters}),
        [filters, setFilters]
    );

    return(
        <FilterContext.Provider value={contextValue}>
            {children}
        </FilterContext.Provider>
    )


}

export default FilterContextProvider;