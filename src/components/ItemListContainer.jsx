import React from 'react'

const ItemListContainer = ({message, instructions}) => {
  return (
    <div style={{textAlign: 'center', margin: 200, lineHeight: 0.8}}>
      <h1 style={{fontFamily: 'Dongle', fontSize: 95,}}>{message}</h1>
      <span style={{fontStyle: 'italic'}}>{instructions}</span>
    </div>
  )
}

export default ItemListContainer

