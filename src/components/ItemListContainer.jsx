import React from 'react'

const ItemListContainer = ({message, instructions}) => {
  return (
    <div style={{textAlign: 'center', margin: 200,}}>
      <h1>{message}</h1>
      <span>{instructions}</span>
    </div>
  )
}

export default ItemListContainer

