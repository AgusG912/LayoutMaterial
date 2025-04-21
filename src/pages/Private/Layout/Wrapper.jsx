import { useLayoutEffect } from "react"
import { useLocation } from "react-router-dom"


// This code is responsible for sending a page to the beginning 
// when the path is modified from the toggleMobileMenu
export const Wrapper = ({ children }) => {
    const location = useLocation();
  
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);

    }, [location.pathname]);
  
    return children
}
