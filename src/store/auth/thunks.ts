
// import { checkingCredentials, logout, login } from '.';
// import { Dispatch } from 'redux';
// import { checkAuthStatus, loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword } from '../../features/shared/service/providers';

// export const checkingAuthentication = () => {
//     return async( dispatch: Dispatch ) => {
//         dispatch( checkingCredentials() );
//     }
// }

// export const startCreatingUserWithEmailPassword = ({ email, password, fullName, number }: FormState) => {
//     return async( dispatch: Dispatch ) => {

//         dispatch( checkingCredentials() );

//         const result = await registerUserWithEmailPassword({ email, password, fullName, number });
        
//         if ( result.error === true ) return dispatch( logout( result.message ) );
        
//         dispatch( login( result ))

//     }

// }

// export const startLoginWithEmailPassword = ({ number, password }: LoginData) => {
//     return async( dispatch: Dispatch ) => {

//         dispatch( checkingCredentials() );

//         const result = await loginWithEmailPassword({ number, password });
        
//         if ( result.error ) return dispatch( logout( result ) );

//         dispatch( login( result ));

//     }
// }

// export const startLogout = () => {
//     return async( dispatch: Dispatch ) => {
        
//         await logoutFirebase();

//         dispatch( logout('') );

//     }
// }

// export const startAuthCheckStatus = () => {
//     return async (dispatch : Dispatch) => {
//         dispatch( checkingCredentials() );
//         const result = await checkAuthStatus();
        
//         if ( result.error === true ) return dispatch( logout( result.message ) );
//         dispatch( login( result ));

//     }
// }

