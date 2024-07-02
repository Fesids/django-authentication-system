
export const ListProdutoContainer = ({cnpj, dt_entrada_do_registro, cod_prod_cliente, desc_estendida}) => {

    return(
        <tr className="dark:bg-gray-800">
            <td className="border-b border-gray-200 dark:border-gray-700 bg-white px-5 py-5 text-sm dark:bg-gray-800">
              <p className="whitespace-no-wrap">{cod_prod_cliente}</p>
            </td>
            <td className="border-b border-gray-200 dark:border-gray-700 bg-white px-5 py-5 text-sm dark:bg-gray-800">
              <div className="flex items-center">
                
                <div className="ml-3">
                  <p className="whitespace-no-wrap">{dt_entrada_do_registro}</p>
                </div>
              </div>
            </td>
            <td className="border-b border-gray-200 dark:border-gray-700 bg-white px-5 py-5 text-sm dark:bg-gray-800">
              <p className="whitespace-no-wrap">{cnpj}</p>
            </td>
            <td className="border-b border-gray-200 dark:border-gray-700 bg-white px-5 py-5 text-sm dark:bg-gray-800">
              <p className="whitespace-no-wrap">{desc_estendida}</p>
            </td>

            <td className="border-b border-gray-200 dark:border-gray-700 bg-white px-5 py-5 text-sm dark:bg-gray-800">
              <span className="rounded-full bg-green-200 px-3 py-1 text-xs font-semibold text-green-900">Ativo</span>
            </td>
          </tr>
    )
}