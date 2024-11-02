import { addDoc, collection, doc, runTransaction, serverTimestamp } from "firebase/firestore"
import { db } from "../firebase/config"

const endPurchase = async (cartList, totalPrice) => {
    const refProductsToUpdate = [] /*this is a reference for the updated refs(*･ω･) */

    for (const cartItem of cartList) {
        const itemRef = doc(db, "products", cartItem.id) /*this is just to create the reference to the doc (￣▽￣)ノ*/
        refProductsToUpdate.push({ ref: itemRef, id: cartItem.id })
    }

    try {
        const order = await runTransaction(db, async (transaction) => {
            const updatedStocks = []

            for (const itemToUpdate of refProductsToUpdate) {
                const { ref } = itemToUpdate
                const item = await transaction.get(ref);
                if (!item.exists()) {
                    throw "Document does not exist!";
                }
                console.log({ data: { ...item.data() } })
                /*first consult to the db ( ^o)ρ┳┻┳°σ(o^ )  */

                const itemInCart = cartList.find(
                    (cartElement) => cartElement.id === item.id
                )
                console.log(itemInCart)

                const substractingStock =
                    item.data().stock - itemInCart.quantity /*check this (〝▼皿▼） */

                if (substractingStock < 0)
                    throw `There's not enough of ${item.data().title} for your order.
                ${item.data().title} left in stock: ${item.data().stock}
                ${item.data().title} in your cart: ${item.data().quantity}
                `

                updatedStocks.push({
                    productId: item.id,
                    stock: substractingStock
                }
                )
            } /*this closes the reading for (o´･_･)っ */

            for (const item of refProductsToUpdate) {
                const { ref, id } = item
                const updatedStock = updatedStocks.find(
                    (stock) => stock.productId === id
                )
                console.log({ updatedStock })
                transaction.update(ref, {
                    stock: updatedStock.stock,
                })
            }/*this is the writing for (#+_+) */

            const order = {
                customer: {
                    name: "kaoru",
                    lastName: "Suzuno",
                    emailAdress: "asasasas@aasdas.com",
                    phone: "1234456977"
                },
                products: { ...cartList },
                total: totalPrice,
                timestap: serverTimestamp()

            }
            const docRef = await addDoc(collection(db, "orders"), order);
            console.log("Document written with ID: ", docRef.id);

        }) /*this closes the run transaction*/
        
    } catch (e) {
        console.error(e);
    }

} /*this closes the endpurchase func (o⌒．⌒o) */

export default endPurchase