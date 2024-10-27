import { createContext, useState } from "react"

// this so it can be used around (≧∇≦)/
export const Cart = createContext()

// the actual component with the logic (>人<)
const CartProvider = ({ children }) => { //remeber the children part with this kind of things ˋ▽ˊ
    const [cartList, setCartList] = useState([])
    const [totalItem, setTotalItem] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const [update, setUpdate] = useState(false)

    let cartListUpdated = [...cartList]
    const addCart = (item, amount) => {
        const existsInCart = isInCart(item.id)

        if (existsInCart) {
            cartListUpdated = cartList.map(cartItem => {
                if (cartItem.id === item.id) {
                    return {
                        ...cartItem,
                        quantity: cartItem.quantity + amount,
                        total: cartItem.total + (amount * cartItem.price),
                    }
                }
            }
            )
        } else {
            cartListUpdated.push({ ...item, quantity: amount, total: amount * item.price, })
        }

        setCartList(cartListUpdated)
        setTotalItem(totalPurchase)
        setTotalPrice(finalPrice)
    }
    // steps for cart: having a  new var to update, check if item exist, push into that or add amount and then push ＼(o￣∇￣o)/

    const hanlderClearer = () => {
        console.log(cartList)
        let position = cartList.length
        let clear = cartList.splice(0, position)
        setTotalItem(0)
        setTotalPrice(0)

    }

    const hanlderRemover = (id, price, quantity) => {
        let cartListUpdated = cartList
        let position = cartList.findLastIndex(cartList => cartList.id === id)
        let erase = cartList.splice(position, 1)
        let updatedPrice = totalPrice - price
        let updatedQuantity = totalItem - quantity
        setTotalPrice(updatedPrice)
        setTotalItem(updatedQuantity)
    }

    const isInCart = (itemId) => {
        return cartList.some(cartItem => cartItem.id === itemId)
    }

    const totalPurchase = () => cartListUpdated.reduce((ac, item) => {
        return ac += item.quantity;
    }, 0)

    const finalPrice = () => cartListUpdated.reduce((ac, item) => {
        return ac += item.total;
    }, 0)


    // import the states sis, that's what needed (个_个)


    return (
        <Cart.Provider value={{ cartList, totalItem, addCart, totalPrice, hanlderClearer, update, hanlderRemover }}>{children}</Cart.Provider>
    )
}

export default CartProvider