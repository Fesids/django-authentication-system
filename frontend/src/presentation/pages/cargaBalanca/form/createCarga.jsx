

import { Fragment, useRef, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { useClientesContext } from '../../../../context/ApiContext'
import Loader from '../../../components/loader'
import { cargaBalanca } from '../../../../context/functions/balanca/balancaFunction'
//import { readItensMGV } from '../../../../helpers/balancaHelper'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function CreateCargaForm() {
  const [selected, setSelected] = useState([]);
  const [clientes, isClientesLoading] = useClientesContext();
  //const [arquivoCaminho, setArquivoCaminho] = useState();
  const [selectedCliente, setSelectedCliente] = useState();
  const [selectedArq, setSelectedArq] = useState();
  
  

  const arquivoCaminhoRef = useRef();

// Inside the input element's onChange handler


// Inside handleEfetuarCarga function
//const arquivoCaminho = arquivoCaminhoRef?.current?.files[0];

  //console.log(arquivoRef)
  console.log(selectedCliente)
  //console.log(arquivoCaminho)
  console.log(selectedArq)

  
  const handleEfetuarCarga = (e) => {
   
    e.preventDefault()
    const arquivoCaminho = arquivoCaminhoRef.current?.files[0];
    cargaBalanca(selectedCliente["cnpj"], selectedArq);
  }

  if(isClientesLoading){
    return <Loader/>
  }


  return (
    <div >
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Listbox.Label className="mx-5 block text-sm font-medium leading-6 text-gray-900">Selecione</Listbox.Label>
          <div className="relative mt-2">
            <Listbox.Button className="mx-5 relative w-3/4 cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
              <span className="flex items-center">
                <img src={selected.avatar} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" />
                <span className="ml-3 block truncate">{selected.descricao} - {selected.cnpj}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="mx-5 absolute z-10 mt-1 max-h-56 w-3/4 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {clientes?.map((person) => (
                  <Listbox.Option
                    key={person.cnpj}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={person}
                    onClick={() => setSelectedCliente(person)}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <img src={person.avatar} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" />
                          <span
                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                          >
                            {person.descricao} - {person.cnpj}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>


    <div class="h-screen font-sans text-gray-900 bg-gray-100 border-box">
    <div class="flex justify-center items-center w-full mx-auto sm:max-w-lg">

        <div class="flex flex-col items-center justify-center w-full h-auto my-20 bg-white sm:w-3/4 sm:rounded-lg sm:shadow-xl">
            <div class="mt-10 mb-10 text-center">
                <h2 class="text-2xl font-semibold mb-2 text-green-700">Faça upload dos seus arquivos</h2>
                <p class="text-xs text-gray-500">O arquivo deve ser do formato .txt</p>
            </div>
            <form  class="relative w-4/5 h-32 max-w-xs mb-10 bg-white bg-gray-100 rounded-lg shadow-inner">
                {/*<input type="file" id="file-upload" class="hidden" onChange={(e) => setArquivoCaminho(e.target.value)}/>*/}
                <input type="file" id="file-upload" class="hidden" ref={arquivoCaminhoRef} onChange={(e) => setSelectedArq(e.target.files[0])} />

                <label for="file-upload" class="z-20 flex flex-col-reverse items-center justify-center w-full h-full cursor-pointer">
                    <p class="z-10 text-xs font-light text-center text-gray-500">Clique ou arraste seu arquivo aqui</p>
                    <svg class="z-10 w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
                            </svg>
                        </label>
                 
                    </form>
                   
                </div>
                <button onClick={(e) => handleEfetuarCarga(e)} class="absolute bottom-8 bg-green-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" >
                    <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                    <span>Efetuar carga</span>
                </button>
            </div>
           
        </div>
       
    </div>
  )
}
