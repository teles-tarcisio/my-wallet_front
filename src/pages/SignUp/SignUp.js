import React, { useState} from 'react';
import { Link } from 'react-router-dom';

import { Container, StencilLogo, FormContainer, UserForm, Input, WideButton } from '../../components/SignUser/SignUser_styles.js';

export default function SignUp() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', passwordConfirmation: ''});

  function handleSubmit(event) {
    event.preventDefault();
    if (formData.passwordConfirmation !== formData.password) {
      alert('senhas não conferem');
    }
    else {
      alert(`send formData (${formData.name}, ${formData.email}, ${formData.password})`);
    }
  }

  function handleFormChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  return (
    <Container>
      {console.log(formData)}
      <FormContainer>
        <StencilLogo>MyWallet</StencilLogo>
        <UserForm onSubmit={handleSubmit}>
          <Input required
            type='text'
            placeholder='Nome'
            name='name'
            value={formData.name}
            onChange={handleFormChange}
          />
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
          <Input required
            type='password'
            placeholder='Confirme a senha'
            name='passwordConfirmation'
            value={formData.passwordConfirmation}
            onChange={handleFormChange}
          />
          <WideButton type='submit'>
            Cadastrar
          </WideButton>
          <Link to='/'>Já tem uma conta? Entre agora!</Link>
        </UserForm>
      </FormContainer>
    </Container>
  );
}