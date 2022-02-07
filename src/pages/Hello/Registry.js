import React from 'react';

import { Transaction } from '../../components/Hello/Hello_styles.js';

export default function Registry({ children }) {

  return (
    <Transaction type={children.type}>
      <h1>{children.date}</h1>
      <h2>{children.description}</h2>
      <h3>{children.amount.toFixed(2)}</h3>
    </Transaction>
  );
}