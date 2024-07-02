import FilterContextProvider from "../../../context/FilterContext";
import Filters from "../../components/Filters";
import { Header } from "../../components/layout/header"
import { ListProcessos } from "./ListProcessos/listProcessos";
import { SearchSection } from "./searchSection/searchSection";

const Page = () => {

    return(
        <div className="dark:bg-gray-800">

            <Header/>
            <h2 className="ml-5 lg:ml-12 mb-4 text-4xl font-semibold mt-2 dark:text-gray-50">Listagem de Processos</h2>
            <FilterContextProvider>
                {/*<SearchSection/>
                <ListProcessos/>*/}
                <Filters>
                    <ListProcessos/>
                </Filters>
            </FilterContextProvider>
            
        
        </div>
    )
}

export default Page;