import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import {BsChevronLeft} from 'react-icons/bs';
import { useSelector } from "react-redux";
import styled from 'styled-components';
import {projects} from '../components/data';
import { shuffle } from 'lodash';
import Project from '../styled/Project';


const Wrapper = styled.section`
  background:${props => props.bgColor};
  padding:0 5%;
  padding-top:10%;
  padding-bottom:5%;
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
  .projects-inner{
    width:100%;
    @media(min-width:768px){
      display:flex;
      flex-wrap:wrap;
      justify-content:space-between;
    }
    .single{
      @media(min-width:768px){
        width:30%;
        .showpic{
          width:100%;
        }
      }
    }
    h3 {
      color: ${(props) => props.color};
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
        color: ${(props) => props.color};
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
  }
`

function Projects() {
  const isLight = useSelector((state) => state.theme.isLight);
  const [list, setList] = useState([]);

  useEffect(()=>{
    setList(shuffle(projects))
  },[])

  return (
    <Wrapper bgColor={isLight ? "rgba(243, 243, 243, 0.7)" : "rgba(29, 29, 29, 0.8)"}
    color={isLight ? "#000000" : "#f3f3f3"} >
      <Link to="/" className='link'> <BsChevronLeft /> Back Home</Link>
      <div className="projects-inner">
        {list.map((item, i)=>{
          return <Project key={i} text={item.webName} github={item.gitLink} sitelink={item.siteLink} bgImage={item.bgImage} />
        })}
      </div>
    </Wrapper>
  )
}

export default Projects