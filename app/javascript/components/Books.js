import React from 'react'
import Book from './Book'

const Books = (props) => {

  const {books, updateBook, deleteBook} = props

  const renderBooks = () => {
    if (books.length === 0){
      return <p>No Books</p>
    }
    return books.map( book => {
      return <Book key={book.id} {...book} updateBook={updateBook} deleteBook={deleteBook}/>
    })
  }

  return (
    <div>
      <h1>Books</h1>
      {renderBooks()}
    </div>
  )
}
export default Books