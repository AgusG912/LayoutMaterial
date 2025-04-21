import { Navigate, Outlet } from "react-router-dom"
import { PublicRoutes } from "../models/routes"
import { useAuthStore } from "../hooks";

const PrivateValidatioFragment = <Outlet />;
const PublicValidationFragment = <Navigate replace to={ `${PublicRoutes.PUBLIC}/${PublicRoutes.LOGIN}` } />;

export const AuthGuard = () => {

    const { status } = useAuthStore();

  return status === 'authenticated' ? ( PrivateValidatioFragment ) : ( PublicValidationFragment );
}