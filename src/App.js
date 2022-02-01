import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

import { SignIn, SignUp } from './pages';


export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <SignIn /> } />

        <Route path='/sign-up' element={ <SignUp /> } />

      </Routes>    
    </BrowserRouter>
  );
}