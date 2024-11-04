import React, { useContext, useState } from 'react'
import cartIcon from '../assets/shopping-cart.svg'
import { Cart } from '../contexts/CartProvider'
import { NavLink } from 'react-router-dom'
import "../styles/navbar.scss"


const CartWidget = () => {
    const { totalItem } = useContext(Cart)


    return (
        <>
            <div className='cart-div'>
                <NavLink to="/cart">
                    <img src={cartIcon} />
                </NavLink>
                <div className="cart-button">{totalItem}</div>

            </div>
        </>

    )
}

export default CartWidget