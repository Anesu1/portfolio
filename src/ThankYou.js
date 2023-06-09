/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.section`
   height:88vh;
  @media(min-width:768px){
    display:flex;
    height:80vh;
    justify-content:center;
    align-items:center;
  }
.wrapper-1{
  width:100%;
  height:100vh;
  display: flex;
flex-direction: column;
height:100vh;
    width:100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    
}
.wrapper-2{
  padding :30px;
  text-align:center;
}
h1{
    font-family: 'Kaushan Script', cursive;
  font-size:2em;
  letter-spacing:3px;
  color:${props => props.theme.color.lightblue} ;

  margin:0;
  margin-bottom:20px;
}
.wrapper-2 p{
  margin:0;
  font-size:1.3em;
  margin-bottom:30px;
  color:#000000;
  font-family: 'Source Sans Pro', sans-serif;
  letter-spacing:1px;
}
h1{
    margin-bottom:30px;
    font-size:50px;
}
button{
  margin:30px 0;
}
a{
  margin-top:50px;
  font-family:${props => props.theme.fam.bold};
  font-size:20px;
}
.footer-like{
  margin-top: auto; 
  background:#D7E6FE;
  padding:6px;
  text-align:center;
}
.footer-like p{
  margin:0;
  padding:4px;
  color:#000000;
  font-family: 'Source Sans Pro', sans-serif;
  letter-spacing:1px;
}
.footer-like p a{
  text-decoration:none;
  color:#000000;
  font-weight:600;
}

@media (min-width:768px){
  h1{
    font-size:4.5em;
  }
  .go-home{
    margin-bottom:20px;
  }
}

@media (min-width:600px){
  .content{
  max-width:1000px;
  margin:0 auto;
}
  .wrapper-1{
  height: initial;
  max-width:620px;
  margin:0 auto;
  padding:40px;
  box-shadow: 4px 8px 40px 8px rgba(0, 0, 0, 0.285);
}
  
}
`

function ThankYou() {
  return (
    <Wrapper>
        <div className="content">
  <div className="wrapper-1">
    <div className="wrapper-2">
      <h1>Thank you !</h1>
      <p>I appreciate you taking the time to reach out to me. I will be in touch soon.</p>
      
      <Link to="/">Go Home</Link>
    </div>
</div>
</div>
    </Wrapper>
  )
}

export default ThankYou