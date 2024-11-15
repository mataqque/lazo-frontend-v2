'use client';
import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { productApi } from '@/store/apis/products.api';
import { sellProductApi } from '@/store/apis/sellProducts';
import { account } from '@/store/apis/authApi.api';
import cartbuySlice from './globalSlice/cartbuy.slice';
import modalCartSlice from './globalSlice/modalCart';

const rootReducer = combineReducers({
	modalCartSlice,
	cartbuySlice,
	[account.reducerPath]: account.reducer,
	[productApi.reducerPath]: productApi.reducer,
	[sellProductApi.reducerPath]: sellProductApi.reducer,
});

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(),
});


// Infer the type of makeStore
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
