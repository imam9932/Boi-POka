import React from 'react';
import {
  createBrowserRouter,
 } from "react-router-dom";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import BookDetails from '../Pages/BookDetails/BookDetails';
import ReadList from '../Pages/ReadList/ReadList';


 export let router = createBrowserRouter([
  {
    path: "/",
    Component:Root, 
  errorElement:<ErrorPage></ErrorPage>,
  children:[
    {
      index:true,
      path:'/home',
      loader:()=>fetch('booksData.json'),
      Component:Home,
    },
    {
      path:'/about',
      Component:About,
    },
    {
path:'/readList',
      loader:()=>fetch('./booksData.json'),

Component:ReadList,
    },
    {
      path:'/bookDetails/:id',
      loader:()=>fetch('./booksData.json'),

      Component:BookDetails,
    }
  ]
  }
]);