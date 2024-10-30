import React, { useContext, useState } from 'react'
import CartItem from './CartItem'
import { Cart as CartContext } from '../contexts/CartProvider'
import "../styles/cart.scss"
import { NavLink } from 'react-router-dom'


const Cart = () => {
    const { cartList, totalPrice, hanlderClearer} = useContext(CartContext)

    return (
        <>
            <div className='cart-header'>
            <h1>Cart.</h1>
            <button style={{ display: cartList.length ? 'unset' : 'none'}} onClick={hanlderClearer}>Clear Cart</button>
            </div>
            
            <div className='main-cart'>
                {cartList.length ? (
                    
                    cartList.map((cartItem) => {
                        return <CartItem product={cartItem} key={cartItem.id} />
                    })
                ) : (
                    <div className='empty-cart'>
                        <p>Your cart is currently empty</p>
                        <p>Wanna see more products?</p>
                        <NavLink to="/"><button>Catalogue</button></NavLink>
                    </div>
                )
                }

                {totalPrice ?

                    <div className='price-box'>
                        <h3>Sub-total: ${(totalPrice).toFixed(2)}</h3>
                        <h3>Total + shipping: ${(totalPrice + 20).toFixed(2) }</h3>
                    </div>

                    :
                    null
                }
            </div>
        </>
    )

}

export default Cart