import React, { useState } from 'react'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import Banner from './components/home/Banner'

import './App.css';

function App() {

  const [showBanner, setShowBanner] = useState(false)
  return (
    <>
      {showBanner && <Banner/>}
      <Navbar show_banner={setShowBanner}/>
      <Footer/>
    </>
  );
}

export default App;
