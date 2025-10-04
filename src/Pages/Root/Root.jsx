import React from 'react';
import Navbar from '../../Components/Header/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../Components/Header/Footer/Footer';

const Root = () => {
  return (
    <div className='w-10/12 mx-auto'>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;