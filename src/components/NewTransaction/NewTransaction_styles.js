import styled from 'styled-components';

const TransactionContainer = styled.div`
  width: 100%;
  margin: 0 25px auto 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TransactionForm = styled.form`
  margin: auto;
`;

export { TransactionContainer, TransactionForm };