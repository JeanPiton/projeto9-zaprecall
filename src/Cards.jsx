import styled from 'styled-components';
import { useState } from 'react';
import play from './assets/seta_play.png';
import virar from './assets/seta_virar.png';

export default function Card(props){
    const textoInicial=`Pergunta ${props.index}`;
    const [bstate, setBstate] = useState(play);
    const [texto, setTexto] = useState(textoInicial);

    return(
        <CARD $r={bstate==""||bstate==virar}>
            <P>{texto}</P>
            <BUTTONS $e={bstate}>
                <RBUTTON $v={!bstate} onClick={()=>Result("no")}>Não lembrei</RBUTTON>
                <LBUTTON $v={!bstate} onClick={()=>Result("almost")}>Quase não lembrei</LBUTTON>
                <GBUTTON $v={!bstate} onClick={()=>Result("yes")}>Zap!</GBUTTON>
                <IMAGE src={bstate} disabled={bstate==""} onClick={Play} $v={bstate}/>
            </BUTTONS>
        </CARD>
    );

    function Result(res){
        console.log(res);
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
    justify-content: space-around;
    align-items: ${props => props.$r?"flex-start":"center"};
    width: 80%;
    min-height: 45px;
    padding: 10px 20px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    background-color: white;
`;

const P = styled.p`
    width:100%;
    height: auto;
`;

const BUTTONS = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: ${props => props.$e?"flex-end":"space-between"};
    align-items: center;
`;

const RBUTTON = styled.button`
    width: 30%;
    border-radius: 5px;
    border: none;
    background-color: #FF3030;
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