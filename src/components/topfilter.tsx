import * as React from "react";
import SuburbImage from "../assets/suburb-background.jpg";
import {
    Heading,
    SubHeading,
    SubBoldHeading,
    Image,
    TextContainer,
    NavLink,
    FilterContainer,
    ColumnOne,
    ColumnTwo,
    ColumnThree,
    OuterContainer,
    TabsContainer,
    SmallerContainerMap,
    SmallerContainerList,
} from "../styles/TopFilterElements";

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
                <FilterContainer>
                    <ColumnOne>
                        <div>Property Type</div>
                        <select>
                            <option value="House">House</option>
                            <option value="Apartment">Apartment</option>
                            <option value="Unit">Unit</option>
                            <option value="Townhouse">Townhouse</option>
                            <option value="Land">Land</option>
                            <option value="Villa">Villa</option>
                            <option value="Acreage">Acreage</option>
                            <option value="BlockUnits">Block of Units</option>
                            <option value="RetirementLiving">
                                Retirement Living
                            </option>
                            <option value="Rural">Rural</option>
                        </select>
                    </ColumnOne>
                    <ColumnTwo>
                        <div>Bedrooms</div>
                        <span>Min</span>
                        <select>
                            <option>Any</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        <span>Max</span>
                        <select>
                            <option>Any</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </ColumnTwo>
                    <ColumnThree>
                        <div>Bathrooms</div>
                        <select>
                            <option>Any</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </ColumnThree>
                </FilterContainer>
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
