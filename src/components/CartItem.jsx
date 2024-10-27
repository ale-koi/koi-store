import React, { useContext } from 'react'
import '../styles/cartItem.scss'
import { Cart } from '../contexts/CartProvider'


const CartItem = ({ product }) => {
    const { hanlderRemover } = useContext(Cart)

    return (
        <>
            <div className="cart-products" id={product.id}>
                <img src={product.pictureURL} />
                <h2>{product.title} <span>vol. {product.volume}</span></h2>
                <p>Quantity: {product.quantity}</p>
                <p>Price: {(product.total).toFixed(2)}</p>
                <button className='remove-icon' id={product.id} onClick={() => hanlderRemover(product.id, product.total, product.quantity)}> x </button>
            </div>
        </>

    )


}

export default CartItem