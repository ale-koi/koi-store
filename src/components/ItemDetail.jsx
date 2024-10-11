import React from 'react'
import ItemCount from "./ItemCount"
import '../styles/ItemDetailContainer.scss'

const ItemDetail = () => {
  return (
    <div className='item-details'>
      <div className='title'>
        <h2>This is a really long and silly name for an isekai<span> vol.15</span></h2>
        <h4>author here</h4>
      </div>
      <div className='details-body'>
        <img src='https://picsum.photos/700'/>
      <div className='extra-details'>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime distinctio recusandae exercitationem est earum! Cumque consectetur, deserunt tempore sapiente incidunt aperiam inventore totam excepturi et? Vel, et? Laboriosam, ad ut.</p>
        <p>Includes!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum expedita soluta alias sit porro, suscipit obcaecati rerum minima! Debitis odio delectus velit optio ex nemo et, magni possimus fugiat iste?</p>
        <ItemCount/>
      </div>
      </div>
    </div>
  )
}

export default ItemDetail