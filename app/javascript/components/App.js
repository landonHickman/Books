import React, { useState } from 'react'
import Books from './Books'
import axios from 'axios'
import BookForm from './BookForm'

const App = (props) => {
  const [books, setBooks] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [loading, setLoading] = useState(true)

  const getBooks = async () => {
    let response = await axios.get('/books?delay=10')
    console.log(response.data)
    setBooks(response.data)
    setLoading(false) //doesnt work
  }

  const addBook = (book) => {
    let updatedBooks = [book, ...books]
    setBooks(updatedBooks)
  }

  const updateBook = (updateBook) => {
    let updateBooks = books.map(book => {
      if(book.id !== updateBook.id){
        return book 
      } else {
        return updateBook
      }
    })
    setBooks(updateBooks)
  }

  const deleteBook = async (id) => {
    console.log(id)
    let response = await axios.delete(`/books/${id}`)
    let deletedBook = books.filter (book => book.id !== response.data.id)
    setBooks(deletedBook)
  }

  return (
    <div>
      <h1>Library</h1>
      <button onClick={getBooks}>Get Books</button>
      <button onClick={() =>setShowForm(!showForm)}>Toggle Add Book</button>
      {showForm && <BookForm addBook={addBook}/>}
      <Books books={books} updateBook={updateBook} deleteBook={deleteBook} loading={loading}/>
    </div>
  )
}

export default App