import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    add(state, action) {
      // return [...state, action.payload] phle ese hota hai...redux says we can't mutate the state, so we returned a NEW ARRAY like this
      // But here, in Toolkit we can directly mutate the state
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = cartSlice.actions;
// Earlier we need to make sperate Actions and Reducer file {type:'add', payload: "1"}
// Now Tookit create actions and reducer within the same file like this
export default cartSlice.reducer;
