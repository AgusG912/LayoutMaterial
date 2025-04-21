import Menu from '@mui/material/Menu';
import { useScreenUser } from '../../../../hooks';
import { DesktopAccountMenuItem } from './';

export const DesktopAccountMenu = ({ anchorEl, open, onClose }) => {

    const { palette } = useScreenUser();

  return (
    <Menu id="accountMenu"
        open={ open }
        onClose={ onClose }
        onClick={ onClose }
        anchorEl={ anchorEl }

        slotProps={{
            paper: {
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    filter: `drop-shadow(0px 0px 1px ${ palette.text.secondary })`,
                    mt: 1.5,
                    background: `${ palette.custom.accountMenu }`,
                    borderRadius: '10px',
                    '&::before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: '25px',
                        width: '15px',
                        height: '15px',
                        bgcolor: `${ palette.custom.accountMenu }`,
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                    },
                },
            },
        }}

        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        transformOrigin={{ horizontal:'center', vertical: 'top' }}
    >

        <DesktopAccountMenuItem close={onClose} />

    </Menu>
  );
}
