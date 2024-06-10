
import { sendEmail } from '../../hayatApp/service/providers';
import { noStaredMail, chekingMessage, failedMessage, sendedMessage } from './mailSlice';
import { Dispatch } from 'redux';

export const checkingAuthentication = () => {
    return async( dispatch: Dispatch ) => {
        dispatch( noStaredMail() );
    }
}

export const startSendingMail = ({ nombres, apellidos, correo, departamento, numero }: MailData) => {
    return async( dispatch: Dispatch ) => {

        dispatch( chekingMessage() );

        const result = await sendEmail({nombres, apellidos, correo, departamento, numero })
        
        if ( result.error === true ) return dispatch( failedMessage( result.message ) );
        
        dispatch( sendedMessage( result.message ))

    }

}