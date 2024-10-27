import { useState } from 'react'
import '../styles/itemCount.scss'

const ItemCount = ({ stock, addToCart }) => {
    //this adds ヽ(*≧ω≦)ﾉ
    const [count, setCount] = useState(1)
    let itemQuantity = Number(stock)

    const handlerAdder = () => {
        if (itemQuantity > 0 && count < itemQuantity) {
            setCount(prevCount => prevCount + 1)
        } else {
            console.log("⊂(￣(工)￣)⊃")
        }
    }
    // this substracts ( ´(00)`)!

    const handlerRemover = () => {
        if (count > 1) {
            setCount(prevCount => prevCount - 1)
        } else {
            console.log("ヘ(￣ω￣ヘ)")
        }
    }

    //add some kind of if here ｏ口(・∀・ ) perhaps, who knows?


    return (
        <>
            <div id='itemCount'>
                <div className='itemButton'>
                    <div className='item-arrow' onClick={handlerRemover}> - </div>
                    <div className='item-quantity'> {count} </div>
                    <div className='item-arrow' onClick={handlerAdder}> + </div>
                </div>
                <button className='add-cart-btn' onClick={() => addToCart(count)} > Add to Cart </button>
            </div>
        </>
    )
}

export default ItemCount