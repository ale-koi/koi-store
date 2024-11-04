
import CartWidget from './CartWidget.jsx'
import '../styles/navbar.scss'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navBar">
            <ul >
                <li>
                    <NavLink className={({ isActive }) => {
                        return isActive ? "Active" : "notActive"
                    }}
                        to={"/"}
                    >
                        Koi Store
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => {
                        return isActive ? "Active" : "notActive"
                    }}
                        to={"/category/shonen"}
                    >
                        Shonen
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => {
                        return isActive ? "Active" : "notActive"
                    }}
                        to={"/category/josei"}
                    >
                        Josei
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => {
                        return isActive ? "Active" : "notActive"
                    }}
                        to={"/category/seinen"}
                    >
                        Seinen
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => {
                        return isActive ? "Active" : "notActive"
                    }}
                        to={"/category/shojo"}
                    >
                        Shojo
                    </NavLink>
                </li>


            </ul>
            <CartWidget />
        </nav>
    )
}

export default Navbar