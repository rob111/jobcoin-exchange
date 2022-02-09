import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import {Dashboard} from './components/Dashboard';
import {Login} from './components/Login';
import {useAddress} from './useAddress';

const App = (): JSX.Element => {
  const {address, setAddress} = useAddress();
  
  if (!address) {
    return <Login setAddress={setAddress} />
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={address && <Dashboard address={address} setAddress={setAddress} />} />
        <Route path='/dashboard' element={address && <Dashboard address={address} setAddress={setAddress} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
