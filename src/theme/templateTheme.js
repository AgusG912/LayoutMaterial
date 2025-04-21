
/*
    * WHAT IS THIS? 
    Full example.

    Here, all properties that are not related to the color configuration of the theme are defined, listed as follows:
    1. //? Typography: 
        Description: Configures typographic properties like font family, size, weight, etc.
        Example:
            typography: {
                fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                fontSize: 14,
                fontWeightLight: 300,
                fontWeightRegular: 400,
                fontWeightMedium: 500,
                fontWeightBold: 700,
            }

    2. //? Breakpoints:
        Description: Defines breakpoints for responsive design, specifying screen widths at which the layout should change.
        Example:
            breakpoints: {
                values: {
                    xs: 0,
                    sm: 600,
                    md: 960,
                    lg: 1280,
                    xl: 1920,
                },
            }

    3. //? Spacing:
        Description: Establishes a spacing system for margins and paddings.
        Example:
            spacing: 8,

    4. //? Shadows:
        Description: Defines shadows used in components, like elevation and depth.
        Example:
            shadows: [
                'none',
                '0px 1px 3px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12)',
                , // More shadows...
            ]

    5. //? Shape:
        Description: Customizes component shapes, such as border radiuses.
        Example:
            shape: {
                borderRadius: 4, // Rounded borders of 4px
            }

    6. //? zIndex:
        Description: Defines z-index (stacking order) for various components.
        Example:
        zIndex: {
            appBar: 1100,
            drawer: 1200,
            modal: 1300,
        }

    7. //? Transitions:
        Description: Configures transitions for animations.
        Example:
            transitions: {
                duration: { //Time in ms.
                    shortest: 150,
                    shorter: 200,
                    short: 250,
                    standard: 300,
                    complex: 375,
                    enteringScreen: 225,
                    leavingScreen: 195,
                },
            }

    8. //? Components:
        Description: Allows for customizing specific Material-UI component styles.
        Example:
            components: {
                MuiButton: {
                    styleOverrides: {
                        root: {
                            textTransform: 'none', // Disable text transformation for buttons
                        },
                    },
                },
            }

    9. //? cssVariables:
        Description: Defines CSS variables to be used throughout the theme for consistent styling.
        Example: // Dark mode flicker
            https://mui.com/material-ui/customization/dark-mode/

        cssVariables: {
            palette: {
                primary: {
                    main: 'var(--palette-primary-main)',
                    contrastText: 'var(--palette-primary-contrastText)',
                }
            },
        },

*/

    /* 
        * IMPORTANT
        Now we need to create a similar structure or with the necessary modifications that are required, 
        but colorSchemes must be maintained as it is the basis of the script.
        
        It is recommended to work with the "paletteColor.js" file where you can define all the properties 
        associated with the theme you are going to use, both light and dark.
        
        The ccsVariables should not be modified as this avoids the flashlight effect when entering the page 
        for the first time. This is stipulated in the material UI documentation under the subtitle 'Dark mode flicker'
            https://mui.com/material-ui/customization/dark-mode/

        Configure the breakpoints as needed, the default ones are standard for different devices with the most common resolutions, excluding TV.
    */


export const templateTheme = {
    breakpoints: {
        values: {
          xs: 0,
          sm: 640,
          md: 1024,
          lg: 1200,
          xl: 1920,
        },
    },
    cssVariables: {
        palette: {
            primary:{
                main: 'var(--palette-primary-main)',
                contrastText: 'var(--palette-primary-contrastText)',
            }
        },
        colorSchemeSelector: 'class',
    },
    typography: {
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
    },
}