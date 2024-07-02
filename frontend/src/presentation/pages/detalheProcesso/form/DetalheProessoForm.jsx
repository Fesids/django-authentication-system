import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { HistoricoProcesso } from "../historico/HistoricoProcesso";
import Loader from "../../../components/loader";


export const DetalheProcessoForm = ({processo}) => {
    const navigate = useNavigate()
    const {cnpj, cod_prod} = useParams()
    

    const [statusValue, setStatusValue] = useState()
    const [comentario, setComentario] = useState()
    const [detalhe, setDetalhe] = useState( {
        processoIndividual: 0, //provavelmente fiz isso caso seja apenas um aprovador, dessa forma não ira aparecer um histórico
        processoCompleto: {},
        processoHist: []
    })

   

    const handleSetStatus = (e) => {
        setStatusValue(e.target.value)
    }

    const handleSetComentario = (e) => {
        setComentario(e.target.value)
    }




    const id_aprovador = 3;
    let id_processo = processo?.id_processo;

    useEffect(() => {
       
        buscarProcessoEMembro();
    },[]);

   
    const selects = [{ "id": 1, "value": "Novo Produto" }, { "id": 2, "value": "Produto Existente" }]

    function findMemberById(obj, id) { //retorna a posição do membro da aprovação dentro da sequncia
        return obj.find(membro => membro.id === id);
    }

    

    async function buscarProcessoEMembro() {
        const response = await axios.get(`http://${location.hostname}:8000/api/processos/${cnpj}/${cod_prod}`)
        const data = response.data
        if (data[0].cod_prod) {
            const dados = data[0]
           
            id_processo = dados.id_processo;
            const membros = dados.status_processo.membros
            const membro = findMemberById(membros, id_aprovador)
            console.log(membro)

            setDetalhe({
                processoIndividual: membro,
                processoCompleto: dados,
                processoHist: membros,
            })
            if (membro.status !== null && membro.status !== 'visualizado') {
                //comentario.value = membro.comentario
                setComentario(membro.comentario)
                setStatusValue( membro.status)
                //statusValue.value = membro.status
                return false
            } 
            return 'aaa'
        }
    }

    async function validaAprovacao(e) {
        e.preventDefault()
        // console.log(selected.value)
        const data = { "id_processo": id_processo, "status": statusValue, "comentario":comentario, "id_usuario": id_aprovador }
        // console.log(JSON.parse(data))
        
        await axios.put('http://localhost:8000/api/processos/updateStatus',data)
        
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    }).then(data => {
        try {
            return JSON.parse(data);
        } catch (err) {
            console.log('Não é um JSON válido:', data);
            throw err;
        }
    }).then((data) => {
       navigate('../processos')
        console.log(data)
    }).catch((error) => {
        console.error('There has been a problem with your fetch operation:', error);
    });

        
    }

  
    console.log(detalhe.processoHist)




    return(
        <div>

       
        <form method="post" onSubmit={e => validaAprovacao(e)}>
            <div class="flex flex-row w-[245px] mb-4 mt-10" style={{flexDirection: "column"}}>
                <h2 className="text-3xl mb-2 dark:text-gray-100">Status do Produto</h2>
              
                <select id="underline_select" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 bord>{select.value}</option>
                        er-b-2 border-gray-200  dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer" onChange={(e) => handleSetStatus(e)}>
                        <option selected>Selecione uma opção</option>
                        {selects.map(select =>
                     
                     <option type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" key={select.id} value={select.value} >{select.value}</option>
                     
                         )}
                    </select>
             
                </div>
               
              
            <div className="mt-5">
            <h2 className="text-3xl mb-3">Comentário</h2>
            
               <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                    <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                        <label for="comment" className="sr-only">Comentário</label>
                        <textarea onChange={(e) => handleSetComentario(e)} value={comentario} id="comment" rows="4" class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Descreva ao motivo da sua seleção..." required />
                        </div>
                        <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                            <Link to={"../processos"}><button  class="inline-flex items-center py-2.5 px-4 text-s font-medium text-center text-white bg-blue-400 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                               Voltar
                            </button></Link>

                            <button  type="submit" class="inline-flex items-center py-2.5 px-4 text-s font-medium text-center text-white bg-green-600 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                                Concluir
                            </button>
                            
                            
                        </div>
                    </div>

                     </div>
            
            </form>
            {detalhe.processoHist?<HistoricoProcesso historicolista={
                detalhe.processoHist
            }/>: <Loader/>}

            </div>
          
    )
}

