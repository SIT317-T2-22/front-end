import React from "react";
import LoggedInNavBar from "../components/calculate/loggedinnavbar";
import CalculateImage from "../components/calculate/calculateimage";
import BorrowingCalculator from "../components/calculate/borrowingcalculator";
import BuyingCalculator from "../components/calculate/buyingcalculator";
import OtherFooter from "../components/otherfooter";
import { useState } from "react";

const CalculateView = () => {
    const [isToggleViewOne, setIsToggleViewOne] = useState(true);
    const [isToggleViewTwo, setIsToggleViewTwo] = useState(false);

    console.log("Top thing activated");
    console.log("IsToggleViewOne");
    console.log(isToggleViewOne);
    console.log("IsToggleViewTwo");
    console.log(isToggleViewTwo);

    const changeViewOne = () => {
        if (isToggleViewOne === true) {
            setIsToggleViewOne(false);
            setIsToggleViewTwo(true);
        } else {
            return;
        }
    };

    const changeViewTwo = () => {
        if (isToggleViewTwo === true) {
            setIsToggleViewTwo(false);
            setIsToggleViewOne(true);
        } else {
            return;
        }
    };

    return (
        <>
            <div>
                <LoggedInNavBar></LoggedInNavBar>
                <CalculateImage
                    changeViewOne={changeViewOne}
                    changeViewTwo={changeViewTwo}
                ></CalculateImage>
                {isToggleViewOne ? (
                    <BorrowingCalculator></BorrowingCalculator>
                ) : (
                    <BuyingCalculator></BuyingCalculator>
                )}
                <OtherFooter></OtherFooter>
            </div>
        </>
    );
};

export default CalculateView;
