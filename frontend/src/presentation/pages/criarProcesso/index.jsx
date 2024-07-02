
import { useEffect } from "react"
import { mainURI } from "../../constants/uri"
import axios from "axios"
import { Header } from "../../components/layout/header"
import { CreateProcessForm } from "../../components/process/CreateForm/form"


// criar processo
const Page = () => {
  
    return(
        <div>
            <Header/>
            <CreateProcessForm/>
        </div>
    )

}

export default Page;