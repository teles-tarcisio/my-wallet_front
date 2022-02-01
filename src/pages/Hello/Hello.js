import React from 'react';

import { Container } from '../../components/SignUser/SignUser_styles.js'
import { Header, FinanceRecord, NewTransactions, NewEntryButton } from '../../components/Hello/Hello_styles.js';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';

export default function Hello() {

  return (
    <Container>
      <Header>
        <h1>Olá, _USERNAME_</h1>
        < RiLogoutBoxRLine />
      </Header>

      <FinanceRecord>
        <li>Não há registros de entrada ou saída</li>
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