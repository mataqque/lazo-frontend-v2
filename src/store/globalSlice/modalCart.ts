import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const modalCartSlice = createSlice({
	name: 'modalCartSlice',
	initialState: {
		activeCart: '',
	},
	reducers: {
		setActiveCart: (state, action: PayloadAction<string>) => {
			state.activeCart = action.payload;
		},
	},
});

export const { setActiveCart } = modalCartSlice.actions;
export default modalCartSlice.reducer;
