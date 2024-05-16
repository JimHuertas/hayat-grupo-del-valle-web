import { createSlice } from '@reduxjs/toolkit';
import { CreateProductStatus } from '../../features/shared/service/config';

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        status: CreateProductStatus.NotCreated, // 'checking', 'not-created', 'created, ''
        errorMessage: null,
        successfullyMessage: null,
        tags: [] as string[],
        file: null,
    },
    reducers: {
        refreshTags: (state, { payload }) => {
            state.tags.push(payload);
        },
        refreshImage: (state, {payload}) => {
            console.log(payload);
            
            state.file = payload.file
        },
        createdProduct: (state, { payload }) => {
            state.status  = CreateProductStatus.Created;
            state.successfullyMessage = payload.message;
            state.errorMessage = null;
        },
        notCreatedProduct: (state) => {
            state.status = CreateProductStatus.NotCreated
            state.tags = [] as string[]
        },
        checkingProductCreation: (state) => {
            state.status = CreateProductStatus.Checking
        },
        failedCreateProduct: (state, { payload }) => {
            state.status = CreateProductStatus.Failed,
            state.errorMessage = payload;
            state.successfullyMessage = null
        }
    }
});


// Action creators are generated for each case reducer function
export const { createdProduct, notCreatedProduct, checkingProductCreation,refreshImage, failedCreateProduct, refreshTags } = productSlice.actions;