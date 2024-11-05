import { addDoc, collection, doc, runTransaction, serverTimestamp } from "firebase/firestore"
import { db } from "../firebase/config"

const endPurchase = async (cartList, totalPrice, form) => {
    const refProductsToUpdate = [] /*this is a reference for the updated refs(*･ω･) */

    for (const cartItem of cartList) {
        const itemRef = doc(db, "products", cartItem.id) /*this is just to create the reference to the doc (￣▽￣)ノ*/
        refProductsToUpdate.push({ ref: itemRef, id: cartItem.id })
    }

    try {
        const order = await runTransaction(db, async (transaction) => {
            const updatedStocks = []
            sessionStorage.setItem('orderID', JSON.stringify('')) /*getting the order id clean Σ(-`Д´-ﾉ；)ﾉ */
            let button = document.querySelector('#checkOutBtn')
            button.innerText = "Wait a second!"
            button.setAttribute('disabled', '')


            for (const itemToUpdate of refProductsToUpdate) {
                const { ref } = itemToUpdate
                const item = await transaction.get(ref);
                if (!item.exists()) {
                    throw "Document does not exist!";
                }
                /*first consult to the db ( ^o)ρ┳┻┳°σ(o^ )  */

                const itemInCart = cartList.find(
                    (cartElement) => cartElement.id === item.id
                )

                const substractingStock =
                    item.data().stock - itemInCart.quantity /*check this (〝▼皿▼） */

                if (substractingStock < 0)
                    throw TypeError()

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
                transaction.update(ref, {
                    stock: updatedStock.stock,
                })
            }/*this is the writing for (#+_+) */

            const order = {
                customer: {
                    firstName: form.firstName,
                    lastName: form.lastName,
                    email: form.email,
                    phone: form.phone,
                },
                products: { ...cartList },
                total: totalPrice,
                timestap: serverTimestamp()

            }
            const docRef = await addDoc(collection(db, "orders"), order);
            document.querySelector('#orderStatus').innerHTML = `
            <div id="orderSucess">
            
            <h1 class='thank'>Thank you, ${form.firstName}</h1>
            <div class='order-number'> 
            <h2>We're working on your order ID no: ${docRef.id}</h2>
            <p>We'll start working on it! (/・・)ノ</p>
            </div>
            
            `
            let btn = document.querySelector('#checkOutBtn')
            btn.removeAttribute('disabled')
            btn.innerText ="Keep Shopping!"
            
            

            sessionStorage.setItem('orderID', JSON.stringify(docRef.id)) /*sending the new order id (^(エ)^) */


        }) /*this closes the run transaction*/

    } catch (e) {
        document.querySelector('#orderStatus').innerHTML = `
        <div id="orderError">
        <h1>Something went wrong (*・_・)ノ⌒*</h1>
        <h2>Please review your order!</h2>
        </div>
        `
        let btn = document.querySelector('#checkOutBtn')
        btn.removeAttribute('disabled')
        btn.innerText ="Accept"
    }

} /*this closes the endpurchase func (o⌒．⌒o) */

export default endPurchase