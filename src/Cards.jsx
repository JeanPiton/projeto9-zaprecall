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
        <CARD $r={bstate==""||bstate==virar}>
            <P $c={complete} $n={bstate==no} $a={bstate==almost} $y={bstate==yes}>{texto}</P>
            <BUTTONS $e={bstate}>
                <RBUTTON $v={!bstate} onClick={()=>Result("no")}>Não lembrei</RBUTTON>
                <LBUTTON $v={!bstate} onClick={()=>Result("almost")}>Quase não lembrei</LBUTTON>
                <GBUTTON $v={!bstate} onClick={()=>Result("yes")}>Zap!</GBUTTON>
                <IMAGE src={bstate} disabled={bstate!=play||bstate!=virar} onClick={()=>(bstate==play||bstate==virar)?Play():""} $v={bstate}/>
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
    justify-content: space-around;
    align-items: ${props => props.$r?"flex-start":"center"};
    width: 80%;
    min-height: 45px;
    padding: 10px 20px;
    margin: 10px 0;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    background-color: white;
`;

const P = styled.p`
    width:100%;
    height: auto;
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