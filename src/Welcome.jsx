import { useState } from 'react';
import logo from './assets/logo.png';
import styled from 'styled-components';

export default function Welcome(){
    const [visibility,setVisibility] = useState(true);

    return(
        <IniScreen $visible={visibility}>
            <img src={logo}/>
            ZapRecall
            <button onClick={()=>Start()} data-test="start-btn">
                Iniciar Recall!
            </button>
        </IniScreen>
    );

    function Start(){
        setVisibility(false);
    }
}

const IniScreen = styled.div`
    visibility: ${props => props.$visible?"visible":"hidden"};
    width: 100vw;
    height: 100vh;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    background-color: #FB6B6B;
    font-family: Righteous;
    font-weight: 400;
    font-size: 36px;
    color: white;

    img{
        width: 136px;
        height: 161px;
    }

    button{
        width: 246px;
        height: 54px;
        background-color: white;
        color: #D70900;
        border: 1px solid #D70900;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
    }
`;