import React from 'react'
import { NavLink } from 'react-router-dom'
import "../styles/notFound.scss"

const NotFound = () => {
  return (
    <div className='main'>
      <div className='lost-message'>
        <h1>Are you lost? ヽ（ ＾＾）人（＾＾ ）ノ</h1>
        <p>What you were looking for seems to not exist</p>
        <p>Let's go back to home</p>
        <NavLink to ="/"><button>Home</button></NavLink>
      </div>
        
    </div>
  )
}

export default NotFound