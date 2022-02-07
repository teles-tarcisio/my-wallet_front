import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getUserTransactions } from '../../services/api.js';
import Registry from './Registry.js';

import { Container } from '../../components/SignUser/SignUser_styles.js'
import { Header, FinanceRecord, Balance, NewTransactions, NewEntryButton } from '../../components/Hello/Hello_styles.js';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { userAuthContext } from '../../contexts/userAuthContext.js';


const hardcodedTransactions = [
  {
    date: "30/11",
    description: "Almoço mãe",
    amount: 39.90,
    type: "expense"
  },
  {
    date: "27/11",
    description: "Mercado",
    amount: 542.54,
    type: "expense"
  },
  {
    date: "26/11",
    description: "Compras churrasco",
    amount: 67.60,
    type: "expense"
  },
  {
    date: "20/11",
    description: "Empréstimo Maria",
    amount: 500.00,
    type: "revenue"
  },
  {
    date: "15/11",
    description: "Salário",
    amount: 3000.00,
    type: "revenue"
  },
];

export default function Hello() {
  const [transactionsArray, setTransactionsArray] = useState(hardcodedTransactions);
  const { signedUser, setSignedUser } = useContext(userAuthContext);
  const navigate = useNavigate();

  function logout() {
    localStorage.clear();
    console.log('localStorage logout:', localStorage.getItem('authentication'));
    setSignedUser({});
    navigate('/');
  }

  function loadTransactions() {
    const transactionsPromise = getUserTransactions(signedUser.token);
    console.log('array:\n', transactionsPromise);
  }

  useEffect(loadTransactions, []);

  return (
    <Container>
      {console.log('context rerender:', signedUser)}
      <Header>
        <h1>Olá, {signedUser.name}</h1>
        < RiLogoutBoxRLine onClick={logout} />
      </Header>

      <FinanceRecord>
        {transactionsArray.length === 0 ?
          <li>Não há registros de entrada ou saída</li>
          :
          <>
            {transactionsArray.map(transaction => <Registry>{transaction}</Registry>)}
            <Balance>
              <p1>SALDO</p1>
              <p2>2849.96</p2>
            </Balance>
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