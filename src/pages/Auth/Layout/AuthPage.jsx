import Box from "@mui/material/Box";
import { useScreenUser } from "../../../hooks";
import { Outlet, useLocation } from "react-router-dom";
import { MainCard } from "../Components";
import { useLayoutEffect } from "react";


export const AuthPage = () => {
  
    const location = useLocation();
    const { palette } = useScreenUser();

    const gradientColor1 = palette.background.default;
    const gradientColor2 = palette.custom.navbar;

    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);
  
    }, [location.pathname]);

  return (
    <Box component='div' 
        className="boxCenterCol authMain"
        sx={{
            minHeight:'100vh',
            width: '100%',
            paddingLeft: {xs: '20px', md: '32px', lg:'64px'},
            paddingRight: {xs: '20px', md: '32px', lg:'64px'},
            paddingTop: { xs:'50px', md: '100px'},
            paddingBottom: '100px',

            //Gradient Effect
            background: `
                linear-gradient(45deg, 
                    ${ gradientColor1 }, 
                    ${ gradientColor2 }, 
                    ${ gradientColor1 }, 
                    ${ gradientColor2 })
                `,
            backgroundSize: '400% 400%', 
        }}>

            <MainCard>
                <Outlet />
            </MainCard>

    </Box>
  )
}