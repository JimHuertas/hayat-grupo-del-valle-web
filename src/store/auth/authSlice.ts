import { createSlice } from '@reduxjs/toolkit';
import { UserStatus } from '../../features/shared/service/config';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: UserStatus.Checking, // 'checking', 'not-authenticated', 'authenticated', ''
        id: null,
        email: null,
        fullName: null,
        errorMessage: null,
        roles: [] as string[], // 'super-user', 'admin', 'conductor'
    },
    reducers: {
        login: ( state, { payload } ) => {
            state.status = UserStatus.Authenticated, // 'checking', 'not-authenticated', 'authenticated'
            state.id = payload.id;
            state.email = payload.email;
            state.fullName = payload.fullName;
            state.roles = payload.roles;
            state.errorMessage = null;
        },
        logout: ( state, { payload } ) => {
            // console.log(payload);
            
            state.status = UserStatus.NotAuthenticated, // 'checking', 'not-authenticated', 'authenticated'
            state.id = null;
            state.email = null;
            state.fullName = null;
            state.roles = [] as string[],
            state.errorMessage = payload.message;
        },
        checkingCredentials: (state) => {
            state.status = UserStatus.Checking
        }
    }
});


// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;