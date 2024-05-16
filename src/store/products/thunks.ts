
import { createdProduct, checkingProductCreation, failedCreateProduct } from '.';
import { Dispatch } from 'redux';
import { createNewProduct } from '../../features/shared/service/providers';

export const startCheckingProductCreation = () => {
    return async( dispatch: Dispatch ) => {
        dispatch( checkingProductCreation() );
    }
}

export const startCreatingNewProduct = ({ image, nameProduct, price, category, subcategory, tags, stock }: FormNewProduct) => {
    return async( dispatch: Dispatch ) => {
        
        dispatch( checkingProductCreation() );
        
        const result = await createNewProduct({ image, nameProduct, price, category, subcategory, tags, stock});
        

        if ( result.error === true ){
            if(typeof result.message !== typeof '')
                return dispatch( failedCreateProduct( result.message[0] ) );
            return dispatch( failedCreateProduct( result.message ) );
                
        }


        
        dispatch( createdProduct( result ))

    }

}



