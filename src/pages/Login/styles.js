import styled from 'styled-components';

export const App = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  //width: 100vh;
  background: #141E30;
  background: -webkit-linear-gradient(to right, #243B55, #141E30);
  background: linear-gradient(to right, #243B55, #141E30);
`;  

export const Component = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  width: 400px;
  height: 500px;
  border-radius: 3px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 40px;
  color: #243B55;
  height: 150px;
`;

export const Input = styled.input`
  overflow: hidden;
  color: #fff;
  background: #243B55;
  border: 0px;
  border-radius: 50px;
  height: 60px;
  margin: 10px 0px 10px 0px;
  width: 90%;
  padding-left:15px;
  font-size: 25px;
`;

export const TextLink = styled.button`
  background: transparent;
  text-align: center;
  border: 0px;
  border-radius: 50px;
  margin: 10px 0px 10px 0px;
  height: 60px;
  width: 350px;
  font-size: 25px;
  color: #243B55;
`;

export const Button = styled.button`
  background: #243B55;
  color: #fff;
  border: 0px;
  border-radius: 50px;
  height: 60px;
  margin: 10px 0px 50px 0px;
  width: 350px;
  padding-left:15px;
  font-size: 25px;
`;
