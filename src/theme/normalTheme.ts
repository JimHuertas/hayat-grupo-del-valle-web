import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const normalTheme = createTheme({
    components:{
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: 'transparent',
                    // boxShadow: 'none',
                },
            },
        },
    },
    typography: {
        fontFamily: 'Montserrat, sans-serif',
    },
    palette: {
        mode: 'light',
        primary: {
            main: 'rgba(238, 238, 238, 0.4)',
            light: '#E3641A',
            dark: 'rgba(6, 45, 62, 0.7)',
            contrastText: '#F8F8F8'

        },
        secondary: {
            main: '#F8F8F8',
            dark: '#252525',
            light: '#F8F8F8',
            contrastText: '#F8F8F8',

        },
        success:{
            main: 'rgba(6, 45, 62, 0.9)',
            light: 'rgba(6, 45, 62, 0.9)',
            dark: 'rgba(6, 45, 62, 0.9)',
            contrastText: '#252525'
        },
        error: {
            main: red.A400
        },
        
    }
})





