import { render } from 'react'
import '../presentation/styles/index.css'
import { Router, RouterProvider } from 'react-router-dom'
import {RouterList, routes} from '../presentation/routes/routes'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ApiContextProvider} from '../context/APIContextProvider'
import {GoogleOAuthProvider} from '@react-oauth/google'


const queryClient = new QueryClient();
render(

    <GoogleOAuthProvider clientId='124'>
        <QueryClientProvider client={queryClient}>
            <ApiContextProvider>
                <RouterList/>
            </ApiContextProvider>
            
        </QueryClientProvider>
    </GoogleOAuthProvider>


, document.getElementById('app'))
