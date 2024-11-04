import React, { useEffect, useRef, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebase/config';
import NotFound from './NotFound';


const ItemDetailContainer = () => {
    const { id } = useParams()
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(false)

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
                    console.log("Document data:", docSnap.data());
                    setItem({ ...docSnap.data(), id })
                    setLoading(false)
                } else {
                    /*remember to put something else? ＿φ(□□ヘ) */
                    /*create a conditional that if document doesn't exist enters the rendring ┌( ಠ_ಠ)┘ */
                    console.log("No such document!");
                    
                }
            } catch (error) { /*dont forget the errors */
                console.log(error)
            }
        }
        settingItem()
    }, [id]) /*this closes the useEffect ヽ(*^ｰ^)人(^ｰ^*)ノ dont forget */

    return loading ?
    (<div style={{minHeight: "35vw"}}>
        <h1 style={{ fontSize: 65, color: '#FC7A2D', textAlign: 'center', marginTop: 300,}}> Loading! (｡･ω･)ﾉﾞ</h1>
    </div>
    )
    :
        <ItemDetail item={item} />
}

export default ItemDetailContainer