import { useLayoutEffect } from "react";
import { useAuthStore, useUiStore } from "../../../hooks";
import { InputCustom, TitleView } from "../Components"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../models";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";


export const Register = () => {

  // "Store
  const { status } = useAuthStore();
  const { setFrontAuthCard } = useUiStore();

  // "The functionality of zod is called to control the form.
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(registerSchema),
  })
  
  const onSubmit = (data) => {
    console.log(data)
  }

  // "Update toggleAuthCard = Front face.
  useLayoutEffect(() => {
    setFrontAuthCard();
  
  }, []);

  return (
    <>
      <TitleView title="Crear una cuenta" />

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

        <InputCustom variant="outlined" 
          name="confirmPassword" 
          control={ control } 
          label="Confirmar contraseña" 
          type="password" 
          error={ errors.confirmPassword } 
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
              backgroundColor: 'custom.registerButton',
              color: 'white',
              textTransform: 'none',
              fontSize: '16px',
              letterSpacing: '0.5px',
              transition: 'background-color 0.6s ease',
              ':hover': {
                backgroundColor: 'custom.registerButtonHover',
              }
            }}>
            
            Crear cuenta
          </Button>
        </Box>
      </form>
    </>
  )
}

export default Register;