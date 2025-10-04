import React from 'react';
import BookImage from '/pngwing 1.png'

const Banner = () => {
  return (
    <div className='bg-amber-100 mt-5 flex text-black justify-between rounded-xl text-center items-center p-10 px-10'>
      <div>
        <h1 className='font-bold md:text-[56px]'>Books to freshen up your bookshelf</h1>
        <button className='bg-[#23BE0A] py-1 px-3 rounded-md mt-2'> View The List</button>
      </div>
      <div>
        <img src={BookImage} alt="" />
      </div>
      
    </div>
  );
};

export default Banner;