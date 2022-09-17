import React, { useState } from "react";
import LandingImage from "../components/home/landingimage";
import NavBar from "../components/home/navbar";
import LandingText from "../components/home/landingtext";
import LandingFooter from "../components/home/landingfooter";

const city = require("../assets/landing-city.jpg");
const calculator = require("../assets/landing-calculator.jpg");
const map = require("../assets/landing-map.jpg");
const TextOne = (
    <>
        Sky-rocketing <b>house prices,</b> <br /> We can still find{" "}
        <b>suburbs</b> you can <b>afford!</b>
    </>
);
const TextTwo = (
    <>
        Complete your <b>financial information,</b> <br /> we will work out your{" "}
        <b>borrowing/buying</b> power.
    </>
);
const TextThree = (
    <>
        View <b>ranks of suburbs</b> that you can settle in- <br />
        based on the <b>calculated</b> borrowing/buying power. <br /> As{" "}
        <b>easy</b> as that!
    </>
);

const RectangleColorOne = "#FFFFFF";
const RectangleColorTwo = "#9D9D9D";

const LandingView = () => {
    const [isLandingText, setIsLandingText] = useState(TextOne);
    const [isImgSrc, setIsImgSrc] = useState(city);
    const [isRectangleOne, setIsRectangleOne] = useState(RectangleColorOne);
    const [isRectangleTwo, setIsRectangleTwo] = useState(RectangleColorTwo);
    const [isRectangleThree, setIsRectangleThree] = useState(RectangleColorTwo);
    const [isIndex, setIsIndex] = useState(1);

    const changeIncreaseIndex = () => {
        if (isIndex === 1) {
            setIsImgSrc(calculator);
            setIsLandingText(TextTwo);
            setIsRectangleOne(RectangleColorTwo);
            setIsRectangleTwo(RectangleColorOne);
            setIsIndex(isIndex + 1);
        } else if (isIndex === 2) {
            setIsImgSrc(map);
            setIsLandingText(TextThree);
            setIsRectangleTwo(RectangleColorTwo);
            setIsRectangleThree(RectangleColorOne);
            setIsIndex(isIndex + 1);
        } else if (isIndex === 3) {
            setIsIndex(1);
            setIsImgSrc(city);
            setIsLandingText(TextOne);
            setIsRectangleOne(RectangleColorOne);
            setIsRectangleThree(RectangleColorTwo);
        }
    };

    const changeDecreaseIndex = () => {
        if (isIndex === 1) {
            setIsImgSrc(map);
            setIsLandingText(TextThree);
            setIsRectangleOne(RectangleColorTwo);
            setIsRectangleThree(RectangleColorOne);
            setIsIndex(3);
        } else if (isIndex === 3) {
            setIsImgSrc(calculator);
            setIsLandingText(TextTwo);
            setIsRectangleThree(RectangleColorTwo);
            setIsRectangleTwo(RectangleColorOne);
            setIsIndex(isIndex - 1);
        } else if (isIndex === 2) {
            setIsImgSrc(city);
            setIsLandingText(TextOne);
            setIsRectangleOne(RectangleColorOne);
            setIsRectangleTwo(RectangleColorTwo);
            setIsIndex(isIndex - 1);
        }
    };

    return (
        <div>
            <LandingImage isImgSrc={isImgSrc}>
                <NavBar></NavBar>
                <LandingText isLandingText={isLandingText}></LandingText>
                <LandingFooter
                    changeIncreaseIndex={changeIncreaseIndex}
                    changeDecreaseIndex={changeDecreaseIndex}
                    isRectangleOne={isRectangleOne}
                    isRectangleTwo={isRectangleTwo}
                    isRectangleThree={isRectangleThree}
                ></LandingFooter>
            </LandingImage>
        </div>
    );
};

export default LandingView;
