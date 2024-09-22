import React from 'react'

const ItemListContainer = ({message}) => {
  return (
    <div style={{textAlign: 'center', margin: 200,}}>
      <h1>{message}</h1>
      <span>click on cart to see the number go up! (⌒.−)＝★</span>
    </div>
  )
}

export default ItemListContainer

// here add the greeting thing with a prop.