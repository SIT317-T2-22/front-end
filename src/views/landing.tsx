import * as React from "react";
import LandingImage from "../components/landingimage";
import NavBar from "../components/navbar";
import LandingText from "../components/landingtext";
import LandingFooter from "../components/landingfooter";

const LandingView = () => {
    return (
        <div>
            <LandingImage>
                <NavBar></NavBar>
                <LandingText></LandingText>
                <LandingFooter></LandingFooter>
            </LandingImage>
        </div>
    );
};

export default LandingView;
