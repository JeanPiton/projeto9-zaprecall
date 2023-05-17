import { useState } from 'react'
import styled from 'styled-components';
import logo from './assets/logo.png';

export default function App() {

  return (
    <APP>
      <LOGO>
        <img src={logo}/>
        ZapRecall
      </LOGO>
    </APP>
  )
}


const APP = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #FB6B6B;
`;

const LOGO = styled.div`
  font-family: Righteous;
  font-weight: 400;
  font-size: 36px;
  color: white;

  & > img{
    width: 52px;
    height: 60px;
  }
`;