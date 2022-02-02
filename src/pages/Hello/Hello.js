import React from 'react';

import Registry from './Registry.js';

import { Container } from '../../components/SignUser/SignUser_styles.js'
import { Header, FinanceRecord, Balance, NewTransactions, NewEntryButton } from '../../components/Hello/Hello_styles.js';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';


//const transactionsArray = [];
const transactionsArray = [
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
    amount: 3000.00
  },
];

export default function Hello() {

  return (
    <Container>
      <Header>
        <h1>Olá, _username_</h1>
        < RiLogoutBoxRLine />
      </Header>

      <FinanceRecord>
        {transactionsArray.length === 0 ? 
          <li>Não há registros de entrada ou saída</li>
          :
          transactionsArray.map(transaction => <Registry>{transaction}</Registry>)
        }
        
        <Balance>
          <p1>SALDO</p1>
          <p2>2849.96</p2>
        </Balance>
        
      </FinanceRecord>

      <NewTransactions>
        <NewEntryButton>
          <AiOutlinePlusCircle />
          <h1>Nova entrada</h1>
        </NewEntryButton>

        <NewEntryButton>
          <AiOutlineMinusCircle />
          <h1>Nova saída</h1>
        </NewEntryButton>
      </NewTransactions>
    </Container>
  );
}