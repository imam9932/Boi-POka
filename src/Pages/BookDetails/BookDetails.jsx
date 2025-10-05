import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredDB } from '../../Components/Utility/Utility';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

const BookDetails = () => {
  const {id}=useParams();
  const bookId=parseInt(id);
  const data =useLoaderData();
 const singleBook=data.find(book=>book.bookId===bookId);
 const {image,tags,bookName,category,publisher,rating,review,author,totalPages,yearOfPublishing}=singleBook;

 const handleMarkAsRead=(id)=>{

MySwal.fire({
  title: "Good job!",
  text: "You clicked the button!",
  icon: "success"
})

 addToStoredDB(id);
 }
 return (



    <div className='bg-white text-black flex gap-5 p-5 mt-5 rounded-lg'>
      <div className='w-1/2 bg-gray-300 p-5 flex justify-center items-center rounded-md'>
        <img className='w-[425px] h-[564px]' src={image} alt="Book image" />
      </div>
      <div className='w-1/2 bg-gray-300 rounded-md p-5 space-y-2'>
        <h1 className='font-bold text-3xl'>{bookName}</h1>
        <h5>By : {author}</h5>
        <p className='border-b-1 border-t-1 py-2 my-2 border-gray-500'>{category}</p>
        <p className='text-gray-700'><span className='font-bold text-black'>Review :</span>{review}</p>
        <div className='flex gap-5'>
          <h5 className='font-bold'>Tags</h5>
          <button className='text-green-600'>{tags[0]}</button>
          <button className='text-green-600'>{tags[1]}</button>
       </div>
       <p>Number of Pages : <span className='font-bold'>{totalPages}</span></p>
       <p>Publisher : <span className='font-bold'>{publisher}</span></p>
       <p>Year of Publishing : <span className='font-bold'>{yearOfPublishing}</span></p>
       <p>Rating : <span className='font-bold'>  {rating}</span></p>
       <div className='flex gap-5'>
        <button onClick={()=>handleMarkAsRead(id)} className='font-bold'>Read</button>
        <button className='bg-[#50B1C9] py-1 px-3 rounded-md text-white'>Wishlist</button>
       </div>
      </div>
    </div>
  );
};

export default BookDetails;