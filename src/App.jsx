import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/header';
import About from './components/About';
import Contacts from './components/Contacts';
import Home from './components/Home';
import FilmItem from './components/FilmItem';
import { useEffect, useState } from 'react';
import { api_url } from './lib';

function App() {
  const [datas, setDatas] = useState([])
    useEffect(()=>{
        fetch(api_url)
        .then(res => res.json())
        .then(date => setDatas(date.results))
    }, [])
    

  return (
    <div className="App">
      <Header/>
          <Routes>
            <Route path='/home' element={<Home datas={datas} key={Date.now()}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contacts' element={<Contacts/>}/>
            <Route path='/filmItem' element={<FilmItem datas={datas}/>}/>
          </Routes>
       <Footer/>
    </div>
  );
}

export default App;
