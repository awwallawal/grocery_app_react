import Header from './Header'
import MainContent from './MainContent'
import Footer from './Footer'
import './App.css';
import { useState } from 'react';

function App() {
  
  return (
    <div className='App'>
      <Header  title="Grocery List"/>
      <MainContent />
      <Footer />
    </div>
  )
}

export default App
