
export const filterAndSortProcessos = (processos=[], filters={searchValue:0, sortBy:"Data: Atual para Antigo"}) => {

    const filteredProcessos = processos.filter((processo) => {

        if(
            filters.searchValue 
            &&
            !processo.cnpj.toLowerCase().includes(filters.searchValue.toLowerCase())
        ){
            return false;
        }

        return true;

    });
  

    return sortProcessos(filteredProcessos, filters.sortBy)


}

const sortProcessos = (
    processos,
    sortBy
) => {
   
    
    switch(sortBy){
        case "Data: Atual para Antigo":
            return processos
            .slice()
            .sort((a, b) => b.created_at - a.created_at)
            .reverse()

        case "Data: Antigo para Atual":
                return processos
                .slice()
                .sort((a, b) => a.created_at - b.created_at)

        case null:
           
                      
            return processos;
        
        default:
            
            return processos;
    }

}