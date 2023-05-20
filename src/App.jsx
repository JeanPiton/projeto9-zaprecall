import { useState } from 'react'
import styled from 'styled-components';
import logo from './assets/logo.png';
import Card from './Cards';
import Welcome from './Welcome';
import deck from './Questions';
import party from './assets/party.png';
import sad from './assets/sad.png';
import no from './assets/icone_erro.png';
import almost from './assets/icone_quase.png';
import yes from './assets/icone_certo.png';

export default function App() {
  const [progress,setProgress] = useState(0);
  const [marks,setMarks] = useState([]);
  const [resImg,setResImg] = useState("");
  const [resMessage,setResMessage] = useState({title:"", message:""});

  return (
    <APP>
      <Welcome />
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
        <div data-test="finish-text">
          <TITLE><img src={resImg}/> {resMessage.title}</TITLE>
          <MESSAGE>{resMessage.message}</MESSAGE>
        </div>
        <>{progress}/{deck.length} CONCLUÍDOS</>
        <MARKS>{marks.map((e,i)=><img key={i+50} src={e} data-test={e==no?"no-icon":e==almost?"partial-icon":"zap-icon"}/>)}</MARKS>
      </BOTTOM>
    </APP>
  )

  function finish(prop){
    const mark = [...marks];
    mark.push(prop);
    setMarks(mark);
    setProgress(progress+1);

    if(progress+1==deck.length){
      if(!mark.includes(no)){
        setResImg(party);
        setResMessage({title:"Parabéns!",message:"Você não esqueceu de nenhum flashcard!"});
      }else{
        setResImg(sad);
        setResMessage({title:"Putz...",message:`Ainda faltam alguns... \nMas não desanime!`});
      }
    }
  }
}


const APP = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #FB6B6B;
`;

const CONTENT = styled.div`
  margin-bottom: 171px;
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
  min-height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px 20px;
  gap: 10px;
  background-color: white;
  font-family: Recursive;
  font-weight: 400;
  font-size: 18px;
`;

const MARKS = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;

const TITLE = styled.strong`
  display: flex;
  justify-content: center;
  font-size: 18px;
  font-weight: 700;
  overflow: clip;
  gap: 10px;
`;

const MESSAGE = styled.div`
  text-align: center;
  word-wrap: normal;
  overflow: clip;
  white-space: pre-line;
`;