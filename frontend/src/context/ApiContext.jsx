import { createContext, useContext } from "react";

export const ApiContext = createContext()
export const ProcessosContext = createContext()
export const ProdutosContext = createContext()
export const ClientesContext = createContext()

export const UserContext = createContext()

//// **** carga balança

export const BalancaContext = createContext()


export const useApiContext = () => {
    const context = useContext(ApiContext);
    if(!context) {
        throw new Error(
            "useApiContext deve ser usado no contexto de um ApiContextProvider"
        );
    }
    return context;
}

export const useProcessosContext = () => {
    const context = useContext(ProcessosContext);
    if(!context) {
        throw new Error(
            "useProcessosContext deve ser usado no contexto de um ProcessosContextProvider"
        );
    }
    return context;
}

export const useProdutosContext = () => {
    const context = useContext(ProdutosContext);
    if(!context) {
        throw new Error(
            "useProdutosContext deve ser usado no contexto de um ProdutosContextProvider"
        );
    }
    return context;
}

export const useClientesContext = () => {
    const context = useContext(ClientesContext)
    if(!context) {
        throw new Error(
            "useClientesContext deve ser usuado no contexto de um ClientesContextProvider"
        )
    }

    return context
}

export const useBalancaContext = () => {
    const context = useContext(BalancaContext)
    if(!context) {
        throw new Error(
            "useBalancaContext deve ser usuado no contexto de um BalancaContextProvider"
        )
    }

    return context
}



export const useUserContext = () => {
    const context = useContext(UserContext)
    if(!context) {
        throw new Error(
            "useUserContext deve ser usuado no contexto de um UserContextProvider"
        )
    
    }

    return context
}

