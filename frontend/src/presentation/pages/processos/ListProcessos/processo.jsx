import { Link } from 'react-router-dom'
import './style.css'

export const ProcessoContainer = ({data_entrada, cod_prod, cnpj, nome_prod, status_atual}) => {


    return(
        <div class="bg-gray-100 dark:bg-gray-800 shadow-lg rounded p-4 mb-4 flex">
      
            <div class="ml-4 flex flex-col justify-between">
                <div class="flex items-center mb-2">
                    <div class="bg-green-700 dark:bg-green-500 w-4 h-4 flex items-center justify-center rounded mr-2">
                    <svg class="checkmark text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>
                    </div>
                    <h2 class="text-xl font-semibold text-green-700 dark:text-green-500">STATUS ATIVO</h2>
                </div>
                <div class="flex justify-between dark:text-gray-50 text-gray-800">
                    <div class="mr-4">
                        <p>{nome_prod}</p>
                        <p>CNPJ : {cnpj}</p>
                        <p>Cod Produto : {cod_prod}</p>
                    </div>
                    <div>
                        
                        <p>Data Entrada : {data_entrada}</p>
                    </div>
                </div>
            </div>

            <div class="w-1/12 bg-white dark:bg-gray-700 flex items-center  justify-center shadow-xl hover:shadow-2xl hover:scale-105 transition ease-in-out delay-100 ml-auto">
                    <Link class="flex items-center  justify-center" to={`/processo/${cnpj}/${cod_prod}`} > <img class="h-1/2 w-1/2  " src="/imagens/seguinte.png" alt=""/> </Link>
                </div>
    </div>
    )
}