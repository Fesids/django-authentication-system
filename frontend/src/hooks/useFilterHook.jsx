import { useCallback } from "react";
import { useFilterContext } from "../context/FilterContext/FilterContext"

export const useFilterHooks = () => {

    const {filters, setFilters} = useFilterContext();

    const handleDynamicValue = (val) => {
        return filters[val];

    }

    const setFilterValue = useCallback((name, value) => {
        setFilters(state => ({
            ...state,
            [name]: value
        }))
    }, []);

    const handleResetFilter = useCallback(() => {
        setFilters({
            searchValue: "",
            sortBy: null
        })
    }, [setFilters]);

    const handleFilterChange = useCallback((e) => {
        switch (e.type) {
          case 'click': {
            setFilterValue(e.target.title, e.target.innerText);
            break;
          }
          default:
            setFilterValue(e.target.name, e.target.value);
        }
      }, []);

    return{
        searchValue: filters.searchValue,
        sortValue: filters.sortBy,
        handleResetFilter,
        handleDynamicValue,
        handleFilterChange

    }


}