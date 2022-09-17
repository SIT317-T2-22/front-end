import * as React from "react";
import {
    Heading,
    SubHeading,
    BoxOne,
    BoxTwo,
    ListInner,
    OuterContainer,
    InnerContainer,
    Button,
} from "../../styles/BorrowingCalculatorElements";

const BorrowingCalculator = () => {
    return (
        <>
            <OuterContainer>
                <InnerContainer>
                    <ListInner>
                        <BoxOne>
                            <div className="first_row">
                                <Heading>About Me</Heading>
                                <SubHeading>Number of dependants</SubHeading>
                                <div className="select one">
                                    <select>
                                        <option value="0">&nbsp; 0</option>
                                        <option value="1">&nbsp; 1</option>
                                        <option value="2">&nbsp; 2</option>
                                        <option value="3">&nbsp; 3</option>
                                        <option value="4">&nbsp; 4</option>
                                        <option value="5">&nbsp; 5</option>
                                        <option value="6">&nbsp; 6</option>
                                        <option value="7">&nbsp; 7</option>
                                        <option value="8">&nbsp; 8</option>
                                        <option value="9">&nbsp; 9</option>
                                        <option value="10">&nbsp; 10</option>
                                    </select>
                                </div>
                                <div className="select two">
                                    <select>
                                        <option value="0">&nbsp; 0</option>
                                        <option value="1">&nbsp; 1</option>
                                        <option value="2">&nbsp; 2</option>
                                        <option value="3">&nbsp; 3</option>
                                        <option value="4">&nbsp; 4</option>
                                        <option value="5">&nbsp; 5</option>
                                        <option value="6">&nbsp; 6</option>
                                        <option value="7">&nbsp; 7</option>
                                        <option value="8">&nbsp; 8</option>
                                        <option value="9">&nbsp; 9</option>
                                        <option value="10">&nbsp; 10</option>
                                    </select>
                                </div>
                                <p>children (under 18)</p>
                                <p>adults (18 and over)</p>
                            </div>
                            <div className="second_row">
                                <SubHeading>Property type</SubHeading>
                                <div className="select">
                                    <select>
                                        <option value="House">House</option>
                                        <option value="Apartment">
                                            Apartment
                                        </option>
                                        <option value="Unit">Unit</option>
                                        <option value="Townhouse">
                                            Townhouse
                                        </option>
                                        <option value="Land">Land</option>
                                        <option value="Villa">Villa</option>
                                        <option value="Acreage">Acreage</option>
                                        <option value="BlockUnits">
                                            Block of Units
                                        </option>
                                        <option value="RetirementLiving">
                                            Retirement Living
                                        </option>
                                        <option value="Rural">Rural</option>
                                    </select>
                                </div>
                            </div>
                            <div className="third_row">
                                <div className="line"></div>
                            </div>
                            <div className="fourth_row">
                                <Heading>My Income</Heading>
                                <SubHeading>I earn (before tax)</SubHeading>
                                <input
                                    placeholder="0"
                                    type="number"
                                    name="income"
                                ></input>
                                <div className="select">
                                    <select>
                                        <option value="Year">Per year</option>
                                        <option value="Month">Per month</option>
                                        <option value="Week">Per week</option>
                                    </select>
                                </div>
                            </div>
                            <div className="fifth_row">
                                <div className="sub_sub_heading">
                                    + Add partner's income
                                </div>
                                <p>
                                    join borrowing has a higher chance of loan
                                    approval!
                                </p>
                            </div>
                            <div className="sixth_row">
                                <div className="sub_sub_heading">
                                    + Add rental income
                                </div>
                                <p>
                                    income you receive from an investment
                                    property
                                </p>
                            </div>
                        </BoxOne>
                        <BoxTwo>asdsad</BoxTwo>
                    </ListInner>
                    <Button>Get Suburbs Report</Button>
                </InnerContainer>
            </OuterContainer>
        </>
    );
};

export default BorrowingCalculator;
