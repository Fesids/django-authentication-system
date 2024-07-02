import { useEffect, useRef, useState } from "react"
import { CustomKanban } from "../../usuarios/dragAndDropList/list"
import { createProcesso } from "../../../../context/functions/processos/processosFunctions"

export const CreateProcessForm = () => {

    const quantidadeTempo = useRef()
    const [passagemState, setPassagemState] = useState("Dia")
    const [processoMembros, setProcessoMembros] = useState([])

   const handleQuantidadeTempo = () => {
    const value = quantidadeTempo.current.value;
    console.log(value)
   }

  

   const handlePassagemState = (e) => {

    setPassagemState(e.target.value)
   }

   //console.log(passagemState)
   const teste = processoMembros;
   console.log(passagemState)   

   

   const cnpj = '098765'
   const cod_prod = '122332'
   const nome_prod = 'nome'
   const sendMembrosList = []

   processoMembros.map(pr => sendMembrosList.push(

    {
        id: pr.id,
        status: null,
        comentario: null,
        updated_at: null
    }
   ))

 
   const body = {
        "cod_prod": cod_prod,
        "cnpj": cnpj,
        "nome_prod": "Nome site",
        "status_processo": {
            andamentoProcesso : null,
            membros: sendMembrosList//testeLista?.current?.value
        },
        "status_atual": null,
        "tempo_atividade": `${quantidadeTempo} - ${passagemState}`
   }

   
   const performCreateProcesso = (e) => {
    e.preventDefault()
    createProcesso(body)
   }

   //console.log(sendMembrosList)
   console.log(processoMembros);
 

  
   
   



    return(
        <div className="w-full">
            <form class="w-full mx-[12px]" onSubmit={(e) => performCreateProcesso(e)}>

            <div class="max-w-md">
             <label for="quantidade" class="block mb-2 text-sm font-medium text-gray-900 "></label>
                <input ref={quantidadeTempo} onChange={handleQuantidadeTempo} type="number" id="quantidade" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-300 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 " placeholder="Digite a quantidade de tempo para esse processo" required />
            

           
                <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-b-lg sm:flex dark:border-gray-300 ">
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-300">
                        <div className="flex items-center ps-3">
                            <input onChange={e =>handlePassagemState(e)}  type="radio" value={"Dia"} name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-300"/>
                            <label htmlFor="horizontal-list-radio-license" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">Dia(s) </label>
                        </div>
                    </ li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-300">
                        <div className="flex items-center ps-3">
                            <input onChange={e => handlePassagemState(e)}  id="horizontal-list-radio-id" type="radio" value={"Mês"} name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                            <label htmlFor="horizontal-list-radio-id" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">Mês(es)</label>
                        </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-300">
                        <div className="flex items-center ps-3">
                            <input onChange={e => handlePassagemState(e)}  id="horizontal-list-radio-military" type="radio" value={"Semana"} name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                            <label htmlFor="horizontal-list-radio-military" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">Semana(s)</label>
                        </div>
                    </li>
                
                </ul>
            </div>
            
            <CustomKanban setMembros={setProcessoMembros}/>
            <button className="btn bg-green-500 text-gray-50 px-5 py-2 rounded-md" type="submit">Criar</button>
            </form>
        </div>
        
    )
}