import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import UserCreatePage from './pages/UserCreatePage';
import UserEditPage from './pages/UserEditPage.';
import { UserByIdPage, UserDeleteByIdPage } from './pages/UserByIdPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route path="/users" element={<UserByIdPage />} />
          <Route path="/users/new" element={<UserCreatePage />} />
          <Route path="/users/edit" element={<UserEditPage />} />
          <Route path="/users/delete" element={<UserDeleteByIdPage />} />
        </Routes>
        <HomePage></HomePage>
      </div>
    </BrowserRouter>
  );
}

export default App;
