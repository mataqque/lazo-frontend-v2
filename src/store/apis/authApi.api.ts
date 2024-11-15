// @ts-ignore
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { URL_BASE_API_BACKEND } from '../config';
import { AccountState } from '../interface';

// Define a service using a base URL and expected endpoints

export const account = createApi({
	reducerPath: 'account',
	baseQuery: fetchBaseQuery({
		baseUrl: URL_BASE_API_BACKEND,
	}),
	endpoints: (builder: any) => ({
		changePass: builder.mutation({
			query: (data: { email: string; code: string; password: string }) => {
				return {
					url: `/user/changepasswordcode`,
					method: 'POST',
					body: data,
				};
			},
		}),
		verifyCode: builder.mutation({
			query: (data: { email: string; code: string }) => {
				return {
					url: `/user/codeverification`,
					method: 'POST',
					body: data,
				};
			},
		}),
		verifiedNumber: builder.mutation({
			query: (data: { phone: string }) => {
				return {
					url: `/user/phoneverification`,
					method: 'POST',
					body: data,
				};
			},
		}),
		recoveryUser: builder.mutation({
			query: (data: { email: string }) => {
				return {
					url: `/user/recoverypassword`,
					method: 'POST',
					body: data,
				};
			},
		}),
		sendCreateCode: builder.mutation({
			query: (data: { email: string }) => {
				return {
					url: `/user/sendcode`,
					method: 'POST',
					body: data,
				};
			},
		}),
		createUser: builder.mutation({
			query: (data: any) => {
				return {
					url: `/user/create`,
					method: 'POST',
					body: data,
				};
			},
		}),
	}),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useCreateUserMutation, useRecoveryUserMutation, useVerifyCodeMutation, useChangePassMutation, useVerifiedNumberMutation } = account;
