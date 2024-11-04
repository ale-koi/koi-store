import React from 'react'
import Item from './item'


const ItemList = ({ products }) => {

    return (
        <>
            <div id='itemContainer'>
                {products.map(product => {
                    return (
                        <Item product={product} key={product.id} />
                    )
                }
                )}
            </div>
        </>
    )
}

export default ItemList
