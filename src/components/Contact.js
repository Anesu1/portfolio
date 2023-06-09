/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { FiLinkedin } from "react-icons/fi";
import { FaWhatsapp, FaGithub } from "react-icons/fa";
import mycv from '../Anesu Ndoro.pdf'

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
    color: #898989;
    margin-top: 30px;
    width: 100%;
  }
  .inner {
    @media (min-width: 992px) {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      form {
        width: 45%;
      }
    }
    .left {
      margin-top: 50px;
      display: flex;
      flex-wrap: wrap;
      @media (min-width: 992px) {
        width: 45%;
        margin-top: 0;
      }
      p {
        margin-bottom: 20px;
        line-height: 30px;
        a {
          text-decoration: none;
          color: ${(props) => props.theme.color.blue};
        }
      }
      a {
        margin-right: 20px;
      }
      svg {
        height: 45px;
        width: 45px;
        color: ${(props) => props.color};
      }
    }
    form {
      margin-top: 20px;
      .top {
        @media (min-width: 768px) {
          display: flex;
          justify-content: space-between;
          .MuiFormControl-root {
            width: 48%;
          }
        }
      }
      .MuiFormControl-root {
        width: 100%;
        margin-bottom: 20px;
        input,
        label {
          color: ${(props) => props.color} !important;
          font-family: ${(props) => props.theme.fam.regular} !important;
        }
        .MuiInputBase-root {
          &:before {
            border-bottom: 1px solid ${(props) => props.color} !important;
          }
        }
        [data-shrink="true"] {
          color: ${(props) => props.theme.color.blue} !important;

          &:after {
            border: ${(props) => props.theme.color.blue};
          }
        }
      }
      button {
        width: 100%;
        height: 40px;
        font-family: ${(props) => props.theme.fam.semibold};
        border: none;
        margin-bottom: 30px;
        background: ${(props) => props.color};
        color: ${(props) => props.bgColor};
        background-filter: blur(5px);
        text-transform: uppercase;
      }
    }
  }
`;

function Contact() {
  const isLight = useSelector((state) => state.theme.isLight);
  return (
    <Wrapper
      bgColor={isLight ? "rgba(243, 243, 243, 0.7)" : "rgba(29, 29, 29, 0.8)"}
      color={isLight ? "#000000" : "#f3f3f3"}
      id="contact"
    >
      <div className="outer">&lt;wrapper id="contact"&gt; </div>
      <div className="inner">
        <div className="left">
          <p>// You can reach out to me anytime 😉</p>
          <a aria-label="Linkedin profile" href="https://www.linkedin.com/in/anesu-ndoro-a89127209">
            <FiLinkedin />
          </a>
          <a aria-label="Whatsapp Chat" href="https://wa.me/263783977875">
            <FaWhatsapp />
          </a>
          <a aria-label="Github profile" href="https://github.com/Anesu1">
            <FaGithub />
          </a>
          <p>
            <a
              href={mycv}
              download="Anesu Ndoro CV"
            >
              Download My CV
            </a>
          </p>
        </div>

        <form
          action="https://formsubmit.co/4ef6cdbf411f48a3ab31461a0162bf26"
          method="POST"
          
        >
           <input
            type="hidden"
            name="_next"
            value="https://anesu-ndoro.web.app/submitted"
          />
        
          <input type="hidden" name="_template" value="table"></input>
          <div className="top">
            <TextField
              id="firstname"
              variant="standard"
              name="firstname"
              label="First Name"
              required
            />
            <TextField
              id="email"
              variant="standard"
              name="email"
              label="Email Address"
              required
            />
          </div>
          <TextField
            id="message"
            name="message"
            variant="standard"
            label="Message"
            multiline
            required
            rows={3}
          />

          <button type="submit">Send Message</button>
        </form>
      </div>

      <div className="outer">&lt;wrapper&gt; </div>
    </Wrapper>
  );
}

export default Contact;
