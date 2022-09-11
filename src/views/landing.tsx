import React, { useState } from "react";
import LandingImage from "../components/landingimage";
import NavBar from "../components/navbar";
import LandingText from "../components/landingtext";
import LandingFooter from "../components/landingfooter";
import { type ImageHolder } from "../consts/imageholder";

const LandingView = () => {
    const city = require("../assets/landing-city.jpg");
    const calculator = require("../assets/landing-calculator.jpg");
    const map = require("../assets/landing-map.jpg");
    const image = { city, calculator, map };

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const imageholder2: ImageHolder[] = [
        {
            id: "0",
            actualimage: require("../assets/landing-city.jpg"),
        },
        {
            id: "1",
            actualimage: require("../assets/landing-calculator.jpg"),
        },
        {
            id: "2",
            actualimage: require("../assets/landing-map.jpg"),
        },
    ];

    return (
        <div>
            <LandingImage
                key={imageholder2[currentImageIndex].id}
                source={imageholder2[currentImageIndex].actualimage}
            >
                <NavBar></NavBar>
                <LandingText></LandingText>
                <LandingFooter
                ></LandingFooter>
            </LandingImage>
        </div>
    );
};

export default LandingView;
