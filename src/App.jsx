import ItemListContainer from "./components/ItemListContainer.jsx"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from "./components/Layout.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";

import CartProvider from "./contexts/CartProvider.jsx";
import Cart from "./components/Cart.jsx";
import Testing from "./components/Testing.jsx";
import Checkout from "./components/Checkout.jsx";
import OrderPlaced from "./components/OrderPlaced.jsx";
import NotFound from "./components/NotFound.jsx";




function App() {
    return (
    <CartProvider>
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path = "/" element = {<ItemListContainer/>}/>
                    <Route path = "/category/:categoryId" element = {<ItemListContainer/>}/>
                    <Route path = "/item/:id" element = {<ItemDetailContainer/>}/>
                    <Route path = "/cart" element = {<Cart/>}/>
                    <Route path = "/testing" element ={<Testing/>}/>
                    <Route path = "/checkout" element={<Checkout/>}/>
                    <Route path = "*" element={<NotFound/>}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    </CartProvider>
)
}


export default App
