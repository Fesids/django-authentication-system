import { Provider } from "react-redux";
import { CargaBalancaPage, CriarProcessoPage, CriarProdutoPage, DetalheProcessoPage, HomePage, ListarProdutosPage, LoginFormPage, ProcessosPage, RegisterLoginForm } from "../pages";
import { createBrowserRouter , RouterProvider} from "react-router-dom";

export const routes = createBrowserRouter(

    [
        {
            path: "",
            element: <HomePage/>
        },

        {
            path: "/criarProcesso",
            element: <CriarProcessoPage/>
        },
        {
            path: "/processos",
            element: <ProcessosPage/>
        },
        {
            path: '/processo/:cnpj/:cod_prod',
            element: <DetalheProcessoPage/>
        },
            // #### PRODUTO PAGES
        {
            path: '/criarProduto',
            element: <CriarProdutoPage/>

        },
        {
            path: '/produtos/:page',
            element: <ListarProdutosPage/>
        },

        {
            path: '/carga/balanca',
            element: <CargaBalancaPage/>
        },
        {
            path: "/login",
            element: <LoginFormPage/>
        },
        {
            path: "/registro",
            element: <RegisterLoginForm/>
        }
    ]
)

export const RouterList = () => {

    return(

        <RouterProvider router={routes}/>
        
    )
}

