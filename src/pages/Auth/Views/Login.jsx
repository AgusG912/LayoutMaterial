import { TitleView } from "../Components"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema } from "../models"
import Button from "@mui/material/Button"
import { InputCustom } from "../Components/MainCard"
import Box from "@mui/material/Box"
import { useLayoutEffect } from "react"
import { useAuthStore, useUiStore } from "../../../hooks"


export const Login = () => {
  
  // "Store
  const { status, startLogin } = useAuthStore();
  const { setBackAuthCard } = useUiStore();

  // "The functionality of zod is called to control the form.
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data) => {
    startLogin(data)
  }

  // "Update toggleAuthCard = Back face.
  useLayoutEffect(() => {
    setBackAuthCard();
  
  }, [])
  

  return (
    <>
      <TitleView title="Iniciar sesión" />
      
      <form onSubmit={ handleSubmit(onSubmit) } style={{ display:'flex', flexDirection:'column', gap:'0.75rem' }}>
        
        <InputCustom variant="outlined" 
          name="email" 
          control={ control } 
          label="Correo electrónico" 
          type="email" 
          error={ errors.email } 
          fw 
          placeholder='Ejemplo@email.com'
        />

        <InputCustom variant="outlined" 
          name="password" 
          control={ control } 
          label="Contraseña" 
          type="password" 
          error={ errors.password } 
          fw 
          placeholder='********' 
        />
        
        <Box component='div' sx={{ padding:'10px 20px', display:'flex', flexDirection:'column', gap:'.8rem' }}>
          <Button type="submit" variant="contained" 
            disabled={ status === 'checking' ? true : false }
            sx={{ 
              height: '50px', 
              width: '100%', 
              borderRadius:'25px', 
              backgroundColor: 'custom.loginButton',
              color: 'white',
              textTransform: 'none',
              fontSize: '16px',
              letterSpacing: '0.5px',
              transition: 'background-color 0.6s ease',
              ':hover': {
                backgroundColor: 'custom.loginButtonHover',
              }
            }}>
            
            Iniciar sesión
          </Button>

          <Button variant="outlined"
            disabled={ status === 'checking' ? true : false }
            sx={{ 
              width: '100%', 
              height: '50px',
              fontSize: { xs:'10', sm: '15px' },
              paddingTop: '.25rem',
              paddingBottom: '.25rem',
              textTransform: 'none',
              borderRadius:'25px',
            }}>
            
            ¿Olvidaste tu contraseña?
          </Button>
        </Box>
      </form>
    </>
  )
}

export default Login;