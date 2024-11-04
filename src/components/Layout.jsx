import Navbar from "./Navbar"
import Footer from "./Footer"
import "../styles/layout.scss"

const Layout = ({ children }) => {
    return (
        <>
            <div className="layout">
                <Navbar />
                <div>
                    {children}
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Layout
