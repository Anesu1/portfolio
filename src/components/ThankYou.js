import React from 'react';
import { BsChevronLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from "react-redux";

const Wrapper = styled.section`
padding:5%;
height:100vh;
background:${props => props.bgColor};
display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    h1{
        font-family:${props => props.theme.fam.semibold};
        font-size:30px;
        color:${props => props.color};
        @media(min-width:768px){
            font-size:50px;
        }
    }
    .link{
    text-decoration:none;
    color:${props => props.color};
    font-family:${props => props.theme.fam.semibold};
    display:flex;
    align-items:center;
    margin-bottom:50px;
    font-size:20px;
    svg{
      margin-right:20px;
    }
  }
  
   
  
`

function ThankYou() {
    const isLight = useSelector((state) => state.theme.isLight);
  return (
    <Wrapper
    bgColor={isLight ? 'rgba(243, 243, 243, 0.7)' : "rgba(0, 0, 0, 0.8)"}
      color={isLight ? "#000000" : "#ffffff"}
    >
        <Link to="/" className='link'> <BsChevronLeft /> Back Home</Link>
        <div className="text">
            <h1>Form Received</h1>
        </div>
        
        
    </Wrapper>
  )
}

export default ThankYou