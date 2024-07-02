import { useState } from "react"
import { ListProdutoContainer } from "../ListProdutoContainer/ListProdutoContainer";
import { useProdutosContext } from "../../../../context/ApiContext";
import Loader from "../../../components/loader";
import {usePapaParse, useCSVDownloader} from "react-papaparse";
import { Link, useNavigate, useParams } from "react-router-dom";
import ErrorPage from "../../error/Error";


export const ListarProdutos = () => {


 
    const {CSVDownloader, Type} = useCSVDownloader();

    const [produtos, isLoadingProdutos, isErrorProdutos, refetchProdutos] = useProdutosContext();

    const navigate = useNavigate();
    const [pages, setPages] = useState(0)

    // PAGINAÇÃO


  
    const {page} = useParams();

    const page_url= new URLSearchParams(page).get("page")

    const dataLimit = 10;

    const goToNextPage = () => {
      const next = Number(page_url) + 1
      
      navigate(`../produtos/page=${next}&pageSize=10&pageOffset=9`)
    }

    const goToPreviousPage = () => {
      const prev = Number(page_url) - 1
      navigate(`../produtos/page=${prev}&pageSize=10&pageOffset=9`)
    }

    const changePage = e => {
      const pageNumber = Number(e.target.textContent)
      navigate(`../${pageNumber}`)
    }

    const getPaginationData = () => {
      const startIndex = page_url * dataLimit - dataLimit
      const endIndex = startIndex + dataLimit
      
      return produtos?.slice(startIndex, endIndex)
    }

    const getPaginationGroup = () => {
      setPages(Math.round(produtos?.length / dataLimit))
      let start = Math.floor((page_url - 1)/ pages) * pages
      return new Array(pages).fill().map((_, i) => start + i+1)
    }
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////


   

    //console.log(produtos)
    console.log(page_url)
    //console.log(getPaginationGroup())
    
    if(isErrorProdutos){
      return <ErrorPage onReload={refetchProdutos}/>
    }
    //"mx-auto max-w-screen-lg px-4 py-8 sm:px-8

    return(
    <div className="w-full px-4 py-8 sm:px-8 dark:bg-gray-800">
  <div className="flex items-center justify-between pb-6">
    <div>
      <h2 className="font-semibold text-gray-700 text-3xl dark:text-gray-200">Produtos Registrados</h2>
      <span className="text-xs text-gray-500 dark:text-gray-100">Visualize os produtos registrados</span>
    </div>
    <div className="flex items-center justify-between">
      <div className="ml-10 space-x-8 lg:ml-40 flex flex-row">
      <Link to={'../criarProduto'}><button
          

          className="flex items-center gap-2 rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white focus:outline-none focus:ring hover:bg-green-700"
        
        
        >
         <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="14" height="14" viewBox="0 0 24 24" stroke="currentColor"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>
          Adcionar
        </button></Link>
        {produtos && 
        
      

        <CSVDownloader
          type={Type.Button}
          filename={'produtos'}
          bom={true}
          config={{
            delimiter: ';'
          }}
          data={produtos}

          className="flex items-center gap-2 rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white focus:outline-none focus:ring hover:bg-green-700"
        
        
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
        </svg>
          CSV
        </CSVDownloader>

        
        }

         
      </div>
    </div>
  </div>
  <div className="overflow-y-hidden rounded-lg border dark:border-gray-700">
    <div className="overflow-x-auto">
      <table className="w-full dark:bg-gray-800" >
        <thead>
          <tr className="bg-green-600 text-left text-xs font-semibold uppercase tracking-widest text-white">
            <th className="px-5 py-3">CÓDIGO</th>
            <th className="px-5 py-3">DATA DE ENTRADA</th>
            <th className="px-5 py-3">CNPJ</th>
            <th className="px-5 py-3">DESCRIÇÃO</th>
            <th className="px-5 py-3">GRUPO</th>
          </tr>
        </thead>
        
        {isLoadingProdutos? 
          <div className="w-full flex justify-center items-center dark:bg-gray-800"><Loader/></div>
          
            : 
            <tbody className="text-gray-500 w-full ">
               {getPaginationData().map(prod => <ListProdutoContainer {...prod}/>)}
            
            </tbody>
          
        }
          
       
        
      </table>
    </div>
    <div className="flex flex-col items-center border-t bg-white px-5 py-5 sm:flex-row sm:justify-between dark:bg-gray-800 dark:border-gray-700">
        <span className="text-xs text-gray-600 sm:text-sm dark:text-gray-200"> Mostrando <span className="font-semibold text-green-600">{page_url}</span> página(s) de <span className="font-semibold text-green-600">{Number.isInteger(produtos?.length/dataLimit)? produtos?.length/dataLimit: Math.round(produtos?.length/dataLimit)+1}</span> </span>
      <div className="mt-2 inline-flex sm:mt-0">
          <button className="mr-2 h-[69px] w-[69px] rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100 dark:hover:bg-gray-700 text-yellow-400 dark:border-gray-700" onClick={goToPreviousPage} disabled={page_url == 1 || page_url == Math.round(produtos?.length/dataLimit)? "disable": ""}>Anterior</button>
        <button className="h-[69px] w-[69px] rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100  dark:hover:bg-gray-700 text-green-600 dark:border-gray-700" onClick={goToNextPage}>Próxima</button>
      </div>
    </div>
  </div>
</div>


    )
}