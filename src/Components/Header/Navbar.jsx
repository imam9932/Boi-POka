import React from 'react';

const Navbar = () => {
  return (
   <nav className='flex md:flex-row flex-col text-center justify-between mt-2'>
      <div>
        <h4 className='font-bold text-lg'>Book Vibe</h4>
      </div>
      <div >
        <a className="mr-4" href="">Home</a>
        <a className="mr-4"  href="">Listed Books</a>
        <a href="">Pages to Road</a>
      </div>
      <div className='mt-2 md:mt-0'>
        <button className='mr-2 bg-[#23BE0A] py-1 px-3 rounded-md'>Sign In</button>
        <button className='bg-[#59C6D2] py-1 px-3 rounded-md '>Sign Up</button>
      </div>
      
    </nav>
  );
};

export default Navbar;