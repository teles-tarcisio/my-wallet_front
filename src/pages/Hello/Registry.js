import React from 'react';

import { Transaction } from '../../components/Hello/Hello_styles.js';

export default function Registry({ children }) {

  return (
    <Transaction type={children.type}>
      <p1>{children.date}</p1>
      <p2>{children.description}</p2>
      <p3>{children.amount}</p3>
    </Transaction>
  );
}