import React, {useState} from 'react'
import BookForm from './BookForm'

const Book = (props) => {
  const [showForm, setShowForm] = useState(false)
  const {id, title, author, updateBook, deleteBook} = props
  return (
    <div>
      <h3>Book Title: {title}</h3>
      <h3>Book Author: {author}</h3>
      <button onClick={()=>setShowForm(!showForm)}>Edit</button>
      <button onClick={()=>deleteBook(id)}>Delete</button>
      {showForm && <BookForm 
        updateBook={updateBook}
        id={id}
        title={title}
        author={author}
        />}
    </div>
  )
}
export default Book