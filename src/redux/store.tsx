import { configureStore , combineReducers   } from '@reduxjs/toolkit'
import CartSlice from './slices/CartSlice'
const rootReducer = combineReducers({
    Cart: CartSlice
})


export const store = configureStore({
  reducer: {
    rootReducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false, // Disable serializable state check
    });
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch