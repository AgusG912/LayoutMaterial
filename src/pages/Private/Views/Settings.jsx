import Box from '@mui/material/Box';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { useUserStore } from '../../../hooks';


export const Settings = () => {

  const { themeUI, setPreferenceThemeUI } = useUserStore()

  const setTheme = (theme) => {
    setPreferenceThemeUI(theme);
  }

  return (
    <>
    <div>Settings</div>
    <Box component='div'
        sx={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'background.default',
          color: 'text.primary',
          borderRadius: 1,
          p: 3,
          minHeight: '56px',
        }}
      >
        <FormControl>
          <FormLabel id="demo-theme-toggle">Theme</FormLabel>
          <RadioGroup
            aria-labelledby="demo-theme-toggle"
            name="theme-toggle"
            row
            value={ themeUI }
            onChange={ (event) => setTheme(event.target.value) }
          >
            <FormControlLabel value="system" control={<Radio />} label="System" />
            <FormControlLabel value="light" control={<Radio />} label="Light" />
            <FormControlLabel value="dark" control={<Radio />} label="Dark" />
          </RadioGroup>
        </FormControl>
      </Box>
    </>
  )
}


export default Settings;