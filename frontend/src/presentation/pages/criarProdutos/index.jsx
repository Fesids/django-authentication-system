import { Header } from "../../components/layout/header";
import { CreateProdutoForm } from "./form/createProdutoForm"


const Page = () => {

    return(
        <div>
            <Header/>
            <CreateProdutoForm/>
        </div>
    )
}

export default Page;