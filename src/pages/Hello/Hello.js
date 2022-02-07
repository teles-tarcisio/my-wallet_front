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

  function logout() {
    localStorage.clear();
    console.log('localStorage logout:', localStorage.getItem('authentication'));
    setSignedUser({});
    navigate('/');
  }

  function loadTransactions() {
    const transactionsPromise = getUserTransactions(signedUser.token);
    transactionsPromise.then(response => setTransactionsArray(response.data));
  }

  useEffect(loadTransactions, []);

  return (
    <Container>
      <Header>
        <h1>Olá, {signedUser.name}</h1>
        < RiLogoutBoxRLine onClick={logout} />
      </Header>

      <FinanceRecord>
        {transactionsArray.length === 0 ?
          <li key='000'>Não há registros de entrada ou saída</li>
          :
          <>
            {transactionsArray.map((transaction, index) => <Registry key={index}>{transaction}</Registry>)}
            <Balance>
              <h1>SALDO</h1>
              <h2>2849.96</h2>
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