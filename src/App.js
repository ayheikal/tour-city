import React from 'react';
import './App.scss';
import Navbar from './components/navbar/navbar'
import TourList from './components/TourList/index'
function App() {
  return (
    <main>
      <Navbar></Navbar>
      <TourList></TourList>
    </main>
  );
}

export default App;
