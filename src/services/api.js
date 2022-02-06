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
  const transactionsPromise = axios.get(SERVER_BASE_URL + '/transactions');
  return transactionsPromise;
}

export function simulateAxios(value) {
  return new Promise(resolve =>
    setTimeout(() => resolve({...value, token: 'received-token'}), 2500)
  );
}