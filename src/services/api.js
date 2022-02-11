import axios from 'axios';


export function userSignUp(newUserData) {
  const newUserPromise = axios.post(process.env.REACT_APP_API + '/sign-up', newUserData);
  return newUserPromise;
}

export function userSignIn(userData) {
  const loginPromise = axios.post(process.env.REACT_APP_API + '/sign-in', userData);
  return loginPromise;
}

export function getUserTransactions(token) {
  const authConfig = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  const transactionsPromise = axios.get(process.env.REACT_APP_API + '/transactions', authConfig);
  return transactionsPromise;
}

export function addNewTransaction(transactionData, authConfig) {
  transactionData.amount = parseFloat(transactionData.amount);
  
  const transactionPromise = axios.post(process.env.REACT_APP_API + '/transactions', transactionData, authConfig);
  return transactionPromise;
}
