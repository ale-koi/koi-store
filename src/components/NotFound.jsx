import React from 'react'
import { NavLink } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='main'>
        <h1>Are you lost? ヽ（ ＾＾）人（＾＾ ）ノ</h1>
        <p>What you were looking for seems to not exist</p>
        <p>Let's go back to home</p>
        <NavLink to ="/"><button>Home</button></NavLink>
    </div>
  )
}

export default NotFound