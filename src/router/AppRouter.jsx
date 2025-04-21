import { lazy } from "react";
import { Navigate, Route } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "../models/routes";
import { AuthRoutes } from "../pages/Auth/routes";
import { RoutesWithNotFound } from "./";
import { AuthGuard } from "../guards";

const PrimaryRoutes = lazy(() => import('../pages/Private/routes/PrimaryRoutes'));

export const AppRouter = () => {
   
  return (
    <RoutesWithNotFound>
        {/* Firts Route */}
        <Route path="/" element={ <Navigate to={ PrivateRoutes.PRIVATE } /> } />
        
        {/* Aqui tengo que agregar un modelo parecido al anterior pero hacia las rutas de la autenticacion */}
        <Route path={ `${PublicRoutes.PUBLIC}/*`} element={ <AuthRoutes /> } />

        {/* Private Route */}
        <Route element={ <AuthGuard /> }>
          <Route path={ `${ PrivateRoutes.PRIVATE }/*` } element={ <PrimaryRoutes /> } />

        </Route>
    </RoutesWithNotFound>
  )
}
