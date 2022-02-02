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
padding: 23px 10px 10px 10px;
display: flex;
gap: 15px 0;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #FFFFFF;
border-radius: 5px;
& li {
    width: 180px;
    text-align: center;
    font-size: 20px;
    line-height: 24px;
    font-weight: 400;
    color: #868686;
  }
`;

const Transaction = styled.li`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0 12px;
  font-size: 16px;
  line-height: 19px;
  & p1 {
    color: #C6C6C6;
  }
  & p2 {
    color: #000000;
  }
  & p3 {
    color: ${props => props.type === 'expense' ? '#C70000' : '#03AC00'};
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


export { Header, FinanceRecord, NewTransactions, NewEntryButton, Transaction };