/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import styled from "styled-components";
import { AiOutlineLink } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { useSelector } from "react-redux";

const Wrapper = styled.div`
width:100%;
overflow:hidden;
margin-bottom: 30px;
    .showpic{
        height: 200px;
        max-height:200px;
  width: 100%;
 
  background: linear-gradient(to bottom,#0000002f,#0000002f), url("${(props) => props.bgImage}");
  background-size: cover;
  transition: all 0.7s ease;
  background-position: center center;
  position: relative;
  border-radius: 10px;
  margin-bottom:10px;
  transitioni:all 0.5s ease;
  overflow:hidden;
    }
  @media (min-width: 768px) {
    width: 48%;

  }
  @media (min-width: 992px) {
    width: 30%;
  }
  &:hover {
   
    .text {
      transform: scale(1);
      opacity: 1;
    }
  }
  .text {
    position: absolute;
    /* top:50%;
        left:50%; */
    transition: all 0.7s ease;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 10px;
    transform: scale(0);
    background: #000000d3;
    display: flex;
    opacity: 0;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
   
  }
   h3 {
      color: ${(props) => props.bgColor};
      font-family: ${(props) => props.theme.fam.bold};
      font-size: 15px;
      margin-bottom:20px;
      @media (min-width: 992px) {
        font-size: 15px;
      }
    }
    .details{
        display:flex;
        justify-content:space-between;
        h3{
            flex:1;
        }
    }
    .inner {
      
      
      display:flex;
      justify-content:space-between;
      

      a {
        color: ${(props) => props.bgColor};
        text-decoration: none;
        transition: all 0.3s ease;
        height:max-content;
        display:flex;
        
        font-size:11px;
        /* border:1px solid ${props => props.bgColor}; */
        align-items:flex-end;
        
        justify-content:space-between;
        
        span{
            width:max-content;
            margin-right:5px;
            font-family:${props => props.theme.fam.semibold};
        }
        &:hover {
          color: ${(props) => props.theme.color.blue};
        }
        &:first-child {
          margin-right:20px;
        }

        svg {
          height: 15px;
          width: 15px;
          transition: all 0.3s ease;
        }
      }
    }
`;

function Project({ text, github, sitelink, bgImage,i }) {
  const isLight = useSelector((state) => state.theme.isLight);
  return (
    <Wrapper
      bgImage={bgImage}
      bgColor={!isLight ? "rgba(255, 255, 255, 0.7)" : "rgba(0, 0, 0, 0.8)"}
      color={!isLight ? "#000000" : "#ffffff"}
      className="single"
    >
      <div className="showpic"></div>
      <div className="details">
        <h3>{text}</h3>
      <div className="inner">
        <a target="_blank" href={github}>
            <span>Code</span>
          <FaGithub />
        </a>
        <a target="_blank" href={sitelink}>
            <span>Visit</span>
          <AiOutlineLink />
        </a>
      </div>
      </div>
      
    </Wrapper>
  );
}

export default Project;
