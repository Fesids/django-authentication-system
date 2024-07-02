import Loader from "../../../components/loader"

export const HistoricoProcesso = ({historicolista}) =>{

    /*if(!historicolista.length || !historicolista){
        return (
            <div className="mt-4">
                <h2 className="text-3xl mb-4">Histórico</h2>
                <Loader/>
            </div>
        )
      
    }*/

 

    
        return(
            <div className="mt-4">
                <h2 className="text-3xl mb-4">Histórico</h2>
                <ol className="relative border-s border-gray-200 dark:border-gray-700 ml-5">                  
                
                    {historicolista? historicolista.map((item) => 
                        <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{item.updated_at} - {item.status}</time>
                        <h3 className="text-lg font-semibold text-gray-900 ">Aprovador : {item.id}</h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Comentário : {item.comentario}.</p>
                    </li>):""}
                
                </ol>
            </div>

        


        )
    
}