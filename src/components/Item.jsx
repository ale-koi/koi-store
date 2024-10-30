import React from 'react'
import '../styles/item.scss'
import { NavLink } from 'react-router-dom'

// ADD THE KEY TO EACH DIV ヽ(゜Q。)ノ？

const Item = ({ product }) => {
    return (
        <div className="item-card" id={product.id}>
            <img src={product.pictureURL} />
            <div className='text'>
            <h2>{product.title}</h2>
            <h5>vol. {product.volume}</h5>
            <h4>${product.price}</h4>
            </div>
            <NavLink to={`/item/${product.id}`}><button>See more</button></NavLink>
        </div>
    )
}

export default Item