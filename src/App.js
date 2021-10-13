import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserStorage } from './UserContext';
import Header from './Componets/Header';
import Footer from './Componets/Footer';
import Home from './Componets/Home';
import Login from './Login/Login';
import User from './Componets/User/User';
import ProtectedRoute from './Componets/Helper/ProtectedRoute';
import Photo from './Componets/Photo/Photo';
import UserProfile from './Componets/User/UserProfile';
import NotFound from './Componets/NotFound';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className='AppBody'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login/*" element={<Login />} />
              <ProtectedRoute path="conta/*" element={<User />} />
              <Route path="foto/:id" element={<Photo />} />
              <Route path="perfil/:user" element={<UserProfile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;