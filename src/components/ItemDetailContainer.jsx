import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import productList from '../MOCK_DATA.json'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
    const { id } = useParams()
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState([false])
    console.log(id)

    useEffect(() => {
        const itemPromise = new Promise((res, rej) => {
            setTimeout(() => {
                res(productList)
            }, 2000);
        })
        try {
            const settingItem = async () => {
                setLoading(true)
                const items = await itemPromise
                let itemFound
                if (id) {
                    itemFound = items.find(item => item.id === Number(id))
                    console.log(itemFound)
                } else {
                    console.log("technical problems ＼(・｀(ｪ)・)/") /*what should I put here if it fails? ⊂((〃’⊥’〃))⊃*/
                }
                setItem(itemFound)
                setLoading(false)
            }
            settingItem()


        } catch {
            console.log("(´┏o┓｀)")
        }
    }, [id]) /*this closes the useEffect ヽ(*^ｰ^)人(^ｰ^*)ノ dont forget */

    return loading ? <h1 style={{ fontSize: 65, color: '#1E1E1F', textAlign: 'center', margin: 300 }}>Getting the info, please wait! (｡･ω･)ﾉﾞ</h1> :
        <ItemDetail item={item} />
}

export default ItemDetailContainer