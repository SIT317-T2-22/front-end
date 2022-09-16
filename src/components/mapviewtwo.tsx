import * as React from "react";
import {
    Heading,
    SubHeading,
    BlueButton,
    RedButton,
    ListInner,
} from "../styles/MapViewTwoElements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MapViewTwo = () => {
    return (
        <>
            <div className="container">
                <Heading>Most Affordable</Heading>
                <SubHeading>More than n+ suburbs</SubHeading>
                <BlueButton>
                    <div>Refresh</div>
                </BlueButton>
                <RedButton>
                    <div>Tailor List</div>
                </RedButton>
            </div>
            <ListInner>
                <div className="sec">
                    <h2 className="suburb">SUBURB</h2>
                    <ul>
                        <li>Doncaster</li>
                        <span>3108</span>
                        <li>Nunawading</li>
                        <span>3131</span>
                        <li>Burwood</li>
                        <span>3125</span>
                        <li>Chadstone</li>
                        <span>3148</span>
                    </ul>
                </div>
                <div className="sec">
                    <h2>MEDIAN PRICE</h2>
                    <ul>
                        <li>$1,000,000</li>
                        <span>1% Increase</span>
                        <li>$2,000,000</li>
                        <span>2% Increase</span>
                        <li>$3,000,000</li>
                        <span>3% Increase</span>
                        <li>$4,000,000</li>
                        <span>4% Increase</span>
                    </ul>
                </div>
                <div className="sec">
                    <h2>MARKET LISTINGS</h2>
                    <ul>
                        <li>50</li>
                        <span>22 March 2022</span>
                        <li>40</li>
                        <span>22 March 2022</span>
                        <li>30</li>
                        <span>22 March 2022</span>
                        <li>20</li>
                        <span>22 March 2022</span>
                    </ul>
                </div>
                <div className="sec">
                    <h2>POPULATION</h2>
                    <ul>
                        <li>7000</li>
                        <span>22 March 2022</span>
                        <li>8000</li>
                        <span>22 March 2022</span>
                        <li>9000</li>
                        <span>22 March 2022</span>
                        <li>9000</li>
                        <span>22 March 2022</span>
                    </ul>
                </div>
                <div className="sec">
                    <h2>SATISFACTION</h2>
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={"star"} />
                            <FontAwesomeIcon icon={"star"} />
                            <FontAwesomeIcon icon={"star"} />
                            <FontAwesomeIcon icon={"star"} />
                            <FontAwesomeIcon icon={"star"} />
                        </li>
                        <span>Best Rated</span>
                        <li>
                            <FontAwesomeIcon icon={"star"} />
                            <FontAwesomeIcon icon={"star"} />
                            <FontAwesomeIcon icon={"star"} />
                            <FontAwesomeIcon icon={"star"} />
                            <FontAwesomeIcon icon={["far", "star"]} />
                        </li>
                        <span>Above Average</span>
                        <li>
                            <FontAwesomeIcon icon={"star"} />
                            <FontAwesomeIcon icon={"star"} />
                            <FontAwesomeIcon icon={"star"} />
                            <FontAwesomeIcon icon={"star"} />
                            <FontAwesomeIcon icon={"star"} />
                        </li>
                        <span>Best Rated</span>
                        <li>
                            <FontAwesomeIcon icon={"star"} />
                            <FontAwesomeIcon icon={"star"} />
                            <FontAwesomeIcon icon={"star"} />
                            <FontAwesomeIcon icon={["far", "star"]} />
                            <FontAwesomeIcon icon={["far", "star"]} />
                        </li>
                        <span>Average</span>
                    </ul>
                </div>
                <div className="sec">
                    <h2 className="no_name">NO NAME</h2>
                    <ul className="props">
                        <li>View Properties</li>
                        <li>View Properties</li>
                        <li>View Properties</li>
                        <li>View Properties</li>
                    </ul>
                </div>
            </ListInner>
        </>
    );
};

export default MapViewTwo;
