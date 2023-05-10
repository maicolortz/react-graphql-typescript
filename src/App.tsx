import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import UserCreatePage from './pages/UserCreatePage';

function App() {
  return (
    <div className="App">
      <HomePage></HomePage>
      <UserCreatePage></UserCreatePage>
    </div>
  );
}

export default App;
