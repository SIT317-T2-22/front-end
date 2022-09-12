import * as React from "react";
import SuburbImage from "../assets/suburb-background.jpg";
import {
    Heading,
    SubHeading,
    SubBoldHeading,
    Image,
    TextContainer,
    NavLink,
} from "../styles/TopFilterElements";

const TopFilter = () => {
    return (
        <>
            <Image src={SuburbImage} alt=""></Image>
            <TextContainer>
                <Heading>Discover Suburbs in Victoria.</Heading>
                <SubHeading>
                    Most to least affordable suburbs according to median income.
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
            {/* <FilterContainer>
                <ColumnOne>
                    <div>Property Type</div>
                    <div>House drop down</div>
                </ColumnOne>
                <ColumnTwo>
                    <div>Bedrooms</div>
                    <div>Min any drop down</div>
                    <div>Max any drop down</div>
                </ColumnTwo>
                <ColumnThree>
                    <div>Bathrooms</div>
                    <div>Any drop down</div>
                </ColumnThree>
            </FilterContainer> */}
        </>
    );
};

export default TopFilter;
