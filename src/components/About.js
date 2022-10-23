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
    font-size: 20px;
    font-family: ${(props) => props.theme.fam.regular};
    color: ${(props) => props.theme.color.black};
    margin-top: 30px;
    margin-bottom: 50px;
  }
  .comment {
    font-size: 20px;
    font-family: ${(props) => props.theme.fam.regular};
    color: #898989;
    margin-top: 30px;
    margin-bottom: 50px;
  }
  .inner {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1100px;
  }
`;

function About() {
  const isLight = useSelector((state) => state.theme.isLight);
  return (
    <Wrapper
      bgColor={isLight ? "#f3f3f3" : "#000"}
      color={isLight ? "#000000" : "#f3f3f3"}
      id="tools"
    >
      <div className="outer">&lt;wrapper id="about"&gt; </div>
      <p>
        I'm a FrontEnd Developer who's been building industry utilized
        applications since July 2021. Since then, I've worked in
        improving my skills with ReactJS and styled-components on several projects and few collaborations.
      </p>
      <p className="comment">
        // Keep reading for more details on my experience ⬇️
      </p>
      <h3>0. Uncommon.org</h3>
      <h5>Student</h5> <br />
      <p>2020</p>
      <p>
        Soon after High School I was recruited to be one of the students and was taught the fundamentals of web development.
        In a few months I was a web responsive guru.
      </p>
      <h3>1. Uncommon.org</h3>
      <h5>Senior Tech Manager</h5> <br />
      <p>2020</p>
      <p>
        After pursuing a degree in commerce for 2 years, I came across the world
        of software and technology and immediately shifted in that direction. I
        transferred in to the Computer Science program with a specialty in
        Software Systems and studied their the next 3 years.
      </p>
      <div className="outer">&lt;wrapper&gt; </div>
    </Wrapper>
  );
}

export default About;
