import * as React from "react";
import {
    Heading,
    SubHeading,
    BlueButton,
    RedButton,
    Image,
    OuterContainer,
    InnerContainer
} from "../../styles/MapElements";

const MapViewOne = () => {
    return (
        <>
            <OuterContainer>
                <InnerContainer>
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
                    <Image
                        src="https://cdn.hswstatic.com/gif/maps.jpg"
                        alt=""
                    ></Image>
                </InnerContainer>
            </OuterContainer>
        </>
    );
};

export default MapViewOne;
