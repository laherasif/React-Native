import { createSlice } from '@reduxjs/toolkit'




const initialState = {

}

export const CartSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    
    clearOder: (state) => {
      return {
        ...state,
      }
    }
  }
})

// Action creators are generated for each case reducer function
export const {
  clearOder
} = CartSlice.actions

export default CartSlice.reducer


