import React from "react";
import styled from "styled-components";
import logo_footer from "../images/logo_footer.png";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <FooterContainer className="container">
            <div className="footer-top">
                <img src={logo_footer} />

                <ul>
                    <li><Link to=''>개인정보처리방침</Link></li>
                    <li className="line"><Link to=''>이용약관</Link></li>
                    <li><Link to=''>이메일무단수집거부</Link></li>
                </ul>
            </div>

            <div className="text-box">
                <p className="text">회사명: 견강검진</p>
                <span className="text">연락처: 02-0000-0000 </span>
                <span className="text line">이메일: doghealyh@doghealth.co.kr</span>
            </div>
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
    background-color: #1a1a1a;
    padding: 60px;
    box-sizing: border-box;
    .footer-top{
        display: flex;
        justify-content: space-between;
        align-items: end;
        margin-bottom: 24px;
        img{
            width: 170px;
            height: 32px;
            opacity: 40%;
        }
        ul{
            display: flex;
            gap: 20px;
            li{
                position: relative;
                a{
                    font-family: 'NexonGothicRegular';
                    font-size: 16px;
                    color: rgba(255, 255, 255, 0.4);
                }
            }
            .line{
                &:before{
                    content: "";
                    display: block;
                    width: 1px;
                    height: 14px;
                    background-color: rgba(255, 255, 255, 0.4);
                    position: absolute;
                    top: 2px;
                    left: -9px;
                }
                &:after{
                    content: "";
                    display: block;
                    width: 1px;
                    height: 14px;
                    background-color: rgba(255, 255, 255, 0.4);
                    position: absolute;
                    top: 2px;
                    right: -12px;
                }
            }
        }
    }
    .text-box{
        position: relative;
        p{
            margin-bottom: 6px;
        }
        span{
            margin-right: 16px;
        }
        .text{
            font-family: 'NexonGothicRegular';
            font-size: 18px;
            color: rgba(255, 255, 255, 0.4);
        }
        .line:before{
            content: "";
            display: block;
            width: 1px;
            height: 16px;
            background-color: rgba(255, 255, 255, 0.4);
            position: absolute;
            top: 24px;
            left: 195px;
        }
    }

`