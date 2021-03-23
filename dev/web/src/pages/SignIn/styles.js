import styled from 'styled-components';
import imgHeros from '../../images/heros.jpg';

export const App = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  position: absolute;
  background-image: url(${imgHeros});
  background-repeat: no-repeat;
  background-size: 100vw 100vh;
  background-position-x: center;
  background-position-y: center;
  background-size: cover;
  `;
  
  export const Component = styled.div`
  display: flex;
  flex-direction: column;
  opacity: 0.96;
  background: #000; 
  border: 1px;
  border-style: solid;
  width: 420px;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 60px;
  color: red;
  height: 150px;
`;

export const Input = styled.input`
  width: 340px;
  height: 50px;
  color: #00000;
  background: #fff;
  border: 0px;
  border-radius: 20px;
  outline: none;
  padding-left:15px;
  margin: 10px 0px 10px 0px;
  font-size: 25px;
`;

export const InputIcon = styled.span`
  display: flex;
  height: 80px;
  width: 350px;
  justify-content: flex-end;
  align-items: center;
  color:red;
`;

export const IconRight = styled.span`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 80px;
  color: red;
`;

export const TextLink = styled.button`
  background: transparent;
  text-align: center;
  border: 0px;
  border-radius: 50px;
  height: 60px;
  width: 350px;
  font-size: 28px;
  color: red;
`;

export const Button = styled.button`
  background: red;
  transition-duration: 0.4s;
  outline: none;
  color: #fff;
  border: 0px;
  border-radius: 50px;
  height: 60px;
  margin: 10px 0px 50px 0px;
  width: 350px;
  padding-left:15px;
  font-size: 25px;
`;

export const BtnCancelSignup = styled.button`
background: red;
color: #fff;
border: 0px;
border-radius: 50px;
height: 60px;
margin: 10px 0px 10px 0px;
width: 350px;
font-size: 25px;
`;

export const Image = styled.div`
  background-image: url(${imgHeros});
`;
