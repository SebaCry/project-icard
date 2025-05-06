import routerAdmin from './routes.admin'
import routerClient from './routes.client'
import { Error404 } from '../pages'
import { BasicLayout } from '../layouts'

const routes = [
    ...routerAdmin, 
    ...routerClient, 
    {
    path: '*',
    layout: BasicLayout,
    component: Error404
    }
] // Los tres puntos sirven para devolver el contenido de un array 

export default routes