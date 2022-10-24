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

  h2 {
    font-size: 15px;
    font-family: ${(props) => props.theme.fam.regular};
    color: #898989;
    margin-top: 20px;
    margin-bottom: 20px;
    line-height:30px;
  }
  p{
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
      <h2>// Here are some of the tools I have been working with</h2>
      <div className="inner">
        <div className="inner-div">
          <h2>// Code Editor</h2>
          <p>Visual Studio Code</p>

          <h2>// Local Development Enviroments</h2>
          <p>Xammp</p>
          <p>Postgres</p>

          <h2>// Git Clients</h2>
          <p>Github</p>
          <p>Git</p>

          <h2>// Frontend Frameworks</h2>
          <p>Bootstrap</p>
          <p>Material UI</p>

          <h2>// Web App Frameworks</h2>
          <p>ReactJS</p>
          <p>NextJS</p>
          <p>GraphQL</p>
        </div>
        <div className="inner-div">
          <h2>// Package Managers</h2>
          <p>Node Package Manager</p>
          <p>Yarn</p>

          <h2>// API and Testing Tool</h2>
          <p>Postman</p>

          <h2>// Image Optimization Tool</h2>
          <p>Tiny PNG</p>

          <h2>// Other Tools</h2>
          <p>CodePen</p>
          <p>Stack Overflow</p>
          <p>Google Lighthouse</p>
          <p>Flask</p>
          <p>Sass</p>

          <p>Jquery</p>
        </div>
      </div>

      <div className="outer">&lt;wrapper&gt; </div>
    </Wrapper>
  );
}

export default Tools;
