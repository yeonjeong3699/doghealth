import React from "react";
import styled from "styled-components";

export default function Member(){
    return(
        <MemberContainer className="container">
            회원가입
        </MemberContainer>
    )
}

const MemberContainer = styled.div`
    padding-top: 110px;
    box-sizing: border-box;
`