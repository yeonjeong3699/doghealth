import React from "react";
import Slide from "../component/Slide";
import Section01 from "../component/Section01";
import Section02 from "../component/Section02";
import Section03 from "../component/Section03";
import Section04 from "../component/Section04";

export default function Main(){
    return(
        <>
            <Slide />
            <Section01 />
            <Section02 />
            <Section03 />
            <Section04 />
        </>
    )
}