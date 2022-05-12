
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  repos: []
};

const repoSlice = createSlice({
  name: "repos",
  initialState,
  reducers: {
    setRepos: (state, action) => {
        return {...state, repos :action.payload} 
    }
    // addGood: (state, action) => {
    //   state.cart.unshift(action.payload);
    // },
    // deleteGood: (state, action) => {
    //   state.cart = state.cart.filter((item) => item.id !== action.payload);
    // },
    // clearCart: (state) => {
    //   state.cart = [];
    // }
  }
});

//export const { addGood, deleteGood, clearCart } = cartSlice.actions;
export const { setRepos } = repoSlice.actions;

export default repoSlice.reducer;
