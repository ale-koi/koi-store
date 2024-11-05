import React, { useContext, useEffect, useState } from 'react'
import CartItem from './CartItem'
import { Cart as CartContext } from '../contexts/CartProvider'
import "../styles/cart.scss"
import Checkout from './Checkout'
import EmptyCart from './EmptyCart'




const Cart = () => {
    const { cartList, totalPrice, hanlderClearer } = useContext(CartContext)
    const [modal, setModal] = useState(false)
    const [finalPrice, setFinalPrice] = useState(0)

    useEffect(()=>{
        const handleEscModal =(e)=>{
            if (e.key === "Escape"){

                setModal(false)
            }
        }
        window.addEventListener("keydown", handleEscModal)
    },[])

    const handleModal = ()=>{
        setModal(false)
    }



    return (
        <div className='cart-main-container' style={{justifyContent: cartList.length ? 'unset' : 'center',}}>
        {modal &&(
            <div className='modal-cart' >
                <Checkout viewModal={handleModal}/>
            </div>
                    
                )}
            <div className='cart-header'>
                <button style={{ width: "200px", marginRight: 10, display: cartList.length ? 'unset' : 'none', backgroundColor: '#FC7A2D' }} onClick={hanlderClearer}>Clear Cart</button>
            </div>
            <div className='main-cart'>
                {cartList.length ? (
                    cartList.map((cartItem) => {
                        return <CartItem product={cartItem} key={cartItem.id} />
                    })
                ) : (
                    <EmptyCart/>
                )
                }
                </div>
                {totalPrice ?

                    <div className='price-box'>
                        <h3>Total: ${(totalPrice).toFixed(2)}</h3>
                        <button onClick={() => setModal(true) }>Go to Checkout</button>
                    </div>

                    :
                    null
                }

                
            
        </div> /* ends cart main container （。＞。＜。）*/
    )

}

export default Cart