import { useDispatch, useSelector } from "react-redux"
import { onChecking, onLogin, onLogout, setUserState } from "../store";
import { useNavigate } from "react-router-dom";


export const useAuthStore = () => {
    const { status, user: userAuth } = useSelector( (store) => store.auth );
    const dispatch = useDispatch();
    const redirectTo = useNavigate();

    const startLogin = ({ email }) => {
        // "Update the state to checking.
        dispatch( onChecking() );

        // "Add all the user's authentication information.
        dispatch( onLogin({
            email: email,
            rol: 'user',
            accountVerified: true,
            accountStatus: 'active',
            lastLogin: new Date().getTime() - 1000,
        }) );

        // "Here we set the user's value to a new section of the store, 
        //  allowing us to manage user interactions in a much more practical 
        //  and intuitive way.
        dispatch( setUserState({
            fullName: 'Simón José Antonio de la Santísima',
            email: email,
            rol: 'user',
            accountVerified: true,
            accountStatus: 'active',
            lastLogin: new Date().getTime() - 1000,
            newNotifications: true, 
            themeUI: 'system',   // 'dark', 'light', 'system'
            accountBalance: 276458.52,
        }) );

        // "Upon completing the registration, redirect the user to the main page 
        //  so they can go through the guard.
        redirectTo('/',{ replace: true });
    }

    const startLogout = () => {
        dispatch( onLogout() )
    }

    return{
        //Props
        status,
        userAuth,

        //Methods
        startLogin,
        startLogout,
    };
}