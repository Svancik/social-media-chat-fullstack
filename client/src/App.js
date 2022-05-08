import Home from './pages/home/Home';
import { Person } from '@material-ui/icons';
import Profile from './pages/profile/Profile';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {
  const {user} = useContext(AuthContext);
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={user ? <Home/> : <Register/>}/>   {/* exact nám říká že vlastnost se musí přesně rovnat = "/" */}
          <Route path="/login" element={user ? <Navigate to="/"/> : <Login/>}/>
          <Route path="/register" element={user ? <Navigate to="/"/> : <Register/>}/>
          <Route path="/profile/:username" element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
