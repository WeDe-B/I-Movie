import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import About from '../About/About';
import Search from '../Fetures/Search/Search';
import Home from '../Home/Home';
import Movie from '../Movies/Movie';
import Tv from '../TV Series/Tv';


const Routersconfig = () => {
  return (
    <>
    
    <BrowserRouter>
    
        <Routes>
            <Route path='/' element= {<Home/>}/>
            <Route path='/movie' element= {<Movie/>}/>
            <Route path='/tv-series' element= {<Tv/>}/>
            <Route path='/about' element= {<About/>}/>
            <Route path='/search' element= {<Search/>}/>
            <Route path='/details/movieid/:mediatype' element= {<Home/>}/>

        </Routes>

      <Footer/>
    
    
    </BrowserRouter>
    
    
    </>
  )
}

export default Routersconfig