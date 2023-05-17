import { useState } from 'react'
import styled from 'styled-components';
import logo from './assets/logo.png';
import Card from './Cards';
import deck from './Questions';

export default function App() {
  const [progress,setProgress] = useState(0);

  return (
    <APP>
      <CONTENT>
        <LOGO>
          <img src={logo}/>
          <>ZapRecall</>
        </LOGO>
        <QUESTIONS>
          {deck.map((e,i)=><Card key={i} index={i} question={e.question} answer={e.answer} func={finish}/>)}
        </QUESTIONS>
      </CONTENT>
      <BOTTOM data-test='footer'>
        {progress}/{deck.length} CONCLUÍDOS
      </BOTTOM>
    </APP>
  )

  function finish(){
    setProgress(progress+1);
  }
}


const APP = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #FB6B6B;
`;

const CONTENT = styled.div`
  margin-bottom: 70px;
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

const QUESTIONS = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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