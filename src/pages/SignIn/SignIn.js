import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userAuthContext } from '../../contexts/userAuthContext.js';
import { userSignIn } from '../../services/api.js';

import { Bars } from 'react-loader-spinner';

import { Container, StencilLogo, FormContainer, UserForm, Input, WideButton } from '../../components/SignUser/SignUser_styles.js';


export default function SignIn() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const { signedUser, setSignedUser } = useContext(userAuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (signedUser && signedUser.token) {
      navigate('/hello');
    }
  }, []);

  
  function handleFormChange(ev) {
    setFormData({ ...formData, [ev.target.name]: ev.target.value });
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    
    setIsLoading(true);
    const loginPromise = userSignIn({...formData});
    loginPromise.then(response => {
      setIsLoading(false);
      setSignedUser(response.data);
      localStorage.setItem("auth", JSON.stringify(response.data));
      navigate('/hello');
    });
    loginPromise.catch((error) => {
      setIsLoading(false);
      alert(error.response.data);
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