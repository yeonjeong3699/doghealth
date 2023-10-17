import React, { useState } from "react";
import { Map, MapMarker, ZoomControl, useMap } from "react-kakao-maps-sdk";
import styled from "styled-components";
import hospital from "../json/hopital.json";

export default function FindHospital() {
    const EventMarkerContainer = ({ position, content }) => {
        const map = useMap();
        const [isVisible, setIsVisible] = useState(false);

        return (
            <MapMarker
                position={position}
                onMouseOver={() => setIsVisible(true)}
                onMouseOut={() => setIsVisible(false)}
            >
                {isVisible && content}
            </MapMarker>
        )
    }

    return (
        <FindHospitalContainer className="container">
            <Map
                className="kakao-map"
                center={{ lat: 37.566535, lng: 126.9779692 }}
                style={{ width: '1600px', height: '800px' }}
                level={10}
            >
                {hospital.hospitalList.map((value) => (
                    <EventMarkerContainer
                        key={`EventMarkerContainer-${value.latlng.lat}-${value.latlng.lng}`}
                        position={value.latlng}
                        content={
                            <div className="content-wrapper">
                                <div className="content-box">
                                    <span className="infor-title">이름</span>
                                    <span className="infor">{value.title}</span>
                                </div>

                                <div className="content-box">
                                    <span className="infor-title">전화</span>
                                    <span className="infor">{value.tel}</span>
                                </div>

                                <div className="content-box">
                                    <span className="infor-title">주소</span>
                                    <span className="infor">{value.address}</span>
                                </div>
                            </div>
                        }
                    />
                ))}

                <ZoomControl position={"RIGHT"} />
            </Map>
        </FindHospitalContainer>
    )
}

const FindHospitalContainer = styled.div`
    padding-top: 110px;
    box-sizing: border-box;

    .kakao-map{
        left: 50%;
        transform: translateX(-50%);
    }

    .content-wrapper{
        width: 100%;
        height: 100%;
        padding: 5px;
        box-sizing: border-box;

        .content-box{
            margin-bottom: 3px;

            &:last-of-type{
                margin-bottom: 0px;
            }
            
            .infor-title{
                font-family: 'NexonGothicRegular';
                font-size: 16px;
                color: #222222;
                margin-right: 5px;
            }

            .infor{
                font-family: 'NexonGothicLight';
                font-size: 16px;
                color: #222222;
            }
        }
    }
`