import * as React from "react";
import {
    BlueButton,
    RedButton,
    OuterContainer,
    InnerContainer,
    Image,
    Text,
    Heading,
    SubHeading,
    Buttons,
} from "../styles/MapElements";

const Map = () => {
    return (
        <>
            <OuterContainer>
                <InnerContainer>
                    <Text>
                        <Heading>Most Affordable</Heading>
                        <SubHeading>More than n+ suburbs</SubHeading>
                    </Text>
                    <Buttons>
                        <BlueButton>
                            <div>Refresh</div>
                        </BlueButton>
                        <RedButton>
                            <div>Tailor Map</div>
                        </RedButton>
                    </Buttons>
                    {/* <RedButton>
                        <div>Tailor List</div>
                    </RedButton> */}
                    <Image
                        src="https://cdn.hswstatic.com/gif/maps.jpg"
                        alt=""
                    ></Image>
                </InnerContainer>
            </OuterContainer>
        </>
    );
};

export default Map;
