import axios from 'axios'
import React, {useState} from 'react'

const BookForm = (props) => {
  const {addBook, id, updateBook} = props
  const [author, setAuthor] = useState('')
  const [title, setTitle] = useState('')

  
  const handleSubmit = async (event) => {

    event.preventDefault()
    console.log({author, title})
    const book = {author, title}
    let response = await axios.post('/books', book)
    addBook(response.data)
    setTitle('')
    setAuthor('')
  }

  return (
    <div>
      <h1>Book Form</h1>
      <form onSubmit={handleSubmit}>
        <p>Title</p>
        <input onChange={(e)=>setTitle(e.target.value)}/>
        <p>Author</p>
        <input onChange={(e)=>setAuthor(e.target.value)}/>
        <button>Add</button>
      </form>
    </div>
  )
}

export default BookForm