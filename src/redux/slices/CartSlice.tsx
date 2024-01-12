import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment'
import { ImageProps } from 'react-native'

export interface Sizes {
  size: "",
  price: string,
  currency: string
}


export interface CartProps {
  id: string,
  name: string,
  description: string,
  roasted: string,
  imagelink_square: ImageProps,
  imagelink_portrait: ImageProps
  ingredients: string
  special_ingredient: string
  prices: Sizes[],
  average_rating: number,
  ratings_count: string,
  favourite: boolean,
  type: string,
  index: number,
}

interface CartState {
  cofee: CartProps[],
  backupData: CartProps[],
  seeds: CartProps[],
  cart: CartProps[]
  orderList: any

}


const initialState: CartState = {
  cofee: [],
  seeds: [],
  cart: [],
  backupData: [],
  orderList: [],
}
const calculateTotalAmount = (cart: any): number => {
  return cart.reduce((total: number, item: any) => {
    const itemTotal: number = item.prices.reduce((itemTotal: number, price: any) => {
      const priceValue = parseFloat(price?.price); // Ensure the price is a valid number
      return isNaN(priceValue) ? itemTotal : itemTotal + priceValue;
    }, 0);
    return total + itemTotal;
  }, 0);
};
export const CartSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addCofee: (state, action) => {
      return {
        ...state,
        cofee: action.payload,
        backupData: action.payload
      }
    },
    addSeeds: (state, action) => {
      return {
        ...state,
        seeds: action.payload
      }
    },
    categoryCofee: (state, action) => {
      const filteredCoffee = state.backupData.filter((item: any) => item.name === action.payload);
      return {
        ...state,
        cofee: action.payload === "All" ? state.backupData : filteredCoffee
      }
    },
    addFavriot: (state, action) => {
      return {
        ...state,
        cofee: state.cofee.map((list: any) => {
          if (list?.id === action?.payload?.id) {
            return { ...list, favourite: true };
          }
          return list
        }),
        backupData: state.backupData.map((list: any) => {
          if (list?.id === action?.payload?.id) {
            return { ...list, favourite: true };
          }
          return list
        })
      }
    },
    removeFavriot: (state, action) => {
      return {
        ...state,
        cofee: state.cofee.map((list: any) => {
          if (list?.id === action?.payload?.id) {
            return list.favourite = false
          }
          return list
        }),
        backupData: state.backupData.map((list: any) => {
          if (list?.id === action?.payload?.id) {
            return list.favourite = false
          }
          return list
        })
      }
    },
    addCart: (state, action) => {
      const { id } = action.payload;
      const existingItem = state?.cart?.find((item) => item?.id === id);

      if (existingItem) {
        // If the item already exists in the cart, check for the size
        const existingSize = existingItem.prices.find(
          (price) => price.size === action.payload.prices[0]?.size
        );

        if (existingSize) {
          // If the size already exists, update its quantity
          return {
            ...state,
            cart: state?.cart?.map((item: any) =>
              item?.id === id
                ? {
                  ...item,
                  prices: item.prices.map((price: any) =>
                    price.size === action.payload.prices[0]?.size
                      ? { ...price, quantity: (price.quantity || 0) + 1 }
                      : price
                  ),
                  quantity: (item.quantity || 0) + 1,
                }
                : item
            ),
          };
        } else {
          // If the size is different, add the new object to the array of prices
          const newItem = { ...action.payload.prices[0], quantity: 1 };
          return {
            ...state,
            cart: state?.cart?.map((item: any) =>
              item?.id === id
                ? {
                  ...item,
                  prices: [...item.prices, newItem].sort((a, b) => {
                    const sizeA = a.size.toUpperCase();
                    const sizeB = b.size.toUpperCase();

                    if (sizeA < sizeB) {
                      return 1;
                    }
                    if (sizeA > sizeB) {
                      return -1;
                    }
                    return 0;
                  }),
                  quantity: (item.quantity || 0) + 1,
                }
                : item
            )
          };
        }
      } else {
        const quality = 1;
        // If the item is not in the cart, add it with the specified quantity
        const newItem = {
          ...action.payload,
          prices: [{ ...action.payload.prices[0], quantity: quality }],
          quantity: 1,
        };

        return {
          ...state,
          cart: [...state?.cart, newItem],
        };
      }

    },
    increaseQuantity: (state, action) => {
      const { item, index } = action.payload;
      const existingItem = state?.cart?.find((list) => list?.id === item?.id);

      if (existingItem) {
        // If the item already exists in the cart, check for the size
        const updatedCart = state?.cart?.map((list: any) =>
          list?.id === item?.id
            ? {
              ...list,
              prices: list?.prices?.map((price: any) =>
                price.size === item?.prices[index]?.size
                  ? { ...price, quantity: (price.quantity || 0) + 1 }
                  : price
              )
            }
            : list
        );
        return {
          ...state,
          cart: updatedCart,
        };
      }
      return state;

    },
    descresaQuantity: (state, action) => {
      const { item, index } = action.payload;
      const existingItem = state?.cart?.find((list) => list?.id === item?.id);

      if (existingItem) {
        // If the item already exists in the cart, check for the size
        const updatedCart = state?.cart?.map((list: any) =>
          list?.id === item?.id
            ? {
              ...list,
              prices: list?.prices?.map((price: any) =>
                price.size === item?.prices[index]?.size
                  ? { ...price, quantity: (price.quantity || 0) - 1 }
                  : price
              ).filter((f: any) => f?.quantity > 0)
            }
            : list
        ).filter((item: any) => item?.prices?.length > 0);


        return {
          ...state,
          cart: updatedCart,
        };
      }

      return state;
    },


    addOrderList: (state) => {
      const currentOrder = {
        OrderDate: moment().format('Do MMMM'), // e.g., "20th March"
        OrderTime: moment().format('HH:mm'), // e.g., "16:23"
        CartList: [...state.cart],
        TotalAmount: 0
      };

      // Calculate TotalAmount only if CartList is not empty
      if (currentOrder.CartList.length > 0) {
        currentOrder.TotalAmount = calculateTotalAmount(currentOrder.CartList);
      }

      const existingOrders = [...state?.orderList];
      // If there are orders for today, add the new order without updating the existing ones
      const updatedOrders = existingOrders.some(order => order.OrderDate === currentOrder.OrderDate)
        ? [{ ...currentOrder, OrderTime: moment().format('HH:mm') }, ...existingOrders]
        : [{ ...currentOrder, OrderTime: moment().format('HH:mm') }, ...existingOrders];

      const finalOrders = updatedOrders.map(order => ({
        ...order,
        TotalAmount: calculateTotalAmount(order.CartList)
      }));

      return {
        ...state,
        orderList: finalOrders
      };


      // if (existingOrders.some(order => order.OrderDate === currentOrder.OrderDate)) {
      //   return {
      //     ...state,
      //     orderList: [{ ...currentOrder, OrderTime: moment().format('HH:mm')}, ...existingOrders]
      //   };
      // } else {
      //   // If there are no orders for today, add a new order on top
      //   return {
      //     ...state,
      //     orderList: [{ ...currentOrder, OrderTime: moment().format('HH:mm')}, ...existingOrders]
      //   };
      // }


    },




    clearOder: (state) => {
      return {
        ...state,
        cart: []
      }
    }
  }
})

// Action creators are generated for each case reducer function
export const {
  addCofee,
  addSeeds,
  addCart,
  categoryCofee,
  addFavriot,
  increaseQuantity,
  descresaQuantity,
  addOrderList,
  clearOder,
} = CartSlice.actions

export default CartSlice.reducer


