import axios from 'axios';

const SERVER_BASE_URL = "http://localhost:5000";


export function userSignUp(newUserData) {
  const newUserPromise = axios.post(SERVER_BASE_URL + '/sign-up', newUserData);
  return newUserPromise;
}

export function userSignIn(userData) {
  const loginPromise = axios.post(SERVER_BASE_URL + '/sign-in', userData);
  return loginPromise;
}

export function getUserTransactions(token) {
  const authConfig = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  const transactionsPromise = axios.get(SERVER_BASE_URL + '/transactions', authConfig);
  return transactionsPromise;
}

export function addNewTransaction(transactionData, authConfig) {
  transactionData.amount = parseFloat(transactionData.amount);
  
  const transactionPromise = axios.post(SERVER_BASE_URL + '/transactions', transactionData, authConfig);
  return transactionPromise;
}
