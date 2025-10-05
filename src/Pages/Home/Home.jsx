import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Books from '../Books/Books';
import { Link, useLoaderData } from 'react-router-dom';
import Book from '../Book/Book';

const Home = () => {
  const data=useLoaderData();
  
  return (
   <Link to={'/home'}>
    <div>
      <Banner></Banner>
      <Books data={data}></Books>
     </div>
   </Link>
  );
};

export default Home;