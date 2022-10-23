import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Wrapper = styled.section`
  background:${props => props.bgColor};
  transition:all 0.7s ease;
  padding:0 5%;
  height:100vh;
  position:relative;
  @media (min-width:992px) {
    padding:0 10%;
  }
  h1{
    font-family: ${props => props.theme.fam.bold};
    font-size:28px;
    color:${props => props.theme.color.blue};
    margin-bottom:50px;
    padding-top:25%;
    @media (min-width:768px) {
      font-size:50px;
      padding-top: 15%;
    }
  }
  p{
    color:${props => props.color};
    font-family: ${props => props.theme.fam.regular};
    font-size: 36px;
    line-height: 1.5;
    max-width:850px;
    @media (min-width:768px) {
      font-size:45px;
    }
  }
  img{
    width:100px;
    transform:rotate(90deg);
    position:absolute;
    bottom:0;
    left:-2%;
    @media (min-width:768px) {
      left:7%;
    }
  }
`

function Banner() {
  const isLight = useSelector(state => state.theme.isLight);
  return (
    <Wrapper bgColor={isLight ? 'rgba(243, 243, 243, 0.7)' : 'rgba(29, 29, 29, 0.8)'} color={isLight ? '#1d1d1d' : '#f3f3f3'}>
        <h1>Hello, I'm Anesu 👋</h1>
        <p>I'm a Front End Web Developer, fan of Marvel comics, Family guy and random music listener.</p>
        <img src={!isLight ? './gifs/white.gif' : './gifs/black.gif'} alt="" />
    </Wrapper>
  )
}

export default Banner