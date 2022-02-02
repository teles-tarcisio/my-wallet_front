import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Container, StencilLogo, FormContainer, UserForm, Input, WideButton } from '../../components/SignUser/SignUser_styles.js';

export default function SignIn() {
  const [formData, setFormData] = useState({ email:'', password:'' });
  
  /*
  const [stillLoading, SetStillLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    
  })
  */

  function handleFormChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(`send formData (${formData.email}, ${formData.password})`);
    //navigate();
  }

  return (
    <Container>
      {console.log(formData)}
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