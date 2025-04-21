import { lazy } from "react";
import { Navigate, Route } from "react-router-dom";
import { RoutesWithNotFound } from "../../../router";
import { PublicRoutes } from "../../../models";
import { AuthPage } from "../Layout";


const Login = lazy(() => import('../Views/Login'))
const Register = lazy(() => import('../Views/Register'))


export const AuthRoutes = () => {
  return (
    <RoutesWithNotFound>

      <Route path="/" element={ <AuthPage /> }>
        <Route path='/' element={ <Navigate to={ PublicRoutes.LOGIN } /> } />
        
        <Route path={ PublicRoutes.LOGIN } element={ <Login /> } />
        <Route path={ PublicRoutes.REGISTER } element={ <Register /> } />

      </Route>

    </RoutesWithNotFound>
  )
}