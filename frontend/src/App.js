import React, { useEffect, useState } from 'react'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import Banner from './components/home/Banner'
import { backendEnabled, buildApiUrl } from './config';

import './App.css';

function App() {

  const [showBanner, setShowBanner] = useState(false)
  const [apiStatus, setApiStatus] = useState(backendEnabled ? 'checking' : 'static')

  useEffect(() => {
    if (!backendEnabled) {
      return;
    }

    fetch(buildApiUrl('/api/health/'))
      .then((res) => {
        if (!res.ok) {
          throw new Error('health endpoint returned non-200');
        }
        return res.json();
      })
      .then(() => setApiStatus('connected'))
      .catch(() => setApiStatus('offline'));
  }, []);

  useEffect(() => {
    console.info(`[API] status: ${apiStatus}`);
  }, [apiStatus]);

  return (
    <>
      {showBanner && <Banner/>}
      <Navbar show_banner={setShowBanner}/>
      <Footer/>
    </>
  );
}

export default App;
