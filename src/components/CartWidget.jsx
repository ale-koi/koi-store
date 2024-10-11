import React, { useState } from 'react'
import Cart from '../assets/shopping-cart.svg'
import '../styles/navbar.scss'


const CartWidget = () => {
    const [count, setCountCart] = useState(0)

    const handlerClick = () => {
        setCountCart( prevCount =>  prevCount + 1) 
    }

    return (
        <>
            <div className='cart-div'>
                <img src={Cart} onClick={handlerClick} style={{width: 50, marginRight: 10,}}/>
                <div style={{width: 40, height: 40, fontSize: 30, color: 'white', backgroundColor: '#FF004B', textAlign: 'center', borderRadius: 100, fontFamily: 'Dongle', }}>{count}</div>
            </div>
        </>
        
    )
}

export default CartWidget