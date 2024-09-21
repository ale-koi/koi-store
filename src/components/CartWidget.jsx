import React from 'react'
import Cart from '../assets/shopping-cart.svg'

const CartWidget = () => {
    return (
        <>
            <div>
                <img src={Cart} style={{width: 35, marginLeft: -50, }}/>
                <span style={{fontSize: 18,}}>1</span>
            </div>
        </>
        
    )
}

export default CartWidget