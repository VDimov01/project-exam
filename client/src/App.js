import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Slider } from './components/Slider'
import { About } from './components/About'
import { Home } from './components/Home/Home'
import { Achieve } from './components/Achieve'
import { Client } from './components/Client'
import { Contact } from './components/Contact'
import { Info } from './components/Info'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import Logout from './components/Logout/Logout'
import Catalog from './components/Catalog/Catalog'
import { useEffect, useState } from 'react';
import { AuthContext } from './contexts/AuthContext';
import * as picturesService from './services/picturesService';


function App() {

  const [auth, setAuth] = useState({});
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    picturesService.getAll()
      .then(pictures => setPictures(Object.values(pictures)))
  },[]);

  const userLogin = (user) => {
    setAuth(user);
  }

  const userLogout = () => {
    setAuth({});
}

  return (
    <>
    <AuthContext.Provider value={{ user:auth, userLogin, userLogout }}>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home pictures={pictures}/>} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/catalog' element={<Catalog pictures={pictures}/>} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/about' element={<About />} />
        </Routes>

        {/* <Client /> */}

        <Achieve />


        <Info />

        <Footer />
      </div>
      </AuthContext.Provider >
    </>
  );
}

export default App;
