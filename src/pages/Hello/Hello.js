import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getUserTransactions } from '../../services/api.js';
import Registry from './Registry.js';

import { Container } from '../../components/SignUser/SignUser_styles.js'
import { Header, FinanceRecord, Balance, NewTransactions, NewEntryButton } from '../../components/Hello/Hello_styles.js';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { userAuthContext } from '../../contexts/userAuthContext.js';


export default function Hello() {
  const [transactionsArray, setTransactionsArray] = useState([]);
  const { signedUser, setSignedUser } = useContext(userAuthContext);
  const navigate = useNavigate();
  const [balance, setBalance] = useState(0);

  function logout() {
    localStorage.clear();
    setSignedUser({});
    navigate('/');
  }

  function loadTransactions() {
    const transactionsPromise = getUserTransactions(signedUser.token);
    transactionsPromise.then(response => {
      setTransactionsArray(response.data);
      calculateBalance()
    });
  }

  useEffect(loadTransactions, [balance]);

  function calculateBalance() {
    const revenuesArray = transactionsArray
      .filter((entry) => (
        entry.type === 'revenue'))
      .map((entry) => (entry.amount));
    const expensesArray = transactionsArray
      .filter((entry) => (
        entry.type === 'expense'))
      .map((entry) => (entry.amount));

    let totalIncome = revenuesArray.reduce((x, y) => x + y, 0);
    let totalOutcome = expensesArray.reduce((x, y) => x + y, 0);

    setBalance((totalIncome - totalOutcome).toFixed(2));
  }

  return (
    <Container>
      <Header>
        <h1>Olá, {signedUser.name}</h1>
        < RiLogoutBoxRLine onClick={logout} color='#C6C6C6' />
      </Header>

      <FinanceRecord>
        {transactionsArray.length === 0 ?
          <li key='000'>Não há registros de entrada ou saída</li>
          :
          <>
            {transactionsArray.map((transaction, index) => <Registry key={index}>{transaction}</Registry>)}
            {balance >= 0 ?
              <Balance balanceColor='green'>
                <h1>SALDO</h1>
                <h2>{balance}</h2>
              </Balance>
              :
              <Balance balanceColor='red'>
                <h1>SALDO</h1>
                <h2>{balance}</h2>
              </Balance>
            }
          </>
        }
      </FinanceRecord>

      <NewTransactions>
        <Link to={'/new-revenue'}>
          <NewEntryButton>
            <AiOutlinePlusCircle />
            <h1>Nova entrada</h1>
          </NewEntryButton>
        </Link>

        <Link to={'/new-expense'} >
          <NewEntryButton>
            <AiOutlineMinusCircle />
            <h1>Nova saída</h1>
          </NewEntryButton>
        </Link>
      </NewTransactions>
    </Container>
  );
}