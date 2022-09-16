import * as React from "react";
import { LandingTextBox, LandingTextEl } from "../../styles/LandingTextElement";

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
