import createTheme from "@mui/material/styles/createTheme";
import { light, dark, templateTheme } from './';


export const themeConfig = () => {
    
    // * DARK THEME CONFIG.
    // 1. Here, all modifications are made for the dark theme so that it can return the values as if it were a single theme.
    let darkTheme = createTheme({
        colorSchemes: {
            dark: {
                palette: {
                    ...dark
                }
            }
        },
        ...templateTheme,
    })

    // 2. Here, the default palette value is updated to avoid corrupting the integrity of the object.
    darkTheme['defaultColorScheme'] = 'dark';

    /*
     3. A new constant is created with the user's default palette value. This is done with the intention 
        of being able to use the custom palettes defined by the developer within colorSchemes, and thereby 
        always use the same line of code for both themes.

        Important! : Remember that you must create custom palettes that are reflections of each other for it to work correctly.
    */
    darkTheme = { ...darkTheme, ...darkTheme['colorSchemes'].dark };

    // * LIGHT THEME CONFIG.
    // 1. Creation of the light theme.
    let lightTheme = createTheme({
        ...templateTheme,
        palette:{
            ...light
        }
    })

    return { darkTheme, lightTheme };
}