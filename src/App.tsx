import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import UserCreatePage from './pages/UserCreatePage';
import UserEditPage from './pages/UserEditPage.';
import { UserByIdPage, UserDeletePage } from "./pages/UserFormPage"

function App() {

  return (

    <div className="App">
      <HomePage></HomePage>
      <UserCreatePage></UserCreatePage>
      <UserEditPage id2={1540990}></UserEditPage>
      {/* <UserByIdPage></UserByIdPage>
      <UserDeletePage ></UserDeletePage> */}
      <UserByIdPage></UserByIdPage>
      <UserDeletePage></UserDeletePage>
    </div>
  );
}

export default App;
