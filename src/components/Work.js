/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Project from "../styled/Project";
import { projects } from "./data";

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
  .projects{
    padding:5% 0;
    display:flex;
    justify-content: space-between;
    flex-wrap:wrap;
  }
  p{
    font-size:20px;
    font-family:${props => props.theme.fam.regular};
    color:#898989;
    margin-top:30px;
  }
  .link{
    padding: 20px 0;
    display: block;
    width: max-content;
    text-decoration:none;
    transition:all 0.7s ease;
    font-size:20px;
    margin-left:auto;
    font-family:${props => props.theme.fam.semibold};
    color:${props => props.color};
    &:hover{
      color:${props => props.theme.color.blue};
    }
  }
`;



function Work() {
  const isLight = useSelector((state) => state.theme.isLight);
  return (
    <Wrapper
      bgColor={isLight ? "rgba(243, 243, 243, 0.7)" : "rgba(29, 29, 29, 0.8)"}
      color={isLight ? "#000000" : "#f3f3f3"}
      id="work"
    >
      <div className="outer">&lt;wrapper id="work"&gt; </div>
      <p>// Here are some of the projects that I built with Reactjs</p>
      <div className="projects">
        {projects.slice(0,6).map((item, i)=>{
          return <Project key={i} text={item.webName} github={item.gitLink} sitelink={item.siteLink} bgImage={item.bgImage} />
        })}
        
      </div>
      <Link className="link" to="/projects">See more projects...</Link>
      <div className="outer">&lt;wrapper&gt; </div>
    </Wrapper>
  );
}

export default Work;
