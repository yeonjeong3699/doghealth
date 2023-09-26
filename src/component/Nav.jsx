import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo_white from "../images/logo_white.png";

export default function Nav() {
    return (
        <HeaderConatiner>
            <div className="header-wrapper inner">
                <h1><Link to='/'><img src={logo_white} alt="견강검진" /></Link></h1>

                <nav className="gnb-wrapper">
                    <ul className="gnb">
                        <li><Link to='/health'>자가진단</Link></li>
                        <li><Link to='/find-hospital'>병원찾기</Link></li>
                        <li><Link to=''>커뮤니티</Link></li>
                    </ul>
                </nav>
            </div>
        </HeaderConatiner>
    )
}

const HeaderConatiner = styled.div`
    width: 100%;
    height: 110px;
    border-bottom: solid 1px rgba(255, 255, 255, 0.5);
    display: flex;
    align-items: center;
    position: fixed;
    z-index: 999;
    .header-wrapper{
        padding: 0px 60px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        gap: 95px;
        .gnb-wrapper{
            .gnb{
                display: flex;
                gap: 75px;
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
    }

`