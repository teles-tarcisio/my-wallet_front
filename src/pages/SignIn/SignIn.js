import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Container, StencilLogo, FormContainer, UserForm, Input, WideButton } from '../../components/SignUser/SignUser_styles.js';


function simulateAxios(value) {
  return new Promise( resolve =>
    setTimeout(() => {
      console.log('\t\tpassou delay timeout');
      resolve(value);
    }, 4500)
  );
}

export default function SignIn() {
  const [formData, setFormData] = useState({ email:'', password:'' });
  
  /*
  const [stillLoading, SetStillLoading] = useState(false);
  const navigate = useNavigate();
  */
  
  

  function handleFormChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    console.log('clicked submit ');
    const resposta = simulateAxios('simulatedAxios');
    console.log('\tcontinuando após chamar simulatedAxios');
    resposta.then(res => console.log('\t\t\tresposta com atraso: ', res));
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
          />
          <Input required
            type='password'
            placeholder='Senha'
            name='password'
            value={formData.password}
            onChange={handleFormChange}
          />
          <WideButton type='submit'>
            Entrar
          </WideButton>
          <Link to='/sign-up'>Primeira vez? Cadastre-se!</Link>
        </UserForm>
      </FormContainer>
    </Container>
  );
}