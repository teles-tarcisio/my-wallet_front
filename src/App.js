import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { userAuthContext } from './contexts/userAuthContext.js';

import { SignIn, SignUp, Hello, NewTransaction } from './pages';


export default function App() {
  const persistentLogin = JSON.parse(localStorage.getItem("loginToken"));
  const [signedUser, setSignedUser] = useState(persistentLogin);

  return (
    <BrowserRouter>
      <userAuthContext.Provider value={{ signedUser, setSignedUser }} >
        <Routes>
          <Route path='/' element={<SignIn />} />

          <Route path='/sign-up'
            element={<SignUp />}
          />

          <Route path='/hello'
            element={<Hello />}
          />

          <Route path='/new-transaction'
            element={<NewTransaction />}
          />

        </Routes>
      </userAuthContext.Provider>
    </BrowserRouter>
  );
}