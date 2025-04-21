import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../hooks"
import { Roles } from "../models";

const UserPartnerValidationFragment = <Outlet />
const UserPartnerValidationFailed = <Navigate replace to={ `/` } />

// This is access based on rol.
const RolAccess = [ Roles.PARTNER, Roles.ADMIN ]

export const PartnerGuard = () => {

    const { userAuth } = useAuthStore();

  return RolAccess.includes( userAuth.rol ) ? (UserPartnerValidationFragment) : (UserPartnerValidationFailed); 
}