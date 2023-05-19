import styled from 'styled-components';
import { useState } from 'react';
import play from './assets/seta_play.png';
import virar from './assets/seta_virar.png';
import no from './assets/icone_erro.png';
import almost from './assets/icone_quase.png';
import yes from './assets/icone_certo.png';

export default function Card(props){
    const textoInicial=`Pergunta ${props.index+1}`;
    const status = false;
    const update = props.func;
    const [bstate, setBstate] = useState(play);
    const [texto, setTexto] = useState(textoInicial);
    const [complete,setComplete] = useState(status)

    return(
        <CARD $r={bstate==""||bstate==virar} data-test='flashcard'>
            <P $c={complete} $n={bstate==no} $a={bstate==almost} $y={bstate==yes} $p={bstate!=""&&bstate!=virar} data-test="flashcard-text">{texto}</P>
            <BUTTONS $e={bstate}>
                <RBUTTON $v={!bstate} onClick={()=>Result("no")} data-test="no-btn">Não lembrei</RBUTTON>
                <LBUTTON $v={!bstate} onClick={()=>Result("almost")} data-test="partial-btn">Quase não lembrei</LBUTTON>
                <GBUTTON $v={!bstate} onClick={()=>Result("yes")} data-test="zap-btn">Zap!</GBUTTON>
                <IMAGE src={bstate} disabled={bstate!=play||bstate!=virar} onClick={()=>(bstate==play||bstate==virar)?Play():""} $v={bstate} data-test={bstate==play?"play-btn":(bstate==virar?"turn-btn":(bstate==no?"no-icon":(bstate==yes?"zap-icon":(bstate==almost?"partial-icon":""))))}/>
            </BUTTONS>
        </CARD>
    );

    function Result(res){
        console.log(res);
        if(res=="no"){
            setBstate(no);
        }
        if(res=="almost"){
            setBstate(almost);
        }
        if(res=="yes"){
            setBstate(yes);
        }
        setTexto(textoInicial);
        setComplete(true);
        update();
    }

    function Play(){
        if(bstate == play){
            setBstate(virar);
            setTexto(props.question);
        }else if(bstate!=""){
            setBstate("");
            setTexto(props.answer);
        }
    }
}

const CARD = styled.div`
    display: flex;
    flex-direction: ${props => props.$r?"column":"row"};
    justify-content: space-between;
    align-items: ${props => props.$r?"flex-start":"center"};
    width: 80%;
    min-height: 45px;
    padding: 10px 20px;
    margin: 10px 0;
    overflow: overlay;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    background-color: ${props => props.$r?"#FFFFD4":"white"};
`;

const P = styled.div`
    width:100%;
    height: 100%;
    overflow: clip;
    flex-wrap: wrap;
    font-family: Recursive;
    margin: 5px 0;
    font-weight: ${props=>props.$p?'700':'400'};
    font-size: ${props=>props.$p?'16px':'18px'};
    color: ${props => {
        if(props.$n){return "red"}
        else if(props.$a){return "orange"}
        else if(props.$y){return "green"}
        else{return "black"}
    }};
    text-decoration-line: ${props => props.$c?"line-through":"none"};
`;

const BUTTONS = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: ${props => props.$e?"flex-end":"space-between"};
    align-items: center;
`;

const RBUTTON = styled.button`
    width: 30%;
    height: 100%;
    border-radius: 5px;
    border: none;
    background-color: #FF3030;
    color: white;
    font-family: Recursive;
    font-weight: 400;
    font-size: 12px;
    display: ${props => props.$v?"block":"none"};
`;

const LBUTTON = styled(RBUTTON)`
    background-color: #FF922E;
`;

const GBUTTON = styled(RBUTTON)`
    background-color: #2FBE34;
`;

const IMAGE = styled.img`
    display: ${props => props.$v?"block":"none"};
`;