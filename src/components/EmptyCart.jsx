import React from 'react'
import "../styles/notFound.scss"
import { NavLink } from 'react-router-dom'

const EmptyCart = () => {
    return (
        <div className='main'>
            <div className='lost-message'>
                <h1>Your cart is currently empty ヾ(￣□￣;)ﾉ</h1>
                <p>Wanna see more products?</p>
                <NavLink to="/"><button>Catalogue</button></NavLink>
            </div>
        </div>
    )
}

export default EmptyCart