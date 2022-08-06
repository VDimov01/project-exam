import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Slider } from './components/Slider'
import { About } from './components/About'
import { Portfolio } from './components/Portfolio'
import { Achieve } from './components/Achieve'
import { Client } from './components/Client'
import { Contact } from './components/Contact'
import { Info } from './components/Info'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import { useState } from 'react';
import { AuthContext } from './contexts/AuthContext';


function App() {

  const [auth, setAuth] = useState({});

  const userLogin = (user) => {
    setAuth(user);
  }

  return (
    <>
    <AuthContext.Provider value={{ user:auth, userLogin }}>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Slider />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/catalog' element={<Portfolio />} />
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
