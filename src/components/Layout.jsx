import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer/>
    </>
  )
}

export default Layout

// add footer here eventually (_ _)ヾ(‘ロ‘)