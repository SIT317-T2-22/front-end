import React from "react";
import OtherNavBar from "../components/suburbs/othernavbar";
import TopFilter from "../components/suburbs/topfilter";
import Map from "../components/suburbs/map";
import List from "../components/suburbs/list";
import OtherFooter from "../components/otherfooter";
import { useState } from "react";
import styled from "styled-components";

const MapWrapper = styled.div`
    width: 100vw;
    padding: 4vh 1em;
    background-color: antiquewhite;
    margin-top: -300px;
    z-index: 4;
    padding-bottom: 1px;
`;

const SuburbView = () => {
    const [isToggleViewOne, setIsToggleViewOne] = useState(true);
    const [isToggleViewTwo, setIsToggleViewTwo] = useState(false);

    console.log("Top thing activated");
    console.log("IsToggleViewOne");
    console.log(isToggleViewOne);
    console.log("IsToggleViewTwo");
    console.log(isToggleViewTwo);

    const changeViewOne = () => {
        if (isToggleViewOne === true) {
            setIsToggleViewOne(false);
            setIsToggleViewTwo(true);
        } else {
            return;
        }
    };

    const changeViewTwo = () => {
        if (isToggleViewTwo === true) {
            setIsToggleViewTwo(false);
            setIsToggleViewOne(true);
        } else {
            return;
        }
    };

    return (
        <>
            <div style={{ overflowX: "hidden", position: "relative" }}>
                <OtherNavBar />
                <TopFilter
                    changeViewOne={changeViewOne}
                    changeViewTwo={changeViewTwo}
                ></TopFilter>
                {isToggleViewOne ? 
                <MapWrapper>
                    <Map />
                </MapWrapper> : <List/>}
                <OtherFooter />
            </div>
        </>
    );
};

export default SuburbView;
