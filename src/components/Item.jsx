import React from 'react'
import '../styles/item.scss'
import { NavLink } from 'react-router-dom'

// ADD THE KEY TO EACH DIV ヽ(゜Q。)ノ？

const Item = ({product}) => {
    return (
        <>
            <div className="item-card" id={product.id}>
                <img src={product.pictureURL}/>
                <h2>{product.title}. <span>vol. {product.volume}</span></h2>
                <h4>{product.price}</h4>
                <NavLink to ={`/item/${product.id}`}><button>See more!</button></NavLink>
            </div>
        </>
    )
}

export default Item