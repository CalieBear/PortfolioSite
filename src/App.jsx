import Header from './components/Header';
import Home from './components/Home';
import About from './components/AboutMe';
import Projects from './components/Projects';
import Education from './components/Education';
import Background from './components/background';
import React, { useState } from 'react'; 
function App() {
    const [currentPage,setCurrentPage] = useState('home');
    const [scrollTarget, setScrollTarget] = useState(null)
    const handlePageChange = (page, anchor = null) =>{
        setCurrentPage(page);
        setScrollTarget(anchor);
    };
  return (
    <div className="App">
        <Header onPageChange={handlePageChange}/> 
        {currentPage==='home' && <Home onNavigate={handlePageChange}/>} 
        {currentPage==='about' && <About/>}
        {currentPage==='project' && <Projects scrollTarget={scrollTarget}/>}
        {currentPage==='education' && <Education/>}
        <Background/>
    </div>
  )
}

export default App
