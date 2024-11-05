import { useState } from 'react'
import '../styles/itemCount.scss'

const ItemCount = ({ stock, addToCart }) => {
    
    //this adds ヽ(*≧ω≦)ﾉ
    const [count, setCount] = useState(1)
    let itemQuantity = Number(stock)

    const handlerAdder = () => {
        if (itemQuantity > 0 && count < itemQuantity) {
            setCount(prevCount => prevCount + 1)
        }
    }
    // this substracts ( ´(00)`)!

    const handlerRemover = () => {
        if (count > 1) {
            setCount(prevCount => prevCount - 1)
        }
    }


    return (
        <>
        <div id='itemCount'>
        {
            stock ? (
                <>
                <div className='itemButton'>
                    <div className='item-arrow' onClick={handlerRemover}> - </div>
                    <div className='item-quantity'> {count} </div>
                    <div className='item-arrow' onClick={handlerAdder}> + </div>
                </div>
                <button className='add-cart-btn' onClick={() => addToCart(count)} > Add to Cart </button>
                </>
            ):
            (
                <button disabled> Sold Out </button>
            )
        }
        </div>
        </>
    )
}

export default ItemCount