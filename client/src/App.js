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
import CreatePost from './components/CreatePost/CreatePost';
import Details from './components/Details/Details';
import Edit from './components/Edit/Edit';
import { useEffect, useState } from 'react';
import { AuthContext } from './contexts/AuthContext';
import * as picturesService from './services/picturesService';
import { EditComment } from './components/Details/EditComment';
import * as commentsService from './services/commentsService';


function App() {

  const [auth, setAuth] = useState({});
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    picturesService.getAll()
      .then(pictures => setPictures(Object.values(pictures)))
  }, []);


  const addPicture = (picture) => {
    setPictures([...pictures, picture]);
  }

  const updatePicture = (picture) => {
    setPictures(pictures.map(p => p._id === picture._id ? picture : p));
  }

  const deletePicture = (id) => {
    setPictures(pictures.filter(p => p._id !== id));
  }

  const userLogin = (user) => {
    setAuth(user);
  }

  const userLogout = () => {
    setAuth({});
  }

  return (
    <>
      <AuthContext.Provider value={{ user: auth, userLogin, userLogout }}>
        <div className="App">
          <Header />
          <Routes>
            <Route path='/' element={<Home pictures={pictures} />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/catalog' element={<Catalog pictures={pictures} />} />
            <Route path='/create' element={<CreatePost addPicture={addPicture} />} />
            <Route path='/edit/:id' element={<Edit pictures={pictures} updatePicture={updatePicture} />} />
            <Route path='/details/:id' element={<Details pictures={pictures} updatePicture={updatePicture} deletePicture={deletePicture} />} />
            <Route path='/edit/comment/:id/:pictureId' element={<EditComment pictures={pictures} updatePicture={updatePicture} />} />
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
