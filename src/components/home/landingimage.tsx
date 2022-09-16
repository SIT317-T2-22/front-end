import * as React from "react";
import LandingCity from "../../assets/landing-city.jpg";
import { LandingImageEl } from "../../styles/LandingImageElements";
import { PropsWithChildren } from "react";

interface Props {
    isImgSrc: any;
}

const LandingImage: React.FC<PropsWithChildren<Props>> = ({
    children,
    isImgSrc,
}) => {
    return (
        <>
            <LandingImageEl src={isImgSrc} alt=""></LandingImageEl>
            <div>{children}</div>
        </>
    );
};

export default LandingImage;
