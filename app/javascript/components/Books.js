import React from 'react'
import Book from './Book'

const Books = (props) => {

  const {books, updateBook, deleteBook, loading} = props

  const renderBooks = () => {
    {/*if (loading){
      return <p> Loading...</p>
    } else */}if (books.length === 0) {return <p>No Books</p>}
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