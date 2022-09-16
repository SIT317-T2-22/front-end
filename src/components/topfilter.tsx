import * as React from "react";
import SuburbImage from "../assets/suburb-background.jpg";
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
} from "../styles/TopFilterElements";
import Filter from "./filter";

const TopFilter = () => {
    return (
        <>
            <OuterContainer>
                <Image src={SuburbImage} alt=""></Image>
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
                <Filter />
                <TabsContainer>
                    <SmallerContainerMap>
                        <div>Suburbs in Map</div>
                    </SmallerContainerMap>
                    <SmallerContainerList>
                        <div>Suburbs in List</div>
                    </SmallerContainerList>
                </TabsContainer>
            </OuterContainer>
        </>
    );
};

export default TopFilter;
