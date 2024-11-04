import React, { useContext, useEffect, useState } from 'react'
import CartItem from './CartItem'
import { Cart as CartContext } from '../contexts/CartProvider'
import "../styles/cart.scss"
import { NavLink } from 'react-router-dom'
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from '../firebase/config'
import endPurchase from '../services/endPurchase'
import Checkout from './Checkout'





const Cart = () => {
    const { cartList, totalPrice, hanlderClearer } = useContext(CartContext)
    const [modal, setModal] = useState(false)
    const [finalPrice, setFinalPrice] = useState(0)

    useEffect(()=>{
        const handleEscModal =(e)=>{
            if (e.key === "Escape"){
                console.log("(;*´Д`)ﾉ")
                setModal(false)
            }
        }
        window.addEventListener("keydown", handleEscModal)
    },[])

    const handleModal = ()=>{
        setModal(false)
    }



    return (
        <>
        {modal &&(
            <div>
                <Checkout viewModal={handleModal}/>
            </div>
                    
                )}
            <div className='cart-header'>
                <h1>Cart.</h1>
                <button style={{ display: cartList.length ? 'unset' : 'none', backgroundColor: '#FC7A2D' }} onClick={hanlderClearer}>Clear Cart</button>
            </div>

            <div className='main-cart' style={{ alignItems: cartList.length ? 'flex-end' : 'center' }}>
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
                        <h3>Total + shipping: ${finalPrice}</h3>
                        <button onClick={() => setModal(true) }>Go to Checkout</button>
                    </div>

                    :
                    null
                }

                
            </div>
        </>
    )

}

export default Cart