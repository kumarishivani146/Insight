import React from "react";
import styled from "styled-components";
import { AccountBox } from ".";

import './Login.css';
const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
function Login(){
  const today = new Date();
  return(
    <div className="login" style={today.getHours()<12?{backgroundImage:`url("../Images/good-morning.jpg")`}:today.getHours()<17?{backgroundImage:`url("../Images/good-afternoon.jpg")`}:{backgroundImage:`url("../Images/good-evening.jpg")`}}>
    
    <AppContainer>
    <img src="../Images/logo_rbg.png" alt="Insight"/>
      <AccountBox />
    </AppContainer>
    </div>
  )
}

export default Login;