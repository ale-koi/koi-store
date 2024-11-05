import React, { useContext } from 'react'
import '../styles/cartItem.scss'
import { Cart } from '../contexts/CartProvider'
import { NavLink } from 'react-router-dom'


const CartItem = ({ product }) => {
    const { hanlderRemover } = useContext(Cart)
    

    return (
        <>
            <div className="cart-products" id={product.id}>
                <img src={product.pictureURL} />
                <NavLink to ={`/item/${product.id}`}><h2>{product.title} <span>vol. {product.volume}</span></h2></NavLink>
                <p>Quantity: {product.quantity}</p>
                <p>Price: {(product.total).toFixed(2)}</p>
                <div className='remove-button'>
                <button className='remove-icon' id={product.id} onClick={() => hanlderRemover(product.id, product.total, product.quantity)}> x </button>
                <span>Remove from cart</span>
                </div>
                
            </div>
        </>

    )


}

export default CartItem