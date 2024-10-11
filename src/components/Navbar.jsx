import React from 'react'
import CartWidget from './CartWidget.jsx'
import  '../styles/navbar.scss'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navBar">
        <ul >
            <li>
                <NavLink className={ ({isActive}) =>{
                    return isActive ? "Active" : "notActive"
                }}
                to = {"/"}
                >
                    Koi Store
                </NavLink>
            </li>
            <li>
                <NavLink className={ ({isActive}) =>{
                    return isActive ? "Active" : "notActive"
                }}
                to = {"/category/Shonen"}
                >
                    Shonen
                </NavLink>
            </li>
            <li>
                <NavLink className={ ({isActive}) =>{
                    return isActive ? "Active" : "notActive"
                }}
                to = {"/category/Josei"}
                >
                    Josei
                </NavLink>
            </li>
            <li>
                <NavLink className={ ({isActive}) =>{
                    return isActive ? "Active" : "notActive"
                }}
                to = {"/category/Seinen"}
                >
                    Seinen
                </NavLink>
            </li>
            <li>
                <NavLink className={ ({isActive}) =>{
                    return isActive ? "Active" : "notActive"
                }}
                to = {"/category/Isekai"}
                >
                    Isekai
                </NavLink>
            </li>
            
        </ul>
        <CartWidget/>
    </nav>
)
}

export default Navbar