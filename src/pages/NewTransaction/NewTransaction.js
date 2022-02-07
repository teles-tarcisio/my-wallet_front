import React, { useState } from 'react';

import { Bars } from 'react-loader-spinner';

import { Container, Input, WideButton } from '../../components/SignUser/SignUser_styles';
import { Header } from '../../components/Hello/Hello_styles';
import { TransactionContainer, TransactionForm } from '../../components/NewTransaction/NewTransaction_styles.js';


export default function NewTransaction({ type }) {
  const [newTransaction, setNewTransaction] = useState({ amount: undefined, description: '' });
  const [isLoading, setIsLoading] = useState(false);

  function handleFormChange(ev) {
    setNewTransaction({ ...newTransaction, [ev.target.name]: ev.target.value });
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    setIsLoading(true);
    const uploadTransaction = {
      ...newTransaction,
      type: `${type}`,
      date: 'insert_date'
    };
    console.log(uploadTransaction);
    alert('agora a promise');
    setIsLoading(false);
  }




  return (
    <Container>
      <Header>
        <h1>Nova {type === 'expense' ? 'saída' : 'entrada'}
        </h1>
      </Header>
      <TransactionContainer>
        <TransactionForm onSubmit={handleSubmit}>
          <Input required
            type='number'
            placeholder='Valor'
            name='amount'
            value={newTransaction.amount}
            onChange={handleFormChange}
            disabled={isLoading}
          />
          <Input required
            type='text'
            placeholder='Descrição'
            name='description'
            value={newTransaction.description}
            onChange={handleFormChange}
            disabled={isLoading}
          />
          <WideButton type='submit' disabled={isLoading}>
            {
              isLoading ?
                <Bars color="#FFFFFF" height={45} />
                :
                <>
                  Salvar {type === 'expense' ? 'saída' : 'entrada'}
                </>
            }
          </WideButton>
        </TransactionForm>
      </TransactionContainer>
    </Container>
  );
}