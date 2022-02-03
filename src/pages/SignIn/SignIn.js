import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userAuthContext } from '../../contexts/userAuthContext.js';

import { Bars } from 'react-loader-spinner';

import { Container, StencilLogo, FormContainer, UserForm, Input, WideButton } from '../../components/SignUser/SignUser_styles.js';

//-----
function simulateAxios(value) {
  return new Promise(resolve =>
    setTimeout(() => resolve(value), 5000)
  );
}

//-----

export default function SignIn() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const { signedUser, setSignedUser } = useContext(userAuthContext);
  //const navigate = useNavigate();

  useEffect(() => {
    console.log('chamou useEffect!');
    if (signedUser) {
      console.log('recebeu token? ', signedUser);
    }
  }, []);

  function customLogin(authData) {
    setSignedUser(authData +'_token');
    localStorage.setItem("loginToken", JSON.stringify(authData+'_token'));
  }

  function handleFormChange(ev) {
    setFormData({ ...formData, [ev.target.name]: ev.target.value });
  }

  function handleSubmit(ev) {
    ev.preventDefault(); //ok
    
    setIsLoading(true); //ok
    const loginPromise = simulateAxios(formData.email); //ok
    loginPromise.then(response => { //ok
      setIsLoading(false);  //ok
      
      customLogin(response);

      console.log('success! navigate');
    });
    loginPromise.catch(() => {
      setIsLoading(false);
      alert('Erro de login');
    });

  }

  return (
    <Container>
      <FormContainer>
        <StencilLogo>MyWallet</StencilLogo>
        <UserForm onSubmit={handleSubmit}>
          <Input required
            type='email'
            placeholder='E-mail'
            name='email'
            value={formData.email}
            onChange={handleFormChange}
            disabled={isLoading}
          />
          <Input required
            type='password'
            placeholder='Senha'
            name='password'
            value={formData.password}
            onChange={handleFormChange}
            disabled={isLoading}
          />
          <WideButton type='submit' disabled={isLoading} >
            {
              isLoading ?
                <Bars color="#FFFFFF" height={45} />
                :
                'Entrar'
            }
          </WideButton>
          <Link to='/sign-up'>Primeira vez? Cadastre-se!</Link>
        </UserForm>
      </FormContainer>
    </Container>
  );
}