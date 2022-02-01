import React from 'react';

import { Container, Input, WideButton } from '../../components/SignUser/SignUser_styles';
import { Header } from '../../components/Hello/Hello_styles';
import { TransactionContainer, TransactionForm } from '../../components/NewTransaction/NewTransaction_styles.js';

export default function NewTransaction() {
  return (
    <Container>
      <Header>
        <h1>Nova _entrada_</h1>
      </Header>
      <TransactionContainer>
        <TransactionForm>
          <Input required
            type='number'
            placeholder='Valor'/>
          <Input required
            type='text'
            placeholder='Descrição' />

          <WideButton type='submit'>
            Salvar _entrada_
          </WideButton>
        </TransactionForm>
      </TransactionContainer>
    </Container>
  );
}