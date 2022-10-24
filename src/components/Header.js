/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { linkClicked, openMenu } from '../redux/menuSlice';
import { changeTheme } from '../redux/themeSlice';

const Wrapper = styled.header`
    padding:20px 0;
    display:flex;
    justify-content:space-between;
    align-items:center;
    transition:all 0.7s ease;
    position:absolute;
    width:100%;
    background:transparent;
    h3{
            color:${props => props.color};
            transition:all 0.7s ease;
            font-family:${props => props.theme.fam.semibold};
            font-size:20px;
            position:relative;
            z-index:5;
            margin-left:5%;
            @media (min-width:992px) {
                font-size:25px;
                margin-left:10%;
            }
    }
    .mobile{
        display:block;
        @media (min-width:768px) {
            display:none;
        }
    }
    .large{
        display:block;
        @media (max-width:767px) {
            display:none;
        }
    }
    .menu{
        @media(min-width:992px){
                margin-right:5%;
            }
        .btn{
            background:none;
            border:none;
            color:${props => props.color};
            font-family:${props => props.theme.fam.semibold};
            font-size:20px;
            transition:all 0.7s ease;
            position:relative;
            z-index:5;
            transform:translateX(-5%);
            @media(min-width:768px){
                display:none;
            }
        }
        .menu-inner{
            position:absolute;
            top:0;
            transition:all 0.7s ease;
            right:0;
            width:100%;
            height:100vh;
            display:flex;
            flex-direction:column;
            justify-content: flex-end;
            align-items: flex-end;
            z-index:2;
            background:${props => props.bgColor};
            max-width:0;
            overflow-x:hidden;
            @media(min-width:768px){
                max-width:unset;
                flex-direction:row;
                height:max-content;
                position:relative;
                background:transparent;
            }
            li{
                a{
                    color:${props => props.color};
                    text-decoration: none;
                    font-family:${props => props.theme.fam.bold};
                    display:block;
                    padding:20px;
                    width:max-content;
                    @media(min-width:768px){
                padding:10px 15px;
            }
                }
                &:last-child{
                    padding:5%;
                    margin-bottom:50px;
                    @media (min-width:768px) {
                        margin:0;
                    }
                    button{
                        border-radius:5px;
                    width:max-content;
                    border:1px solid ${props => props.color};
                    color:${props => props.color};
                    background:unset;
            font-family:${props => props.theme.fam.semibold};
            font-size:20px;
            transition:all 0.7s ease;
                    }
                    @media(min-width:768px){
                padding:5px 1%;
            }
                }
            }
        }
        .open{
            max-width:100%;
        }
    }

`

function Header() {
   const isLight = useSelector((state)=> state.theme.isLight);
   const isMenuOpen = useSelector((state)=> state.menu.isMenuOpen);
    const dispatch = useDispatch()

  return (
    <Wrapper className={!isLight ? 'dark' : 'light'} bgColor={isLight ? 'rgba(243, 243, 243, 0.6)' : 'rgba(29, 29, 29, 0.4)'} color={isLight ? '#1d1d1d' : '#f3f3f3'}>
        <h3 className='mobile'>
            a.n
        </h3>
        <h3 className='large'>
            anesu.ndoro
        </h3>
        <div className="menu">
            <button className='btn' onClick={()=> dispatch(openMenu())}>.{!isMenuOpen ? 'openMenu' : 'close'}()</button>
            <ul className={isMenuOpen ? 'menu-inner open' : 'menu-inner'}>
                <li onClick={()=> dispatch(linkClicked())}>
                    <a href="#work">.work()</a>
                </li>
               
                <li onClick={()=> dispatch(linkClicked())}>
                    <a href="#tools">.tools()</a>
                </li>
                <li onClick={()=> dispatch(linkClicked())}>
                    <a href="#contact">.contact()</a>
                </li>
                <li>
                    <button onClick={()=> dispatch(changeTheme())}>{isLight ? 'Dark' : 'Light'} Theme</button>
                </li>
            </ul>
        </div>
    </Wrapper>
  )
}

export default Header