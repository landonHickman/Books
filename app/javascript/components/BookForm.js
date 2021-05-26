import axios from 'axios'
import React, {useState} from 'react'

const BookForm = (props) => {
  const {addBook, id, updateBook} = props
  const [author, setAuthor] = useState(props.author ? props.author : '')
  const [title, setTitle] = useState(props.title ? props.title : '')

  
  const handleSubmit = async (event) => {

    event.preventDefault()
    console.log({author, title})
    const book = {author, title}
    if(id){
      let response = await axios.put(`/books/${id}`, book)
      updateBook(response.data)
    }else {
    let response = await axios.post('/books', book)
    addBook(response.data)
    }
    setTitle('')
    setAuthor('')
  }

  return (
    <div>
      <h1>{id ? 'Edit' : 'New'}</h1>
      <form onSubmit={handleSubmit}>
        <p>Title</p>
        <input value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <p>Author</p>
        <input value={author} onChange={(e)=>setAuthor(e.target.value)}/>
        <button>{id ? 'Update' : 'Create' }</button>
      </form>
    </div>
  )
}

export default BookForm