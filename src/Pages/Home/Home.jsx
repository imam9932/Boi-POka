import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router-dom';
import Book from '../Book/Book';

const Home = () => {
  const data=useLoaderData();
  console.log(data);
  return (
    <div>
      <Banner></Banner>
      <Books data={data}></Books>
     </div>
  );
};

export default Home;