import * as React from "react";
import {
    OuterContainer,
    InnerContainer,
} from "../styles/MapElements";
import MapViewOne from "./mapviewone";
import MapViewTwo from "./mapviewtwo";

const Map = () => {
    return (
        <>
            <OuterContainer>
                <InnerContainer>
                    {/* <MapViewOne /> */}
                    <MapViewTwo />
                </InnerContainer>
            </OuterContainer>
        </>
    );
};

export default Map;
