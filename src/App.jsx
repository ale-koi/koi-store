import ItemListContainer from "./components/ItemListContainer.jsx"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from "./components/Layout.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";




function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path = "/" element = {<ItemListContainer/>}/>
          <Route path = "/category/:categoryID" element = {<ItemListContainer/>}/>
          <Route path = "/item/" element = {<ItemDetailContainer/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}


export default App
