import React from "react";
import OtherNavBar from "../components/othernavbar";
import TopFilter from "../components/topfilter";
import Map from "../components/map";
import OtherFooter from "../components/otherfooter";

const SuburbView = () => {
    return (
        <>
            <div style={{ overflowX: "hidden", position: "relative" }}>
                <OtherNavBar></OtherNavBar>
                <TopFilter></TopFilter>
                <Map></Map>
                <OtherFooter></OtherFooter>
            </div>
        </>
    );
};

export default SuburbView;
