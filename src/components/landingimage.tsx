import * as React from "react";
import LandingCity from "../assets/landing-city.jpg";
import { LandingImageEl } from "../styles/LandingImageElements";

const LandingImage = (props: any) => {
    

    return (
        <>
            <LandingImageEl src={LandingCity} alt=""></LandingImageEl>
            <div>{props.children}</div>
        </>
    );
};

export default LandingImage;
