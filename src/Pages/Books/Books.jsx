import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {
  // const [allBooks,setAllBooks]=useState([]);
  console.log(data);

  // useEffect(()=>{
  //   fetch('booksData.json')
  //   .then(res=>res.json())
  //   .then(data=>{
  //     console.log(data);
  //   })
  // },[])
  return (
    <div className='mt-5'>
      <h1 className='font-bold text-4xl text-center'>Books</h1>
    <div className='grid md:grid-cols-3 grid-cols-1 gap-5 mt-5'>
        {
        data.map(singleBook=>
        
           <Book key={singleBook.bookId} singleBook={singleBook}></Book>
          
        )
      }
    </div>
    </div>
  );
};

export default Books;