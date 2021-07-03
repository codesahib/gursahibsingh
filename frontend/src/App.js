import React from 'react'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer';

import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <p onClick={()=>{window.open("/","_self")}}>Gursahib Singh</p>  
      </div>
      <Navbar/>
      <Footer/>
    </>
  );
}

export default App;
