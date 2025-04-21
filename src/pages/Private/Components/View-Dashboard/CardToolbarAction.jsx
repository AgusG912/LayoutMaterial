import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useScreenUser } from "../../../../hooks";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";

import Button from "@mui/material/Button";
import { CardToolbarActionButton } from "./";
import { PrivateRoutes } from "../../../../models";

export const CardToolbarAction = () => {

  const { breakpointValue } = useScreenUser();

  return (
    <Box component='div'
      sx={{
          width: '100%',
          height: '100%',
          padding: { xs:'8px 30px', sm:'16px 30px' },
          backgroundColor: 'custom.card',
          border: '0.667px solid grey',
          borderRadius: '7px',
          justifyContent: 'space-around',
      }}>

        <Box component='div' sx={{ height:'100%', width: '100%', display:'flex', flexDirection:{ xs:'column', sm:'row' }, justifyContent:'space-around', alignItems:'center' }}>
          <CardToolbarActionButton label={'Depositar'} showLabel iconElement="deposit" />
          <CardToolbarActionButton label={'Transferir'} showLabel iconElement="transactions" path={ `${ PrivateRoutes.PRIVATE }/${ PrivateRoutes.TRANSACTIONS }` } />
          { 
            (breakpointValue == 2 || breakpointValue == 5) && 
              (
                <CardToolbarActionButton label={'Link de pago'} showLabel iconElement="paymentLink" path={ `${ PrivateRoutes.PRIVATE }/${ PrivateRoutes.PAYMENTLINK }` } />
              )
          }
          <CardToolbarActionButton label={'Retirar'} showLabel iconElement="Withdrawal" />
        </Box>

    </Box>
  )
}