/* eslint-disable react-hooks/exhaustive-deps */
import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux'
import Footer from './components/Footer'
import { darkTheme, lightTheme } from './redux/themeSlice';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects';
import image from './bg.webp'

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    let hour = new Date().getHours();
    if(hour < 6 || hour > 17){
      dispatch(darkTheme())
    }else{
      dispatch(lightTheme())
    }
  },[])
  return (
    <div
    className='rotate'
    style={{
      backgroundImage:`url(${image})`,
      backgroundSize:`cover`,
    }}>
      <Router>
      
        <Routes>
          <Route element={<Home />} exact path='/' />
          <Route element={<Projects />} path='/projects' />
        </Routes>
      <Footer />
      </Router>
    </div>
    
  )
}

export default App