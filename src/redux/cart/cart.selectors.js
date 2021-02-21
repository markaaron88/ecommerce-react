import {createSelector} from 'reselect'

//takes naming strcuture gets whole state and returns a slice of it
const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
    cartItems.reduce((accumaltedQuantity,cartItem) => accumaltedQuantity + cartItem.quantity, 
    0)
    
)