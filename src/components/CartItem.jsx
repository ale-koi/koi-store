import React from 'react'
import '../styles/cartItem.scss'

const CartItem = ({product}) => {
  return (
    <div>
        <div className="cart-products" id="">
            <img src="https://picsum.photos/75/150"/>
            <h2>Rekishi ni nokoru akujo ni naruzo akuyaku reijou ni naru hodo ouji no dekiai wa kasoku suru you desu. <span>vol. here.</span></h2>
            <p>Qt. XX</p>
            <p>Price: 0000</p>
            <button>Remove</button>
            
        </div>
    </div>
  )
}

export default CartItem