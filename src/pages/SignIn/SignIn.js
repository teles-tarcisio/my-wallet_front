import React from 'react';
import { Link } from 'react-router-dom';

import { Container, StencilLogo, FormContainer, UserForm, Input, WideButton } from '../../components/SignUser/SignUser_styles.js';

export default function SignIn() {

  function handleSubmit(event) {
    event.preventDefault();
    console.log('clicked "Entrar"');
  }

  return (
    <Container>
      <FormContainer>
        <StencilLogo>MyWallet</StencilLogo>
        <UserForm onSubmit={handleSubmit}>
          <Input placeholder='E-mail' />
          <Input placeholder='Senha' />
          <WideButton type='submit'>
            Entrar
          </WideButton>
          <Link to='/sign-up'>Primeira vez? Cadastre-se!</Link>
        </UserForm>
      </FormContainer>
    </Container>
  );
}