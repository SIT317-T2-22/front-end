import * as React from "react";
import { LandingTextBox, LandingTextEl } from "../../styles/LandingTextElements";

const LandingText = ({ isLandingText }: any) => {
    return (
        <>
            <LandingTextBox>
                <LandingTextEl>{isLandingText}</LandingTextEl>
            </LandingTextBox>
        </>
    );
};

export default LandingText;
