import React from 'react';
import { Link } from 'react-router-dom';

import { Container, StencilLogo, FormContainer, UserForm, Input, WideButton } from '../../components/SignUser/SignUser_styles.js';

export default function SignUp() {

  function handleSubmit(event) {
    event.preventDefault();
    console.log('clicked "Cadastrar"');
  }

  return (
    <Container>
      <FormContainer>
        <StencilLogo>MyWallet</StencilLogo>
        <UserForm onSubmit={handleSubmit}>
          <Input required
            type='text'
            placeholder='Nome' />
          <Input required
            type='email'
            placeholder='E-mail' />
          <Input required
            type='password'
            placeholder='Senha' />
          <Input required
            type='password'
            placeholder='Confirme a senha' />
          <WideButton type='submit'>
            Cadastrar
          </WideButton>
          <Link to='/'>Já tem uma conta? Entre agora!</Link>
        </UserForm>
      </FormContainer>
    </Container>
  );
}