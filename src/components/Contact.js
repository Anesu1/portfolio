/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { FiLinkedin } from "react-icons/fi";
import { FaWhatsapp, FaGithub } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  return (
    <Wrapper
      bgColor={isLight ? "rgba(243, 243, 243, 0.7)" : "rgba(29, 29, 29, 0.8)"}
      color={isLight ? "#000000" : "#f3f3f3"}
    >
      <div className="outer">&lt;wrapper id="contact"&gt; </div>
      <div className="inner">
        <div className="left">
          <p>// You can reach out to me anytime 😉</p>
          <a href="https://www.linkedin.com/in/anesu-ndoro-a89127209/?lipi=urn%3Ali%3Apage%3Aprofile_common_profile_index%3Beb9ccc4e-69e1-4690-a010-705924e61a2b">
            <FiLinkedin />
          </a>
          <a href="https://wa.me/263783977875">
            <FaWhatsapp />
          </a>
          <a href="https://github.com/Anesu1">
            <FaGithub />
          </a>
          <p>
            <a
              href="https://export-download.canva.com/oeRFQ/DAE-ULoeRFQ/63/0-38780810706.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20221022%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20221022T041836Z&X-Amz-Expires=77296&X-Amz-Signature=a89ef86efae9fa086fc43778172f5502f79e3570a29a4834b1980bb3e5eeee84&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27Anesu%2520Ndoro.pdf&response-expires=Sun%2C%2023%20Oct%202022%2001%3A46%3A52%20GMT"
              download="Anesu Ndoro CV"
            >
              Download My CV
            </a>
          </p>
        </div>

        <form
          action="https://formsubmit.co/64bf2f93900008248c4128f23b209e3f"
          method="POST"
          onSubmit={(e) => {
            e.preventDefault();
            navigate('/submitted', {replace: true});
          }}
        >
          <input type="hidden" name="_next" value={'//'}></input>
          <input type="hidden" name="_captcha" value="false"></input>
          <input type="hidden" name="_template" value="table"></input>
          <div className="top">
            <TextField
              id="firstname"
              variant="standard"
              name="firstname"
              label="First Name"
            />
            <TextField
              id="email"
              variant="standard"
              name="email"
              label="Email Address"
            />
          </div>
          <TextField
            id="message"
            name="message"
            variant="standard"
            label="Message"
            multiline
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
