import { useState } from "react"
import { useFilterHooks } from "../../../../hooks/useFilterHook"
import Filters from "../../../components/Filters";


export const SearchSection = () => {

     const {sortValue, handleResetFilter, searchValue, handleFilterChange} = useFilterHooks();
    const [option, setOption] = useState("")

     const handleChange = (e) => {
        handleFilterChange(e);
      };


    const [showOptions, setShowOptions] = useState(false)

    const handleShowOptions = () => {
        setShowOptions(!showOptions)
    }

    const handleSetOption = (e) => {
        setOption(e)
        handleShowOptions()
    }

    console.log(option)

    

    return(
        <section className="w-full dark:bg-gray-800">

                <form class="max-w-full mx-auto">
                    <div class="flex">
                        <label for="search-dropdown" class="mb-2 text-sm font-medium text-gray-900 sr-only "></label>
                        <button id="dropdown-button" data-dropdown-toggle="dropdown" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">{option?option:"Opções"}<svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6" onClick={handleShowOptions}>
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                        </svg></button>
                        <div id="dropdown" class={`absolute z-10  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 ${showOptions? "": "hidden"} mt-11`}>
                            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                            <li>
                                <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" 
                                onClick={(e) => handleSetOption(e.target.value)} value={"cnpj"}>CNPJ</button>
                            </li>
                            <li>
                                <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" 
                                onClick={(e) => handleSetOption(e.target.value)} value={"cod_prod"}>Código do produto</button>
                            </li>
                           
                            </ul>
                        </div>
                        <div class="relative w-full">
                            <input
                             type="text" 
                             id="search-dropdown" 
                             name="searchValue"
                             className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" 
                             placeholder="Digite o CNPJ ou o código do produto..."
                             value={searchValue}
                             onChange={(e) => handleChange(e)}
                             
                            />
                            <button type="submit" class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-green-700 rounded-e-lg border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 ">
                                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                                <span class="sr-only">Search</span>
                            </button>
                        </div>
                    </div>
                </form>

                              
        </section>
    )
}