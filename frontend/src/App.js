import React, { useState } from 'react'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import Banner from './components/home/Banner'

import './App.css';

function App() {

  let showBanner = false
  
  if(window.location.pathname === '/' || window.location.pathname === '/home'){
    showBanner = true;
  }

  return (
    <>
      {showBanner && <Banner/>}
      <Navbar/>
      <Footer/>
    </>
  );
}

export default App;
