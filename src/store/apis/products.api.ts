import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { URL_BASE_API_BACKEND } from '../config';

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
	reducerPath: 'productApi',
	baseQuery: fetchBaseQuery({
		baseUrl: URL_BASE_API_BACKEND,
	}),
	endpoints: builder => ({
		getProducts: builder.mutation({
			query: ({ index, type }) => {
				return {
					url: `/productos?populate[0]=image&populate[1]=categoria&filters[categoria][slug][$eq]=${type}&pagination[page]=${index}&pagination[pageSize]=5`,
					method: 'GET',
				};
			},
		}),
	}),
});
// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductsMutation } = productApi;
