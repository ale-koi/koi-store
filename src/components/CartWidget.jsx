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
                <img src={Cart} onClick={handlerClick} style={{width: 35, margin: 10,}}/>
                <div style={{width: 35, height: 35, fontSize: 28, color: 'black', backgroundColor: '#dae8ff', textAlign: 'center', borderRadius: 100, fontFamily: 'Dongle', }}>{count}</div>
            </div>
        </>
        
    )
}

export default CartWidget