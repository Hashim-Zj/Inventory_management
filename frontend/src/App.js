import './App.css';
import "./bootstrap.min.css";
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from './components/Header';
import Home from './components/Home';
import ItemStock from './components/ItemStock';
import Stocks from './components/Stocks';
import OutList from './components/OutList';


function App() {
  return (
    <div >
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/stock' element={<Stocks/>} />
        <Route path='/outs' element={<OutList/>} />
        {/* <Route path='item_stock' element={<ItemStock/>} /> */}
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
