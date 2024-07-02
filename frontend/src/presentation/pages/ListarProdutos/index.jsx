import { Header } from "../../components/layout/header"
import { ListarProdutos } from "./lista/list";



const  Page = () => {

    return(
        <div className="dark:bg-gray-800 w-full h-full">
        <Header/>
       
        <ListarProdutos/>
        </div>
    )
}

export default Page;