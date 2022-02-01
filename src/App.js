import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

import { SignIn, SignUp, Hello } from './pages';


export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <SignIn /> } />

        <Route path='/sign-up' element={ <SignUp /> } />

        <Route path='/hello' element={ <Hello /> } />

      </Routes>    
    </BrowserRouter>
  );
}