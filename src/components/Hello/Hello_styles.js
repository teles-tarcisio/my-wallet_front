import styled from 'styled-components';

const Header = styled.div`
width: 100%;
margin: 0 auto 22px auto;
display: flex;
align-items: center;
justify-content: space-between;
font-family: 'Raleway', sans-serif;
font-weight: 700;
font-size: 26px;
line-height: 31px;
color: #FFFFFF;
`;

const FinanceRecord = styled.ul`
width: 100%;
height: 100%;
margin: 0 9px;
padding: 117px 17px 17px 17px;
overflow-y: scroll;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #FFFFFF;
border-radius: 5px;
& li {
    width: 100%;
    text-align: center;
    font-size: 20px;
    line-height: 24px;
    font-weight: 400;
    color: #868686;
  }
`;

const Transaction = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 12px;
  font-size: 16px;
  line-height: 19px;
  & h1 {
    margin: 0 auto 0 0;
    color: #C6C6C6;
  }
  & h2 {
    overflow: scroll;
    margin: 0 auto;
    color: #000000;
  }
  & h3 {
    margin: 0 0 0 auto;
    color: ${props => props.type === 'expense' ? '#C70000' : '#03AC00'};
  }
`;

const Balance = styled.div`
  width: 100%;
  margin: 15px 0 0 0;
  display: flex;
  font-size: 17px;
  line-height: 20px;
  & h1 {
    margin: 0 auto 0 0;
    color: #000000;  
    font-weight: 700;
  }
  & h2 {
    margin: 0 0 0 auto;
    color: #03AC00;
  }
`;

const NewTransactions = styled.div`
  width: 100%;
  margin: 13px 9px 0 9px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NewEntryButton = styled.div`
  width: 155px;
  height: 114px;
  padding: 9px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  background-color: #A328D6;
  border-radius: 5px;
  font-size: 25px;
  line-height: 20px;
  font-weight: 700;
  color: #FFFFFF;
  & h1 {
    font-size: 17px;
    width: 65px;
  }
`;


export { Header, FinanceRecord, Balance, NewTransactions, NewEntryButton, Transaction };