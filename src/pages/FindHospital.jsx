import axios from "axios";
import React from "react";
import { Map, MapMarker, ZoomControl } from "react-kakao-maps-sdk";
import styled from "styled-components";

export default function FindHospital() {
    const instance = axios.create({
        baseURL : 'http://www.localdata.go.kr/platform/rest/GR0/openDataApi?authKey=',
        params : {
            serviceKey : process.env.REACT_APP_PUBLIC_DATA_KEY,
            language : 'ko-KR'
        }
    })

    return (
        <FindHospitalContainer className="container">
            <Map
                className="kakao-map"
                center={{ lat: 33.5563, lng: 126.79581 }}
                style={{ width: '800px', height: '600px' }}
                level={3}
            >
                <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}> </MapMarker>
                <ZoomControl position={"RIGHT"} />
            </Map>
        </FindHospitalContainer>
    )
}

const FindHospitalContainer = styled.div`
    padding-top: 110px;
    box-sizing: border-box;

    .kakao-map{
        width: 500px;
        height: 500px;
    }
`