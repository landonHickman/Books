import React, { useState } from 'react'
import Books from './Books'
import axios from 'axios'
import BookForm from './BookForm'

const App = (props) => {
  const [books, setBooks] = useState([])
  const [showForm, setShowForm] = useState(false)

  const getBooks = async () => {
    let response = await axios.get('/books')
    setBooks(response.data)
  }


  return (
    <div>
      <h1>App.js</h1>
      <button onClick={getBooks}>Get Books</button>
      <button onClick={() =>setShowForm(!showForm)}>Toggle Form</button>
      {showForm && <BookForm />}
      <Books books={books}/>
    </div>
  )
}

export default App