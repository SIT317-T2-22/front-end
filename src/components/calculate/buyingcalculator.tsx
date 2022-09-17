import * as React from "react";
import {
    Heading,
    SubHeading,
    BlueButton,
    RedButton,
    ListInner,
    OuterContainer,
    InnerContainer,
} from "../../styles/ListElements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BuyingCalculator = () => {
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
                            <div>Tailor List</div>
                        </RedButton>
                    </div>
                    <ListInner>
                        <div>BUYING CALCULATOR</div>
                    </ListInner>
                </InnerContainer>
            </OuterContainer>
        </>
    );
};

export default BuyingCalculator;
