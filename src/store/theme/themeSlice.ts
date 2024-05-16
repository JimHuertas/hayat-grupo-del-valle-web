import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        theme: 'primary',
        mode:'light'
    },
    reducers: {
        changeTheme: ( state ) => {
            (state.mode=== 'dark')
                ? state.theme = 'light'
                : state.theme = 'dark'
        },
        defaultTheme: ( state ) => {
            state.theme = 'primary'
        },
    }
});


export const { changeTheme, defaultTheme } = themeSlice.actions;