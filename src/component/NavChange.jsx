import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo_white from "../images/logo_white.png";
import { BsPersonCircle } from "react-icons/bs"


export default function Nav() {
    const [scroll, setScroll] = useState(0);

    const scrollMove = () => {
        setScroll(window.scrollY);
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollMove);
    })


    return (
        <HeaderConatiner className={scroll > 0 ? 'container navChangeOn' : 'container'}>
            <div className="header-left">
                <h1><Link to='/'></Link></h1>

                <nav>
                    <ul className="gnb">
                        <li><Link to='/health'>자가진단</Link></li>
                        <li><Link to='/find-hospital'>병원찾기</Link></li>
                        <li><Link to='/community'>커뮤니티</Link></li>
                    </ul>
                </nav>
            </div>

            <Link to='/login' className="login"><BsPersonCircle /></Link>
        </HeaderConatiner >
    )
}

const HeaderConatiner = styled.div`
    width: 100%;
    height: 110px;
    padding: 0px 60px;
    box-sizing: border-box;
    border-bottom: solid 1px rgba(255, 255, 255, 0.5);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    z-index: 999;
    transition: 0.5s;
    background-color: #c7d78e;

    .header-left{
        display: flex;
        align-items: center;
        gap: 95px;

        h1{
            a{
                display: block;
                width: 242px;
                height: 46px;
                background: url(${logo_white}) no-repeat;
            }
        }

        nav{
            .gnb{
                display: flex;
                gap: 80px;
                li{
                    a{
                        font-family: 'NexonGothicMedium';
                        font-size: 25px;
                        color: white;
                    }
                }
            }
        }
    }

    .login{
        font-size: 32px;
        color: white;
    }
`