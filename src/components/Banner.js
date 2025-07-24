import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import resume from '../Anesu Ndoro.pdf'

const Wrapper = styled.section`
  transition: all 0.7s ease;
  padding: 0 5%;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  @media (min-width: 992px) {
    padding: 0 10%;
  }
  .text {
    h1 {
      font-family: ${(props) => props.theme.fam.bold};
      font-size: 28px;
      color: ${(props) => props.theme.color.blue};
      margin-bottom: 50px;
      padding-top: 25%;
      @media (min-width: 768px) {
        font-size: 50px;
        padding-top: 15%;
      }
    }
    p {
      color: ${(props) => props.color};
      font-family: ${(props) => props.theme.fam.regular};
      font-size: 36px;
      line-height: 1.5;
      max-width: 850px;
      @media (min-width: 768px) {
        font-size: 45px;
      }
    }
  }
  .image-wrapper {
    img {
      width: 400px;
      height: 400px;
      object-fit: contain;
      border-radius: 50%;
    }
  }
  a{
    background: transparent;
    border:1px solid ${props => props.theme.color.blue};
    color:${props => props.theme.color.blue};
    padding:15px 40px;
    border-radius: 6px;
    margin-top: 20px;
    display: inline-block;
    text-decoration: none;
    transition: all 0.5s ease;
    &:hover{
      background: ${props => props.theme.color.blue};
      color:#fff;
    }
  }
`;

function Banner() {
  const isLight = useSelector((state) => state.theme.isLight);
  return (
    <Wrapper
      bgColor={isLight ? "rgba(243, 243, 243, 0.7)" : "rgba(29, 29, 29, 0.8)"}
      color={isLight ? "#1d1d1d" : "#f3f3f3"}
    >
      <div className="text">
        <h1>Hello, I'm Anesu 👋</h1>
        <p>
          I'm a Front End Web Developer, fan of Marvel comics, Family guy and
          random music listener.
        </p>
        <a href={resume} download>Get my resume</a>
      </div>
      <div className="image-wrapper">
        <img src="./dark.gif" alt="" />
      </div>
    </Wrapper>
  );
}

export default Banner;