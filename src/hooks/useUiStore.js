import { useDispatch, useSelector } from "react-redux"
import { onToggleMobileMenu, onToggleDesktopSidebar, closeMobileMenu, openMobileAccountMenu, closeMobileAccountMenu, switchFrontAuthCard, switchBackAuthCard } from "../store";



export const useUiStore = () => {

    // 1. "Initializing dispatcher and taking values from the store. 
    const { 
        //* BEFORE AUTH
        // "AUTH CARD
        toggleAuthCard,

        
        //* AFTER AUTH
        // "DESKTOP UI VERSION: PROPS
        sideBarMinWidth,
        sideBarPosition,
        sideBarWidth,
        toggleDesktopSidebar,
        
        // "MOBILE UI VERSION: PROPS
        toggleMobileMenu, 
        toggleMobileAccountMenu,

    } = useSelector( (store) => store.ui );
    const dispatch = useDispatch();


    // 2. "Working with Props Configuration for a Responsive View.
    const drawerWidth = toggleDesktopSidebar ? sideBarWidth : sideBarMinWidth;

    // 3. "Creating methods associated with store management.

    //* BEFORE AUTHENTICATED: 
    //   - Switch Auth Card
    const setFrontAuthCard = () => { dispatch( switchFrontAuthCard() ) }
    const setBackAuthCard = () => { dispatch( switchBackAuthCard() ) }


    //* AFTER AUTHENTICATED: 
    // 3.1 DESKTOP VERSION
    const setToggleDesktopSidebar = () => { dispatch( onToggleDesktopSidebar() ); }
    
    // 3.2 MOBILE VERSION
    const setToggleMobileMenu = () => { dispatch( onToggleMobileMenu() ); }
    const setCloseMobileMenu = () => { dispatch( closeMobileMenu() ); }
    const openSwipeableDrawer = () => { dispatch( openMobileAccountMenu() ); }
    const closeSwipeableDrawer = () => { dispatch( closeMobileAccountMenu() ); }


    // 4. "Returning properties and methods, separated to maintain a sequential order by type.
    return {
        //* BEFORE AUTH
        //Props and Methods from AuthCard Flip
        toggleAuthCard,
        setFrontAuthCard,
        setBackAuthCard,


        //* AFTER AUTH
        //Props and Methods from DesktopSideBar
        drawerWidth,
        sideBarMinWidth,
        sideBarPosition,
        toggleDesktopSidebar,
        setToggleDesktopSidebar,
        
        //Props and Methods from MobileMenu ( MobileMenuContainer as HamburgerMenu )
        toggleMobileMenu,
        setCloseMobileMenu,
        setToggleMobileMenu,

        //Props and Methods from MobileAccountMenu ( SwipeableEdgeDrawer )
        toggleMobileAccountMenu,
        openSwipeableDrawer,
        closeSwipeableDrawer,

    }
}