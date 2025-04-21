import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";


export const InputCustom = ({ name='', control='', label='', type='', error, variant='standard', fw=false, placeholder='' }) => {


  return (
    <Box component='div' sx={{ paddingLeft:'20px', paddingRight:'20px', height:'80px' }}>
        
        <Controller 
            name={ name }
            control={ control }
            defaultValue=""
            render={ ({ field }) => 
                <TextField {...field} 
                    id={name}
                    type={ type }
                    label={ label }
                    fullWidth={ fw }
                    error={ !!error }
                    variant={ variant }
                    placeholder={ placeholder }
                    helperText={ error?.message }
                    slotProps={{
                        formHelperText:{
                            sx:{
                                overflow:'hidden',
                                whiteSpace:'nowrap',
                                textOverflow:'ellipsis',
                            }
                        }
                    }}
                />
            }
        />
    </Box>
  )
}