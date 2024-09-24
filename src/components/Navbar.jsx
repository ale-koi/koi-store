import '../styles/navbar.scss'
import CartWidget from './CartWidget.jsx'

const Navbar = () => {
    return (
        <>
        <div id="navBar">
            <ul>
                <li><a href=''>Koi store</a></li>
                <li><a href=''>Catalog</a></li>
                <li><a href=''>Categories</a></li>
                <li><a href=''>New Arrivals</a></li>
                <li><a href=''>Sales</a></li>
                <li><a href=''>Contact</a></li>
            </ul>
            <CartWidget/>
        </div>
        </>
        
    )
}

export default Navbar