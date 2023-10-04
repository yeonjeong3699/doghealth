import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { HiHome } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import sec03_02 from "../images/sec03_02.jpg";

export default function Post() {
    return (
        <PostContainer className="container">
            <div className="breadcrumb">
                <Link to='/health'><HiHome className="home" />자가진단</Link>
                <IoIosArrowForward className="icon" />
                <Link to='/health'>카테고리</Link>
                <IoIosArrowForward className="icon" />
                <Link to='/health'>키워드</Link>
                <IoIosArrowForward className="icon" />
                <Link to='/health'>제목제목제목제목제목제목제목</Link>
            </div>

            <div className="title-box">
                <p className="title">제목제목제목제목제목제목제목</p>
                <p className="date">2023년 00월 00일</p>
            </div>

            <img src={sec03_02} />

            <div className="text-box">
                <p className="title">원인</p>
                <p className="text">
                    가장 큰 원인은 유전 때문이라고 합니다.<br />
                    골격과 근육이 선천적으로 약하게 태어난 경우이며
                    포메라니안, 치와와, 말티즈 같은 소형견들이 발병률이 높습니다.
                </p>
            </div>

            <div className="text-box">
                <p className="title">증상</p>
                <p className="text">
                    · 갑자기 절뚝거리며 걷는다. <br />
                    · 무릎에서 뚝뚝 소리가 난다. <br />
                    · 슬개골 탈구가 발생한 다리를 들고 걷는다. <br />
                    · 앉았을 때 무릎이 바깥쪽으로 향해있다. <br />
                    · 걸음걸이가 불규칙하게 걷는다. <br />
                </p>
            </div>

            <div className="text-box">
                <p className="title">위험성</p>
                <p className="text">
                    슬개골 탈구는 진행 정도, 증상의 심각성에 따라 1기부터 4기까지 4단계로 나뉘어집니다.<br />
                    방치하면 관절염이나 십자인대파열로 이어질 수 있어 꾸준한 관리가 꼭 필요합니다.<br />

                    <br />· 슬개골 탈구 1기<br />
                    슬개골에 힘을 가하면 탈구되었다 제자리로 돌아갑니다.<br />
                    탈구 시 이탈 범위가 적고 자주 탈구되지는 않지만, 가끔 다리를 들고 걸을 수 있습니다.<br />

                    <br />· 슬개골 탈구 2기<br />
                    슬개골에 힘을 가해 탈구시켰을 때, 다시 제자리로 돌아가지 않거나, ‘딱’ 소리를 내며 돌아갑니다.<br /> 강아지가 아파하거나, 앉았다 일어날 때 힘들어할 수 있습니다.<br />
                    또한, 관절이 붓거나 열감이 나타나는 등 관절염 증상이 나타나는 시기이기도 합니다.<br />
                    하지만 부종이나 열감이 없어도 통증이 있거나 강아지가 걷기 힘들어 보인다면 관절에 염증이 생겼다는 말이니 바로 진찰을 받아야 합니다.<br />

                    <br />· 슬개골 탈구 3기<br />
                    슬개골이 항상 탈구되어 있습니다. 하지만 힘을 가하면 슬개골이 제자리로 돌아갑니다.<br />
                    관절염이 심해지고, 강아지 다리가 바깥쪽으로 휘어지기도 합니다.<br />

                    <br />· 슬개골 탈구 4기<br />
                    슬개골이 완전히 탈구되어 무릎을 지탱해주지 못합니다.<br />
                    힘을 가해도 제자리로 돌아가지 않고, 아파서 다리를 계속 구부리고 있기도 합니다.<br />
                    걸으면 통증이 심해져, 강아지가 걷지 않으려 할 수도 있습니다.
                </p>
            </div>

            <div className="text-box">
                <p className="title">예방법</p>
                <p className="text">
                    · 꾸준한 산책으로 근육 강화하기<br />
                    · 미끄럼 방지 패드 또는 카펫 활용하기<br />
                    · 비만이 되지 않도록 적정 체중 유지하기<br />
                    · 발바닥 털, 발톱 꾸준히 관리하기<br />
                    · 두발 서기, 점프를 하지 않도록 교육하기<br />
                    · 높은 곳에서 뛰어내리지 못하게 하기<br />
                    · 주기적인 검진으로 확인하기<br />
                </p>
            </div>

        </PostContainer>
    )
}

const PostContainer = styled.div`
    padding-top: 110px;
    padding: 110px 360px 150px;
    box-sizing: border-box;

    .breadcrumb{
        display: flex;
        align-items: center;
        gap: 4px;
        margin-top: 100px;

        & > a{
            font-family: 'NexonGothicLight';
            font-weight: 900;
            font-size: 18px;
            color: #d1d1d1;
            margin-top: 2px;

            .home{
                font-size: 20px;
                vertical-align: middle;
                margin-right: 3px;
            }
        }
        .icon{
            font-size: 18px;
            color: #d1d1d1;
        }

        
    }

    .title-box{
        margin-bottom: 65px;
        .title{
            font-family: 'NexonGothicBold';
            font-size: 50px;
            color: #222222;
            margin: 35px 0px 15px;
        }
        .date{
            font-family: 'NexonGothicMedium';
            font-size: 20px;
            color: #747474;
        }
    }

    img{
        width: 100%;
        margin-bottom: 65px;
    }

    .text-box{
        margin-bottom: 50px;

        & > .title{
            font-family: 'NexonGothicBold';
            font-size: 32px;
            color: #b0c36d;
            margin-bottom: 14px;
        }

        & > .text{
            font-family: 'NexonGothicLight';
            font-weight: 900;
            font-size: 22px;
            color: #333333;
            line-height: 1.4;
        }

        &:last-of-type{
            margin-bottom: 0px;
        }

    }
`