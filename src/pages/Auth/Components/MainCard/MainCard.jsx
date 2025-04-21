import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import { ButtonToggleCard, Logo } from ".";
import { PublicRoutes } from "../../../../models";
import { useUiStore } from "../../../../hooks";





export const MainCard = ({ children }) => {

    const { toggleAuthCard } = useUiStore();
 
    return (
        <Box componente='div' className={`authCardContent ${ toggleAuthCard ? 'authCardFlip' : '' }`}
            sx={{
                minHeight: '700px',
                maxWidth: '600px',
                width: '100%',
                heigh: '100%',
                backgroundColor: 'custom.authCard',
                borderRadius: '10px',
                padding:'20px'
            }}>

                {
                    toggleAuthCard
                        ? (
                            // FrontFace: Register
                            <Box component='div' 
                                className="authFrontCard" 
                                sx={{
                                    display:'flex', 
                                    flexDirection:'column', 
                                    justifyContent:'space-between', 
                                    height:'700px'
                                }}>
                                
                                <Logo />
                                <Divider />
                                { children }
                                <Divider />
                                <ButtonToggleCard label='¿Ya tienes una cuenta?' path={ PublicRoutes.LOGIN } />

                            </Box>
                        )
                        : (
                            // Backface: Login
                            <Box component='div'
                                sx={{
                                    display:'flex', 
                                    flexDirection:'column', 
                                    justifyContent:'space-between', 
                                    height:'700px'
                                }}>
                                
                                <Logo />
                                <Divider />
                                { children }
                                <Divider />
                                <ButtonToggleCard label='¿Todavía no tienes una cuenta?' path={ PublicRoutes.REGISTER } />
                            </Box>
                        )
                }
            
                
        </Box>
    )
}