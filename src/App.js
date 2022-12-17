import React from 'react';
import './App.css'
import Footer from './components/Footer/Footer'
import Services from './components/Services/Services'
import About from './components/About/About'
import Offer from './components/Offer/Offer'
import Main from './components/Main/Main'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
const App = () => {
    return (
      <>
      <Navbar/>
       <Home/>
      <Main/>
       <Offer/>
        <About/>
      <Services/> 
    <Footer/> 
      
      </>
    )
}
export default App