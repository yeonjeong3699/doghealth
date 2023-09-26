import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { VscLinkExternal } from "react-icons/vsc"

//swiper
import Swiper from 'swiper';
import 'swiper/css';

export default function Section03() {
    const swiper = new Swiper('.swiper-container', {

    });

    return (
        <Section03Container className="inner">
            <h2 className="title">제목을 뭐라고 지어야 할까</h2>

            <Link to='/health'>
                VIEW MORE <VscLinkExternal />
            </Link>

            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">Slide 1</div>
                    <div className="swiper-slide">Slide 2</div>
                    <div className="swiper-slide">Slide 3</div>
                </div>

                <div className="swiper-pagination"></div>

                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>

                <div className="swiper-scrollbar"></div>
            </div>

        </Section03Container>
    )
}

const Section03Container = styled.div`
    height: 840px;

    .swiper-container{
        overflow: hidden;
    }
`