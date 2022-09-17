import * as React from "react";
import {
    OuterContainer,
    InnerContainer,
    NotFoundTextBox,
    NotFoundTextEl,
} from "../../styles/BorrowingCalculatorElements";

const BuyingCalculator = () => {
    return (
        <>
            <OuterContainer>
                <InnerContainer>
                    <NotFoundTextBox>
                        <NotFoundTextEl>
                            Wow you're <b>curious!</b> <br />
                            This feature hasn't been implemented yet. <br />
                            <b>Come back again later!</b>
                        </NotFoundTextEl>
                    </NotFoundTextBox>
                </InnerContainer>
            </OuterContainer>
        </>
    );
};

export default BuyingCalculator;
