import { useState } from 'react'
import '../styles/itemCount.scss'

const ItemCount = () => {
    //this adds ヽ(*≧ω≦)ﾉ, add here the inventory by calling the inventory from the json ⊙▂⊙
    const [count, setCount] = useState(1)
    let itemQuantity = 15
    
    const handlerAdder = () => {
        if (itemQuantity > 0 && count < itemQuantity){
            setCount (prevCount => prevCount + 1)
        }
    }

    const handlerRemover = () => {
        if (count > 1 ){
            setCount (prevCount => prevCount - 1)
        }
    }

    //add some kind of if here ｏ口(・∀・ )


    return (
        <>
            <div id='itemCount'>
                
                    <div className='itemButton'>
                        <div className='item-arrow' onClick={handlerRemover}> - </div>
                        <div className='item-quantity'> {count}</div>
                        <div className='item-arrow' onClick={handlerAdder}> + </div>
                    </div>
                    <button className='add-cart-btn'> Add to Cart </button>
                </div>
        </>
    )
}

export default ItemCount