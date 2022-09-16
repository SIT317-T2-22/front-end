import * as React from "react";
import {
    Heading,
    SubHeading,
    BlueButton,
    RedButton,
    Image,
} from "../styles/MapViewOneElements";

const MapViewOne = () => {
    return (
        <>
            <div className="container">
                <Heading>Most Affordable</Heading>
                <SubHeading>More than n+ suburbs</SubHeading>
                <BlueButton>
                    <div>Refresh</div>
                </BlueButton>
                <RedButton>
                    <div>Tailor Map</div>
                </RedButton>
            </div>
            <Image src="https://cdn.hswstatic.com/gif/maps.jpg" alt=""></Image>
        </>
    );
};

export default MapViewOne;
