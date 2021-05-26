import React from 'react'
import Book from './Book'

const Books = (props) => {

  const {books} = props

  const renderBooks = () => {
    if (books.length === 0){
      return <p>No Items</p>
    }
    return books.map( book => {
      return <Book key={book.id} {...book} />
    })
  }

  return (
    <div>
      <h1>Books Here</h1>
      {renderBooks()}
    </div>
  )
}
export default Books