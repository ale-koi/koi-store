import ItemList from './ItemList'
import '../styles/ItemListContainer.scss'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import productList from "../MOCK_DATA.json"

const ItemListContainer = () => {
/* hooks to use ,,Ծ‸Ծ,,*/
const [products, setProducts] = useState([])
const [loading, setLoading] = useState(false)
const { categoryID } = useParams ()

    /* what effect will ocurr (/^-^(^ ^*)/  */
useEffect (()=>{
    /*promise with mocked timer (*^◇^)_旦 */
    const promiseProducts = new Promise((res, rej) => {
        setTimeout(() => {
        res(productList)
        }, 2000)
    })
    /* async try and catch, with the filter （-＾〇＾-） */
    try {
    const gettingProducts = async () =>{
        /* turning on the loading manually (´∇ﾉ｀*)ノ */
        setLoading (true)
        const products = await promiseProducts
        let filteredProducts 
        if (categoryID){
        filteredProducts = products.filter((product) => product.category === categoryID)
        }else {
        filteredProducts = products
        }
        /*call the function and turning off the loading state (o;TωT)o  */
        setProducts(filteredProducts)
        setLoading(false)
    }
    gettingProducts()
    
    } catch (error){
        console.log(error)
        }
    }, [categoryID])

    /*sugar syntax that changes depending on if it's loading or not ( ￣┏＿┓￣) */
    return loading ? 
    <h1 style={{fontSize: 65, color: '#1E1E1F', textAlign: 'center', margin: 300}}>Getting the things, please wait!ヾ(￣0￣； )ノ</h1> :
    <ItemList products={products}/>
    }

    export default ItemListContainer
