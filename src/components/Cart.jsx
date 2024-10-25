import React, { useContext } from 'react'
import CartItem from './CartItem'
import { Cart as CartContext} from '../contexts/CartProvider'

const Cart = ({}) => {
    const {cartList, totalItem} = useContext(CartContext)
  return (
    <div>
        <CartItem product={cartList} />
    </div>
  )
}

export default Cart