import React from 'react'
import ItemCount from "./ItemCount"
import '../styles/ItemDetailContainer.scss'
import backbtn from '../assets/back-arrow.svg'
import { NavLink } from 'react-router-dom'

const ItemDetail = ({item}) => {
  return (

<div className='item-details'>
  <div className='detail-picture'>
    <img src={item.pictureURL}/>
  </div>
  <div className='detail-text'>
    <NavLink to = {"/"}>
      <img src={backbtn} />
    </NavLink>
    <div className='title-box'>
      <h2>{item.title}<span> vol.{item.volume}</span></h2>
    <h4>{item.author}</h4>
    </div>
    <p>{item.description}</p>
    <p>{item.description}</p>
    <h4>Price:</h4> 
    <h3>{item.price}</h3> 
    <h5>Tax included</h5>
    <ItemCount quantity={item.quantity}/>
  </div>
</div>

  )
}

export default ItemDetail