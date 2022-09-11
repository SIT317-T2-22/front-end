import * as React from "react";
import { LandingTextBox, LandingTextEl } from "../styles/LandingTextElement";

const LandingText = () => {
    return (
        <>
            <LandingTextBox>
                <LandingTextEl>
                    Sky-rocketing <b>house prices,</b>
                    <br />
                    We can still find <b>suburbs</b> you can <b>afford!</b>
                </LandingTextEl>
            </LandingTextBox>
        </>
    );
};

export default LandingText;
