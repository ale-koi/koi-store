import React from 'react'
import "../styles/notFound.scss"
import { NavLink } from 'react-router-dom'

const ItemNotFound = () => {
    return (
        <div className='main'>
            <div className='lost-message'>
            <h1>What you're looking for doesn't exist</h1>
            <p>You could try again ___ψ(‥ )</p>
            <NavLink to="/"><button>Home</button></NavLink>
            </div>
        </div>
    )
}

export default ItemNotFound