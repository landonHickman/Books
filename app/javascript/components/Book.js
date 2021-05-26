import React, {useState} from 'react'

const Book = (props) => {
  const {id, title, author} = props
  return (
    <div>
      <h3>Book Title: {title}</h3>
      <h3>Book Author: {author}</h3>
      
    </div>
  )
}
export default Book