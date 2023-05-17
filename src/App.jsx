import { useState } from 'react'
import styled from 'styled-components';
import logo from './assets/logo.png';

export default function App() {

  return (
    <APP>
      <LOGO>
        <img src={logo}/>
        <>ZapRecall</>
      </LOGO>
      <QUESTIONS>

      </QUESTIONS>
      <BOTTOM>
        0/4 CONCLUÍDOS
      </BOTTOM>
    </APP>
  )
}


const APP = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #FB6B6B;
`;

const LOGO = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Righteous;
  font-weight: 400;
  font-size: 36px;
  color: white;
  margin: 48px;

  & > img{
    width: 52px;
    height: 60px;
  }
`;

const QUESTIONS = styled.div``;

const BOTTOM = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  font-family: Recursive;
  font-weight: 400;
  font-size: 18px;
`;