import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 16px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #8C11BE;
`;

const StencilLogo = styled.h1`
  margin: 0 auto 24px auto;
  font-family: 'Saira Stencil One', cursive;
  font-weight: 400;
  font-size: 32px;
  line-height: 50px;
  color: #FFFFFF;  
`;

const FormContainer = styled.div`
  width: 100%;
  margin: auto 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const UserForm = styled.form`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  & a {
    margin: auto;
    text-decoration: none;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #FFFFFF;
  }
`;

const Input = styled.input`
  width: 100%;
  margin: 0 auto 13px auto;
  height: 58px;
  border-radius: 5px;
  border: none;
  background-color: #FFFFFF;
  padding: 17px 15px;
  font-family: 'Raleway', sans-serif;
  font-size: 20px;
  line-height: 23px;
  color: #000000;
`;

const WideButton = styled.button`
  width: 100%;
  height: 46px;
  margin: 0 auto 36px auto;
  background-color: #A328D6;
  border-radius: 5px;
  border: none;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #FFFFFF;
`;

export { Container, StencilLogo, FormContainer, UserForm, Input, WideButton };