import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const paymentSlice = createSlice({
	name: 'paymentSlice',
	initialState: {
		data: {},
	},
	reducers: {
		setData(state, action: PayloadAction<object>) {
			state.data = action.payload;
		},
	},
});

export const { setData } = paymentSlice.actions;
export default paymentSlice.reducer;
