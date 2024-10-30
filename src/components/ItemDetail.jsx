import React, { useContext } from 'react'
import ItemCount from "./ItemCount"
import '../styles/ItemDetailContainer.scss'
import backbtn from '../assets/back-arrow.svg'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { Cart } from '../contexts/CartProvider'


const ItemDetail = ({ item }) => {
    const { addCart } = useContext(Cart) // plz remember to destructuring that s(・｀ヘ´・;)ゞ
    const [viewButton, setViewButton] = useState(true)

    const cartHandle = (amount) => {
        setViewButton(false)
        console.log(amount)
        addCart(item, amount)
    }


    return (
        <div className='item-details'>
            <div className='detail-picture'>
                <img src={item.pictureURL} />
            </div>
            <div className='detail-text'>
                <NavLink to={"/"}>
                    <img src={backbtn} />
                </NavLink>
                <div className='text'>
                    <div className='title-box'>
                        <h2>{item.title}<span> vol.{item.volume}</span></h2>
                        <h4>{item.author}</h4>
                    </div>
                        <p>{item.description}</p>
                        <h4>Price: ${item.price} <span>Tax Included</span></h4>
                    
                </div>


                {
                    viewButton ?
                        (
                            <ItemCount stock={item.stock} addToCart={cartHandle} />
                        ) : (
                            <NavLink to={"/cart"}><button style={{width: '100%'}}>Go to cart</button></NavLink>)}
            </div>
        </div>

    )
}

export default ItemDetail