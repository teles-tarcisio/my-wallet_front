import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Bars } from 'react-loader-spinner';

import { Container, StencilLogo, FormContainer, UserForm, Input, WideButton } from '../../components/SignUser/SignUser_styles.js';


//
///////
import { userSignUp } from '../../services/api.js';
///////
//
export default function SignUp() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', passwordConfirmation: ''});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(ev) {
    ev.preventDefault();
    if (formData.passwordConfirmation !== formData.password) {
      alert('As senhas não conferem, tente novamente');
      return;
    }
    setIsLoading(true);
    delete formData.passwordConfirmation;
    const signUpPromise = userSignUp(formData);
    signUpPromise.then(res => {
      console.log('axios devolveu: ', res);
      setIsLoading(false);
      alert('Cadastro efetuado com sucesso, por favor faça login.');
      console.log('axios devolveu: ', res);
      navigate('/');
    });
    signUpPromise.catch((error) => {
      setIsLoading(false);
      alert(error.response.data);
    });
  }

  function handleFormChange(ev) {
    setFormData({ ...formData, [ev.target.name]: ev.target.value });
  }

  return (
    <Container>
      <FormContainer>
        <StencilLogo>MyWallet</StencilLogo>
        <UserForm onSubmit={handleSubmit}>
          <Input required
            type='text'
            placeholder='Nome'
            name='name'
            value={formData.name}
            onChange={handleFormChange}
            disabled={isLoading}
          />
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
          <Input required
            type='password'
            placeholder='Confirme a senha'
            name='passwordConfirmation'
            value={formData.passwordConfirmation}
            onChange={handleFormChange}
            disabled={isLoading}
          />
          <WideButton type='submit' disabled={isLoading}>
            {
              isLoading ?
              <Bars color="#FFFFFF" height={45} />
              :
              'Cadastrar'
            }
          </WideButton>
          <Link to='/'>Já tem uma conta? Entre agora!</Link>
        </UserForm>
      </FormContainer>
    </Container>
  );
}