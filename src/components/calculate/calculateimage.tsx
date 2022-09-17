import { Hidden } from "@mui/material";
import * as React from "react";
import CalculateImageImage from "../../assets/calculator-background.jpg";
import {
    Heading,
    SubHeading,
    SubBoldHeading,
    Image,
    TextContainer,
    NavLink,
    OuterContainer,
    TabsContainer,
    SmallerContainerMap,
    SmallerContainerList,
} from "../../styles/CalculateImageElements";

const CalculateImage = ({
    changeViewOne,
    changeViewTwo,
}: {
    changeViewOne: () => void;
    changeViewTwo: () => void;
}) => {
    return (
        <>
            <OuterContainer>
                <Image
                    src={CalculateImageImage}
                    alt=""
                    style={{ display: "inline-block", overflow: "hidden" }}
                ></Image>
                <TextContainer>
                    <Heading>Discover Suburbs in Victoria.</Heading>
                    <SubHeading>
                        Most to least affordable suburbs according to median
                        income.
                    </SubHeading>
                    <SubBoldHeading>
                        Click here to{" "}
                        <u>
                            <NavLink to="/calculate">view</NavLink>
                        </u>{" "}
                        the most affordable suburbs tailored according to your
                        income.
                    </SubBoldHeading>
                </TextContainer>
                <TabsContainer>
                    <SmallerContainerMap>
                        <div onClick={changeViewTwo}>Suburbs in Map</div>
                    </SmallerContainerMap>
                    <SmallerContainerList>
                        <div onClick={changeViewOne}>Suburbs in List</div>
                    </SmallerContainerList>
                </TabsContainer>
            </OuterContainer>
        </>
    );
};

export default CalculateImage;
