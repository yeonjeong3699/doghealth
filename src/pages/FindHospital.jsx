import React, { useState } from "react";
import { CustomOverlayMap, Map, MapMarker, ZoomControl, useMap } from "react-kakao-maps-sdk";
import styled from "styled-components";
import hospital from "../json/hopital.json";

export default function FindHospital() {
    const [open, setOpen] = useState(false);
    const EventMarkerContainer = ({ position, content }) => {
        const map = useMap()
        

        return (
            <MapMarker
                position={position}
                image={{
                    src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png",
                    size: {
                        width: 24,
                        height: 35,
                    }
                }}
                onClick={() => setOpen(true)}
            >
                {open && content}
            </MapMarker>
        )
    }

    const content = <div className="wrap">
        <div className="info">
            <div className="title">
                카카오 스페이스닷원
                <div
                    className="close"
                    onClick={() =>setOpen(false)}
                    title="닫기"
                >닫기</div>
            </div>
            <div className="body">
                <div className="img">
                    <img
                        src="//t1.daumcdn.net/thumb/C84x76/?fname=http://t1.daumcdn.net/cfile/2170353A51B82DE005"
                        width="73"
                        height="70"
                        alt="카카오 스페이스닷원"
                    />
                </div>
                <div className="desc">
                    <div className="ellipsis">
                        제주특별자치도 제주시 첨단로 242
                    </div>
                    <div className="jibun ellipsis">
                        (우) 63309 (지번) 영평동 2181
                    </div>
                    <div>
                        <a
                            href="https://www.kakaocorp.com/main"
                            target="_blank"
                            className="link"
                            rel="noreferrer"
                        >
                            홈페이지
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    return (
        <FindHospitalContainer className="container">
            <Map
                className="kakao-map"
                center={{ lat: 37.566535, lng: 126.9779692 }}
                style={{ width: '800px', height: '600px' }}
                level={10}
            >
                {hospital.hospitalList.map((value) => (
                    <EventMarkerContainer
                        key={`EventMarkerContainer-${value.latlng.lat}-${value.latlng.lng}`}
                        position={value.latlng}
                        content={content}
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
        width: 500px;
        height: 500px;
    }
`