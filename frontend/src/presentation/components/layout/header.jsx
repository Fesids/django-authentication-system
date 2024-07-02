import { useState } from "react"
import { Link } from "react-router-dom";
import Switcher from "../DarkMode/Switcher/Switcher";

export const Header = () => {

    // states
    const [showProfileMenuFull, setShowProfileMenuFull] = useState(false);
    const [showProfileMenuMobile, setShowProfileMenuMobile] = useState(false);
    const [showBurgerMenu, setShowBurgerMenu] = useState(false);


    // handleFunctions
    const handleShowProfileMenuFull = () => {
        setShowProfileMenuFull(!showProfileMenuFull);
    }

    const handleShowBurgerMenu = () => {
        setShowBurgerMenu(!showBurgerMenu);
    }

    const handleShowProfileMenuMobile = () => {
      setShowProfileMenuMobile(!showProfileMenuMobile);
  }



    return(
        <nav x-data="{ open: false }" className="bg-gray-50 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="../"><img className="h-8 w-auto" src="/imagens/logo.png" alt="Logo"/></Link>
            </div>

           
            <div className="hidden lg:ml-10 lg:block">
              <div className="flex space-x-4">
                
                  <a href="#" className="bg-gray-100 px-3 py-2 rounded-md text-sm font-medium text-gray-900 dark:bg-gray-800 dark:text-gray-100" aria-current="page"  >Dashboard</a>
                
                  <a href="#" className="hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium text-gray-900  dark:text-gray-100" >Home</a>
                
                  <a href="#" className="hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium text-gray-900  dark:text-gray-100" >Processos</a>
                
             
                
              </div>
            </div>
          </div>

          <div className="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
           
            <div className="w-full max-w-lg lg:max-w-xs">
              <label for="search" className="sr-only">Search</label>
              <div className="relative text-gray-400 focus-within:text-gray-500">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="h-5 w-5 dark:text-gray-50" x-description="Heroicon name: mini/magnifying-glass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd"></path>
                </svg>
                </div>
                <input id="search" className="block w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 py-2 pl-10 pr-3 leading-5 text-gray-900 placeholder-gray-500 focus:border-purple-500 focus:placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500 sm:text-sm" placeholder="Pesquisar processos" type="search" name="search"/>
              </div>
            </div>
          </div>
          <div className="flex lg:hidden">
            
            <button type="button" className="inline-flex items-center justify-center rounded-md bg-gray-50 dark:bg-gray-700 p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500" aria-controls="mobile-menu"  aria-expanded="false" onClick={handleShowBurgerMenu}>
              <span className="sr-only" >Open main menu</span>
              <svg  className="block h-6 w-6"  x-description="Heroicon name: outline/bars-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" >
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
            </svg>
            <svg  className="hidden h-6 w-6" x-description="Heroicon name: outline/x-mark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
            </button>
          </div>

         
          <div className="hidden lg:ml-4 lg:block">
            <div className="flex items-center">
              <button type="button" className="flex-shrink-0 rounded-full bg-gray-50 dark:bg-gray-800 p-1 text-gray-400 hover:text-gray-500 ">
              <Switcher/>
              </button>

              
              <div  className="relative ml-3 flex-shrink-0">
                <div>
                  <button type="button" className="flex rounded-full bg-gray-50 text-sm text-white focus:outline-none focus:ring-2 " id="user-menu-button" x-ref="button" onClick={handleShowProfileMenuFull}>
                    <span className="sr-only">Open user menu</span>
                    <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt=""/>
                  </button>
                </div>
                
                  <div x-show="open"  /*x-transition:enter-start="transform opacity-0 scale-95" x-transition:enter-end="transform opacity-100 scale-100" x-transition:leave="transition ease-in duration-75" x-transition:leave-start="transform opacity-100 scale-100" x-transition:leave-end="transform opacity-0 scale-95"*/ className={`${showProfileMenuFull? "":"hidden"} absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-gray-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`} x-ref="menu-items" x-description="Dropdown menu, show/hide based on menu state." role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1" >
                    
                      <a href="#" className="block py-2 px-4 text-sm text-gray-700 dark:text-gray-100"  role="menuitem" tabindex="-1" id="user-menu-item-0" >Seu Perfil</a>
                    
                      <a href="#" className="block py-2 px-4 text-sm text-gray-700  dark:text-gray-100"  role="menuitem" tabindex="-1" id="user-menu-item-1" >Configurações</a>
                    
                      <a href="#" className="block py-2 px-4 text-sm text-gray-700 dark:text-gray-100"  role="menuitem" tabindex="-1" id="user-menu-item-2" >Log out</a>
                   
                  </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      <div x-description="Mobile menu, show/hide based on menu state." className={`${showBurgerMenu? "": "hidden"} border-b border-gray-200 dark:border-gray-700  dark:bg-gray-800 lg:hidden`} id="mobile-menu" x-show="open">
        <div className="space-y-1 px-2 pt-2 pb-3">
          
            <a href="#" className="hover:bg-gray-100 block px-3 py-2 rounded-md font-medium text-gray-900 dark:hover:bg-gray-700 dark:text-gray-100" aria-current="page" >Dashboard</a>
          
            <a href="#" className="hover:bg-gray-100 block px-3 py-2 rounded-md font-medium text-gray-900 dark:hover:bg-gray-700 dark:text-gray-100" aria-current="page" >Home</a>
          
            <a href="#" className="hover:bg-gray-100 block px-3 py-2 rounded-md font-medium text-gray-900 dark:hover:bg-gray-700 dark:text-gray-100" aria-current="page" >Processos</a>
          
          
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 pt-4 pb-3" >
          <div className="flex items-center px-5" >
            <div className="flex-shrink-0" onClick={handleShowProfileMenuMobile}>
              <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt=""/>
            </div>
            <div className="ml-3">
              <div className="text-base font-medium text-gray-800 dark:text-gray-300">Heloísa 123</div>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-200">heloísa123@gmail.com</div>
            </div>
            <button type="button" className="ml-auto flex-shrink-0 rounded-full bg-gray-50 dark:bg-gray-800 p-1 text-gray-400 hover:text-gray-500 ">
              <span className="sr-only">View notifications</span>
             <Switcher/>
            </button>
          </div>
          <div className={`${showProfileMenuMobile? "":"hidden"} mt-3 space-y-1 px-2`}>
            
              <a href="#" className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-100">Seu Perfil</a>
            
              <a href="#" className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700  dark:text-gray-100">Configurações</a>
            
              <a href="#" className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-100">Log out</a>
            
          </div>
        </div>
      </div>
    </nav>
    )
}