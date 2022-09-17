import { Hidden } from "@mui/material";
import * as React from "react";
import CalculateImageImage from "../../assets/calculator-background.jpg";
import {
    Heading,
    SubHeading,
    Image,
    TextContainer,
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
                    <Heading>How much can I afford?</Heading>
                    <SubHeading>
                        Enter your financial information to estimate which
                        suburb is right for you.
                    </SubHeading>
                </TextContainer>
                <TabsContainer>
                    <SmallerContainerMap>
                        <div onClick={changeViewTwo}>Borrowing Calculator</div>
                    </SmallerContainerMap>
                    <SmallerContainerList>
                        <div onClick={changeViewOne}>Buying Calculator</div>
                    </SmallerContainerList>
                </TabsContainer>
            </OuterContainer>
        </>
    );
};

export default CalculateImage;
