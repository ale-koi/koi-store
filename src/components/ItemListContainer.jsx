import ItemList from './ItemList'
import '../styles/itemListContainer.scss'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { db } from '../firebase/config'
import Loading from './Loading';
import ItemNotFound from './ItemNotFound';

const ItemListContainer = () => {

    /* hooks to use ,,Ծ‸Ծ,,*/
    const [error, setError] = useState(false)
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const { categoryId } = useParams()

    /* what effect will ocurr (/^-^(^ ^*)/  */
    useEffect(() => {
        const gettingProducts = async () => {
            try {
                let filteredProducts = []
                /*for when category id comes form params (ノ#-_-)ノ */
                if (categoryId) {
                    setLoading(true)
                    const q = query(collection(db, "products"),
                        where("category", "==", categoryId));
                    const querySnapshot = await getDocs(q);
                    querySnapshot.forEach((doc) => {
                        filteredProducts.push({ id: doc.id, ...doc.data() })
                    })
                } else { /*for when they want whatever we have （；¬＿¬) */
                    setLoading(true)
                    const querySnapshot = await getDocs(collection(db, "products"), limit(20));
                    querySnapshot.forEach((doc) => {
                        filteredProducts.push({ id: doc.id, ...doc.data() })
                    })
                }
                setProducts(filteredProducts)
                setLoading(false)
            } catch (error) {
                setError(true)
                setLoading(false)
            }
        }
        gettingProducts()
    }, [categoryId])

    /*sugar syntax that changes depending on if it's loading or not ( ￣┏＿┓￣) */
    return loading ? (<Loading />): error ? (<ItemNotFound />):(<ItemList products={products} />)


} //closes the useEffect (´∇ﾉ｀*)ノ

export default ItemListContainer


