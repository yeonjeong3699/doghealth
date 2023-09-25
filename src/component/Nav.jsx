import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Nav(){
    return(
        <HeaderConatiner>
            <div className="logo">
                <p className="title">견강검진</p>
            </div>

            <nav className="gnb-wrapper">
                <ul className="gnb">
                    <li><Link to=''>자가진단</Link></li>
                    <li><Link to=''>병원찾기</Link></li>
                    <li><Link to=''>커뮤니티</Link></li>
                </ul>
            </nav>

            <Link to=''>로그인</Link>
        </HeaderConatiner>
    )
}

const HeaderConatiner = styled.div`
    width: 100%;
    height: 110px;
    padding: 0px 60px;
    border-bottom: solid 1px rgba(255, 255, 255, 0.5);
    display: flex;
    
    .logo{
        .title{
            font-family: 'RixInooAriDuriR';
            font-size: 45px;
        }
    }

    .gnb-wrapper{
        .gnb{
            display: flex;
            li{
                a{
                    font-family: 'NexonGothicRegular';
                    font-size: 20px;
                }
            }
        }
    }
`