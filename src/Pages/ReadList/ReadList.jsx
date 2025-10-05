import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../Components/Utility/Utility';
import Book from '../Book/Book';

const ReadList = () => {
  const [readList,setReadList]=useState([])
  const [sort,setSort]=useState('')
  const data=useLoaderData();

  useEffect(()=>{
    const storedBookData=getStoredBook();
    const convertedStoredBooks=storedBookData.map(id=>parseInt(id))
     const myReadList=data.filter(book=> convertedStoredBooks.includes(book.bookId));
     setReadList(myReadList);
  },[])

  const handleSort=(type)=>{
    setSort(type);
    if(type==='By Pages'){
      const sortedByPage=[...readList].sort((a,b)=>a.totalPages-b.totalPages);
      setReadList(sortedByPage);
    }
    if(type==="By Ratings"){
      const sortedByRatings=[...readList].sort((a,b)=>a.rating-b.rating);
      setReadList(sortedByRatings);
      console.log(sortedByRatings)
    }
  }
 
  return (
    <div>
      <details className="dropdown">
  <summary className="btn m-1">Sort By : {sort? sort:''}</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a onClick={()=>handleSort('By Pages')}>By Pages</a></li>
    <li><a onClick={()=>handleSort('BY Ratings')}>By Ratings</a></li>
  </ul>
</details>
      <Tabs>
    <TabList>
      <Tab>Read Book List</Tab>
      <Tab>Wish List</Tab>
    </TabList>

    <TabPanel>
      <h2>Book I Read {readList.length}</h2>
      <div className='grid md:grid-cols-3 grid-cols-1 mt-5 gap-3'>
        {
        readList.map(b=> <Book key={b.bookId} singleBook={b}></Book>)
      }
      </div>
    </TabPanel>
    <TabPanel>
      <h2>Wish List</h2>
    </TabPanel>
  </Tabs>
    </div>
  );
};

export default ReadList;