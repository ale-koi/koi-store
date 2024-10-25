import React, { useContext } from 'react'
import CartItem from './CartItem'
import { Cart as CartContext} from '../contexts/CartProvider'
import "../styles/cart.scss"

const Cart = ({}) => {
    const {cartList, totalItem} = useContext(CartContext)
  return (
    <div className='main-cart'>
        <h1> Cart!</h1>
        <p>Your cart is currently empty</p>
        <p>Wanna see more products?</p>
        <button>Catalogue</button>
        {/* <CartItem product={cartList} /> */}
    </div>
  )
}

export default Cart