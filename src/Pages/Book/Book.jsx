import React from 'react';

const Book = ({singleBook}) => {
 const {bookName,author,image,category,publisher,rating,review,tags,totalPages,yearOfPublishing}=singleBook;
   return (
   <div className="card bg-white shadow-sm p-3 border-1 border-orange-400">
  <figure>
   <div className='bg-gray-300 p-5 px-15 rounded-lg w-full flex items-center justify-center'>
     <img className='w-[100px] h-[150px] rounded-md'
      src ={image}
      alt="Books" />
   </div>
  </figure>
   <div className='flex justify-between mt-2'>
    <button className='text-green-500 bg-gray-300 rounded-md py-1 px-3'>{tags[0]}</button>
    <button className='text-green-500 bg-gray-300 rounded-md py-1 px-3'>{tags[1]}</button>
   </div>
   <h3 className='text-black font-semibold text-xl text-center'>{bookName}</h3>
   <h3 className='text-black font-semibold text-center'>By : {publisher}</h3>
   <div className='bg-orange-300 p-3 rounded-lg flex justify-between mt-2'>
    <button className='bg-white text-black rounded-lg py-1 px-3'>{category}</button>
    <button className='bg-white text-black rounded-lg py-1 px-3'>{rating}</button>
   </div>

</div>
  );
};

export default Book;