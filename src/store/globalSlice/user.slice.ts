import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
	name: 'userSlice',
	initialState: {
		name: 'Flavio Mataqque Pinares',
	},
	reducers: {
		changeUser: (state, action) => {
			state.name = action.payload;
		},
		saveDataUser: (state, action) => {},
		destroyData: (state, action) => {},
	},
});

export const { saveDataUser, destroyData, changeUser } = userSlice.actions;
export default userSlice.reducer;
