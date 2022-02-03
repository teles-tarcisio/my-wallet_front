export default function simulateAxios(value) {
  return new Promise(resolve =>
    setTimeout(() => resolve({...value, token: 'received-token'}), 2500)
  );
}