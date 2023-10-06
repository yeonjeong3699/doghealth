import React from "react";
import styled from "styled-components";

export default function Member() {
    return (
        <MemberContainer className="container">
            <h2>회원가입</h2>

            <form action="" method="">
                <div className="input-box">
                    <label for="memberName">이름</label>
                    <input type="text" id="memberName" placeholder="이름을 입력해 주세요." required />
                </div>

                <div className="input-box">
                    <label for="memberId">아이디</label>
                    <input type="text" id="memberId" placeholder="아이디를 입력해 주세요." required />
                </div>

                <div className="input-box">
                    <label for="memberPw">비밀번호</label>
                    <input type="password" id="memberPw" placeholder="비밀번호를 입력해 주세요." required />
                </div>

                <div className="input-box">
                    <label for="checkPw">비밀번호 확인</label>
                    <input type="password" id="checkPw" placeholder="비밀번호를 다시 입력해 주세요." required />
                </div>
                <button className="member-btn">회원가입</button>
            </form>
        </MemberContainer>
    )
}

const MemberContainer = styled.div`
    padding: 200px 0px 100px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 46px;

    h2{
        font-family: 'Cafe24Ssurround';
        font-size: 45px;
        color: #a5a5a5;
        text-align: center;
    }

    form{
        .input-box{
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 26px;
            margin-bottom: 16px;

            label{
                font-family: 'NexonGothicLight';
                font-weight: 900;
                font-size: 20px;
                color: #708135;
            }

            input{
                width: 420px;
                height: 42px;
                border: solid 1px #dedede;
                font-family: 'NexonGothicRegular';
                font-size: 18px;
                text-indent: 10px;
            }
        }

        .member-btn{
            display: block;
            width: 100%;
            height: 60px;
            border: none;
            background-color: #c7d78e;
            font-family: 'NexonGothicMedium';
            font-size: 26px;
            color: white;
            margin-top: 40px;
            cursor: pointer;
        }
    }
`