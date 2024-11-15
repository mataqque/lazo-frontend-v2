import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CartbuyState } from '../interface';
import { PRICE_DELIVERY, SEND_FREE } from '../config';
import { IProductSchema } from '../interface/products.interface';

const CalculateTotal = (items: IProductSchema[]) => {
	if (items.length > 0) {
		const total = items.reduce((acc: any, product: IProductSchema) => {
			return acc + product.attributes.price * product.cant;
		}, 0);
		const delivery = SEND_FREE - total <= 0 ? 0 : PRICE_DELIVERY;
		return total + delivery;
	} else {
		return 0;
	}
};

const cartbuySlice = createSlice({
	name: 'cartbuySlice',
	initialState: {
		items: [] as IProductSchema[],
		likeds: [] as IProductSchema[],
		discount: 0,
		delivery: PRICE_DELIVERY,
		total: 0,
	} as CartbuyState,
	reducers: {
		updateItems: (state, action: PayloadAction<IProductSchema>) => {
			const payload = JSON.parse(JSON.stringify(action.payload));
			payload.cant = 1;
			const item = state.items.find((item: any) => item.id === payload.id);
			state.items = item ? state.items : [...state.items, payload];

			// total
			state.total = CalculateTotal(state.items);
		},
		updateLiked: (state, action: PayloadAction<IProductSchema>) => {
			const payload: IProductSchema = JSON.parse(JSON.stringify(action.payload));
			const item = state.likeds.find((item: any) => item.id === payload.id);
			if (!item) {
				state.likeds = [...state.likeds, { ...payload, liked: true }];
			}
			if (item && item.liked === true) {
				state.likeds = state.likeds.filter((item: any) => item.id !== payload.id);
			}
		},
		deleteItem: (state, action: PayloadAction<number>) => {
			state.items = state.items.filter((item: any) => item.id !== action.payload);
			state.total = CalculateTotal(state.items);
		},

		cantItemsToSameProduct: (state, action: PayloadAction<number>) => {
			let items = JSON.parse(JSON.stringify(state.items));
			items = items.map((item: any) => {
				if (item.id == action.payload) {
					item.cant = item.cant ? item.cant + 1 : 1;
				}
				return item;
			});
			state.items = items;
			state.total = CalculateTotal(state.items);
		},
		cantItemsToSameProductLess: (state, action: PayloadAction<number>) => {
			state.items = state.items.map((item: any) => {
				if (item.id === action.payload) {
					if (item.cant > 1) {
						item.cant--;
					}
				}
				return item;
			});
			state.total = CalculateTotal(state.items);
		},
	},
});

export const { updateItems, deleteItem, cantItemsToSameProduct, cantItemsToSameProductLess, updateLiked } = cartbuySlice.actions;
export default cartbuySlice.reducer;
export const AllProducts = (state: any) => state.cartbuySlice.items;
export const AllProductsLiked = (state: any) => state.cartbuySlice.likeds;
