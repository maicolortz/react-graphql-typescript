import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import UserCreatePage from './pages/UserCreatePage';
import UserEditPage from './pages/UserEditPage.';
import { UserByIdPage, UserDeleteByIdPage } from './pages/UserByIdPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users" element={<UserByIdPage />} />
          <Route path="/users/new" element={<UserCreatePage />} />
          <Route path="/users/edit" element={<UserEditPage />} />
          <Route path="/users/delete" element={<UserDeleteByIdPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
