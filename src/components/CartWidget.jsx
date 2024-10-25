import React, { useContext, useState } from 'react'
import cartIcon from '../assets/shopping-cart.svg'
import '../styles/navbar.scss'
import { Cart } from '../contexts/CartProvider'
import { NavLink } from 'react-router-dom'


const CartWidget = () => {
    const {totalItem} = useContext(Cart)


    return (
        <>
            <div className='cart-div'>
                <NavLink to ="/cart"><img src={cartIcon} style={{width: 50, marginRight: 10,}}/></NavLink>
                <div style={{width: 40, height: 40, fontSize: 30, color: 'white', backgroundColor: '#FF004B', textAlign: 'center', borderRadius: 100, fontFamily: 'Dongle', }}>{totalItem}</div>
                
            </div>
        </>
        
    )
}

export default CartWidget