import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bars } from 'react-loader-spinner';

import { Container, Input, WideButton } from '../../components/SignUser/SignUser_styles';
import { Header } from '../../components/Hello/Hello_styles';
import { TransactionContainer, TransactionForm } from '../../components/NewTransaction/NewTransaction_styles.js';
import { addNewTransaction } from '../../services/api';


export default function NewTransaction({ user, type }) {
  const [newTransaction, setNewTransaction] = useState({ amount: undefined, description: '' });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handleFormChange(ev) {
    setNewTransaction({ ...newTransaction, [ev.target.name]: ev.target.value });
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    setIsLoading(true);
    
    const uploadTransaction = {...newTransaction, type: `${type}`};
    const authConfig = {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    };
     
    const newTransactionPromise = addNewTransaction(uploadTransaction, authConfig);
    newTransactionPromise.then(() => {
      alert('Nova transação cadastrada com sucesso!');
      setIsLoading(false);
      navigate('/hello');
    });
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
            min='0'
            step='0.01'
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