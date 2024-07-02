import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";


const Home = () => {

    return(
     
<div class="container flex flex-wrap pt-4 pb-10 m-auto mt-6 md:mt-15 lg:px-12 xl:px-16">
    <div class="w-full px-0 lg:px-4">
      <h2 class="px-16 text-base font-bold text-center md:text-3xl text-green-700">
            Escolha um módulo
      </h2>
      <p class="py-1 text-sm text-center text-gray-700 mb-10">
       Leia a descrição de cada módulo para adicionar e visualizar seus produtos
      </p>
      <div class="flex flex-wrap items-center justify-center py-4 pt-0">
        <div class="w-full p-4 md:w-1/3 lg:w-1/4 plan-card">
          <label class="flex flex-col rounded-lg shadow-lg group relative cursor-pointer hover:shadow-2xl">
            <div class="w-full px-4 py-6 rounded-t-lg card-section-1 flex justify-center flex-col items-center">
              <h3 class="mx-auto text-base font-semibold text-center underline text-green-500 group-hover:text-green-300">
                Processos
              </h3>
              <div class="w-24 h-24 p-5 bg-green-600 rounded-full mt-3">
        
                </div>
              
            </div>
            <div
              class="flex flex-col items-center justify-center w-full h-full py-6 rounded-b-lg bg-green-500"
            >
              <p class="text-xl text-white">
                299 processos
              </p>
              <Link to={"../processos"} className="w-5/6 py-2 mt-2 font-semibold text-center uppercase bg-white border border-transparent rounded text-green-500">
                VISUALIZAR
              </Link>
            </div>
          </label>
        </div>

        <div class="w-full p-4 md:w-1/3 lg:w-1/4">
          <label class="flex flex-col rounded-lg shadow-lg relative cursor-pointer hover:shadow-2xl">
            <div class="w-full px-4 py-8 rounded-t-lg bg-green-500 flex justify-center flex-col items-center">
              <h3 class="mx-auto text-base font-semibold text-center underline text-white group-hover:text-green-300">
                Criar Processo
              </h3>
              <div class="w-24 h-24 p-5 bg-white rounded-full mt-3">
        
                </div>
            
            </div>
            <div
              class="flex flex-col items-center justify-center w-full h-full py-6 rounded-b-lg bg-green-700"
            >
          
          <Link to={"../criarProcesso"} className="w-5/6 py-2 mt-2 font-semibold text-center uppercase bg-white border border-transparent rounded text-green-500">
                Criar
            </Link>
            </div>
          </label>
        </div>

        <div class="w-full p-4 md:w-1/3 lg:w-1/4 plan-card">
          <label class="flex flex-col rounded-lg shadow-lg group card-group relative hover:bg-jblue-secondary cursor-pointer hover:shadow-2xl">
            <div class="w-full px-4 py-6 rounded-t-lg card-section-1 flex justify-center flex-col items-center">
              <h3 class="mx-auto text-base font-semibold text-center underline text-green-500 group-hover:text-green-300">
               Produtos
              </h3>
              <div class="w-24 h-24 p-5 bg-green-600 rounded-full mt-3">
        
                </div>
           
            </div>
            <div
              class="flex flex-col items-center justify-center w-full h-full py-6 rounded-b-lg bg-green-500"
            >
              <p class="text-xl text-white">
                444 produtos
              </p>
              <Link to={"../produtos/page=1&pageSize=10&pageOffset=9"} className="w-5/6 py-2 mt-2 font-semibold text-center uppercase bg-white border border-transparent rounded text-green-500">
               Visualizar
                </Link>
            </div>
          </label>
        </div>

        <div class="w-full p-4 md:w-1/3 lg:w-1/4">
          <label class="flex flex-col rounded-lg shadow-lg relative cursor-pointer hover:shadow-2xl">
            <div class="w-full px-4 py-8 rounded-t-lg bg-green-500 flex justify-center flex-col items-center">
              <h3 class="mx-auto text-base font-semibold text-center underline text-white group-hover:text-white">
                Carregar Balança
              </h3>
              <div class="w-24 h-24 p-5 bg-white rounded-full mt-3">
        
                </div>
            
            </div>
            <div
              class="flex flex-col items-center justify-center w-full h-full py-6 rounded-b-lg bg-green-700"
            >
          
          <Link to={"../carga/balanca"} className="w-5/6 py-2 mt-2 font-semibold text-center uppercase bg-white border border-transparent rounded text-green-500">
                Carregar
            </Link>
            </div>
          </label>
        </div>

      </div>
    </div>
  </div>
       
        
    )
}


export default Home;

