import * as React from "react";
import Insta from "../../assets/insta.png";
import LinkedIn from "../../assets/linkedin.png";
import Facebook from "../../assets/facebook.png";
import ArrowLeft from "../../assets/arrow-left.png";
import ArrowRight from "../../assets/arrow-right.png";
import {
    FooterBox,
    Icon,
    FooterColumnLeft,
    FooterColumnRight,
    FooterColumnMiddle,
} from "../../styles/LandingFooterElements";

const LandingFooter = ({
    changeIncreaseIndex,
    changeDecreaseIndex,
    isRectangleOne,
    isRectangleTwo,
    isRectangleThree,
}: {
    changeIncreaseIndex: () => void;
    changeDecreaseIndex: () => void;
    isRectangleOne: any;
    isRectangleTwo: any;
    isRectangleThree: any;
}) => {
    return (
        <>
            <FooterBox>
                <FooterColumnLeft>
                    <Icon src={Insta} alt="" />
                    <Icon src={LinkedIn} alt="" />
                    <Icon src={Facebook} alt="" />
                </FooterColumnLeft>
                <FooterColumnMiddle>
                    <div
                        style={{
                            height: 6,
                            width: 100,
                            backgroundColor: isRectangleOne,
                            borderRadius: 36,
                        }}
                    ></div>
                    <div
                        style={{
                            height: 6,
                            width: 100,
                            backgroundColor: isRectangleTwo,
                            borderRadius: 36,
                            marginLeft: 30,
                        }}
                    ></div>
                    <div
                        style={{
                            height: 6,
                            width: 100,
                            backgroundColor: isRectangleThree,
                            borderRadius: 36,
                            marginLeft: 30,
                        }}
                    ></div>
                </FooterColumnMiddle>
                <FooterColumnRight>
                    <img
                        src={ArrowLeft}
                        alt=""
                        style={{ cursor: "pointer" }}
                        onClick={changeDecreaseIndex}
                    />
                    <img
                        src={ArrowRight}
                        alt=""
                        style={{ marginLeft: 4, cursor: "pointer" }}
                        onClick={changeIncreaseIndex}
                    />
                </FooterColumnRight>
            </FooterBox>
        </>
    );
};

export default LandingFooter;
