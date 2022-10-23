/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Wrapper = styled.section`
  padding: 5%;
  background: ${(props) => props.bgColor};
  @media (min-width: 768px) {
    padding: 5% 10%;
  }
  .outer {
    font-size: 25px;
    color: ${(props) => props.theme.color.blue};
    font-family: ${(props) => props.theme.fam.bold};
    @media (min-width: 768px) {
      font-size: 40px;
    }
  }

  p {
    font-size: 15px;
    font-family: ${(props) => props.theme.fam.regular};
    color: #898989;
    margin-top: 20px;
    margin-bottom: 20px;
    line-height:30px;
  }
  li{
    color:${props => props.color};
    font-family: ${(props) => props.theme.fam.semibold};
    margin-bottom:10px;
    font-size:15px;
  }
  .inner {
    @media(min-width:768px){
      display:flex;
    flex-wrap:wrap;
    }
    
    max-width:1100px;
    margin-bottom:50px;
    .inner-div{
      @media(min-width:768px){
        width:50%;
      }
      
    }
  }
`;

function Tools() {
  const isLight = useSelector((state) => state.theme.isLight);
  return (
    <Wrapper
      bgColor={isLight ? "rgba(243, 243, 243, 0.7)" : "rgba(29, 29, 29, 0.8)"}
      color={isLight ? "#000000" : "#f3f3f3"}
      id="tools"
    >
      <div className="outer">&lt;wrapper id="tools"&gt; </div>
      <p>// Here are some of the tools I have been working with</p>
      <div className="inner">
        <div className="inner-div">
          <p>// Code Editor</p>
          <li>Visual Studio Code</li>

          <p>// Local Development Enviroments</p>
          <li>Xammp</li>
          <li>Postgres</li>

          <p>// Git Clients</p>
          <li>Github</li>
          <li>Git</li>

          <p>// Frontend Frameworks</p>
          <li>Bootstrap</li>
          <li>Material UI</li>

          <p>// Web App Frameworks</p>
          <li>ReactJS</li>
          <li>NextJS</li>
          <li>GraphQL</li>
        </div>
        <div className="inner-div">
          <p>// Package Managers</p>
          <li>Node Package Manager</li>
          <li>Yarn</li>

          <p>// API and Testing Tool</p>
          <li>Postman</li>

          <p>// Image Optimization Tool</p>
          <li>Tiny PNG</li>

          <p>// Other Tools</p>
          <li>CodePen</li>
          <li>Stack Overflow</li>
          <li>Google Lighthouse</li>
          <li>Flask</li>
          <li>Sass</li>

          <li>Jquery</li>
        </div>
      </div>

      <div className="outer">&lt;wrapper&gt; </div>
    </Wrapper>
  );
}

export default Tools;
