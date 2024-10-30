import React from 'react'
import "../styles/Footer.scss"
import Instagram from "../assets/instagram.svg"
import Twitter from "../assets/twitter.svg"
import Github from "../assets/github.svg"

const Footer = () => {
    return (
        <div className='main-footer'>
            <div className='links'>
                <ul>
                    <h2>Links:</h2>
                    <li>About</li>
                    <li>About categories</li>
                </ul>
            </div>
            <div className='sns'>
                <h2>Follow us around! (｡’▽’｡)</h2>
                <img src={Instagram} alt="" />
                <img src={Twitter} alt="" />
                <img src={Github} alt="" />
            </div>
            <div className='credits'>
                <h2>Credits:</h2>
                <p>©2024</p>
                <p>mock project made a course. ☆⌒(*＾-°)v</p> 
                
            </div>

        </div>
    )
}

export default Footer