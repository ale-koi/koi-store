import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebase/config';
import Loading from './Loading';
import ItemNotFound from './ItemNotFound';


const ItemDetailContainer = () => {
    const { id } = useParams()
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    


    useEffect(() => {
        const settingItem = async () => {
            try {
                /*the loader (,,#ﾟДﾟ) */
                setLoading(true)
                /*what should we fetch from the db （;≧皿≦） */
                const docRef = doc(db, "products", id);
                const docSnap = await getDoc(docRef);
                /*the search for the data 且_(・_・ ) */
                if (docSnap.exists()) {
                    setItem({ ...docSnap.data(), id })
                    setLoading(false)
                } else {
                    /*for when the item  is just not there sadge ｡◕‿◕｡ */
                    setError(true)
                    setLoading(false)
                }
            } catch (error) { /*dont forget the errors */
                setError(true)
                setLoading(false)
            }
        }
        settingItem()
    }, [id]) /*this closes the useEffect ヽ(*^ｰ^)人(^ｰ^*)ノ dont forget */

    return loading ?(<Loading/>):(error ?(<ItemNotFound/>):(<ItemDetail item={item} />))

}

export default ItemDetailContainer