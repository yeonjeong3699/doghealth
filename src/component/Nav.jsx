import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo_white from "../images/logo_white.png";

export default function Nav() {
    const [scroll, setScroll] = useState(0);

    const scrollMove = () => {
        setScroll(window.scrollY);
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollMove);
    })

    return (
        <HeaderConatiner className={scroll > 0 ? 'container on' : 'container'}>
            <h1><Link to='/'><img src={logo_white} alt="견강검진" /></Link></h1>

            <nav>
                <ul className="gnb">
                    <li><Link to='/health'>자가진단</Link></li>
                    <li><Link to='/find-hospital'>병원찾기</Link></li>
                    <li><Link to=''>커뮤니티</Link></li>
                </ul>
            </nav>
        </HeaderConatiner>
    )
}

const HeaderConatiner = styled.div`
    width: 100%;
    height: 110px;
    padding-left: 60px;
    box-sizing: border-box;
    border-bottom: solid 1px rgba(255, 255, 255, 0.5);
    display: flex;
    align-items: center;
    gap: 95px;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    z-index: 999;
    
    nav{
        .gnb{
            display: flex;
            gap: 80px;
            li{
                a{
                    font-family: 'NexonGothicMedium';
                    font-size: 25px;
                    color: white;
                    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
                }
            }
        }
    }
`