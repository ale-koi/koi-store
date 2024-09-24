import Navbar from "./components/Navbar.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx"

function App() {
  return (
    <>
      <Navbar/>
      <ItemListContainer message={'ヽ(;^o^ヽ) welcome!'} instructions={'click on cart to see the number go up! (⌒.−)＝★'}/>
    </>
  )
}


export default App
