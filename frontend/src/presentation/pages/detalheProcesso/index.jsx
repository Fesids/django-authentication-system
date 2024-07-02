import { useParams } from "react-router-dom";
import { Header } from "../../components/layout/header";
import { fetchProcessoByCNPJAndProdCod } from "../../../context/functions/processos/processosFunctions";
import { mainURI } from "../../constants/uri";
import { useEffect, useState } from "react";
import { DetalheProcessoMainContent } from "./main/content";

const Page = () => {
   
   

    return(
        <div className="dark:bg-gray-800">
            <Header/>
            <DetalheProcessoMainContent/>
           
        </div>
    )
}

export default Page;