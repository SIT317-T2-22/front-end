import React, { useState } from "react";
import NavBar from "../components/home/navbar";
import LandingText from "../components/home/landingtext";
import LandingFooter from "../components/home/landingfooter";

import city from '../assets/landing-city.jpg';
import calculator from '../assets/landing-calculator.jpg';
import map from '../assets/landing-map.jpg';
import Homes from '../assets/homes.jpeg';
import styled from "styled-components";
import { LandingImageEl } from "../styles/LandingImageElements";
import Feature1 from "../assets/feature1.png";
import Feature2 from "../assets/feature2.png";
import Feature3 from "../assets/feature3.png";
import QuoteProfile1 from "../assets/quoteProfile1.jpg";
import QuoteProfile2 from "../assets/quoteProfile2.jpg";
import QuoteImg from "../assets/quote.jpg";
import QuoteInvertedImg from "../assets/quoteInverted.jpg";

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
const PrimaryColour = "#9F774A";
const PrimaryLightColour = "#ECE5DD";
const tertiaryColour = "#FC6E51";
const secondaryColour = "#ACAF48";
const bodyBgColour = "#FFFAF2";

interface IBubbleProps{
    x: number
    y: number
    size: number
}

interface IStepProps{
    number: string
    colour: string
}

const FeaturesSection = styled.div`
    h2{
        text-align: center;
    }
    & > div{
        width: 80vw;
        max-width: 70em;
        margin: auto;
        margin: 5em auto;
        hr{
            margin-left: 10em;
            margin-right: 10em;
            margin-top: 6em;
            margin-bottom: -6em;
        }
    }
`;

const CtaSection = styled.section`
    background-color: ${PrimaryColour};
    padding: 5em;
    & h2{
        color: white!important;
        font-weight: 700;
        font-size: 2.5em;
    }
    text-align: center;
`;

const CTA = styled.a`
    display: inline-block;
    padding: 0.75em 2em;
    border-radius: 0.5em;
    font-weight: 700;
    font-size: 1.2em;
    background: white;
    color: ${PrimaryColour};
`;

const QuoteSection = styled.section`
    h2{
        text-align: center;
    }
    & > div{
        width: 80vw;
        max-width: 70em;
        margin: auto;
        margin: 5em auto;
        display: flex;
    }
`;

const Profile = styled.div`
    width: 7.5em;
    height: 7.5em;
    overflow: hidden;
    background-image: url(${(props:{src: string}) => props.src});
    background-size: cover;
    background-position: center;
    border-radius: 100%;
    margin: auto;
`;

const Quote = styled.div`
    text-align: center;
    margin: 2em 5em;
    padding: 5em 2em;
    border: 0.4em solid ${PrimaryColour};
    position: relative;
    &:before{
        content: '';
        width: 7.5em;
        height: 7.5em;
        background-image: url(${QuoteImg});
        background-size: cover;
        background-position: center;
        top: -3em;
        left: -3em;
        position: absolute;
        display: block;
    }
    &:after{
        content: '';
        width: 7.5em;
        height: 7.5em;
        background-image: url(${QuoteInvertedImg});
        background-size: cover;
        background-position: center;
        bottom: -3em;
        right: -3em;
        position: absolute;
        display: block;
    }
`;

const FeaturesWrapper = styled.div`
    display: flex;
    & > div{
        text-align: center;
        padding: 0 2.5em;
        img{
            padding: 2em 5em;
            width: 100%;
        }
    }
`;

const Wrapper = styled.div`
    h2{
        color: ${PrimaryColour};
        font-size: 2.2em;
        margin-bottom: 0.25em;
    }
`;

const StepsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Step = styled.div`
    padding: 2.5em;
    border-radius: 1.5em;
    border: 0.3em solid ${(props:IStepProps) => props.colour};
    position: relative;
    margin: 1em;
    font-weight: 700;
    width: 20em;
    /* height: 8em; */
    &:before{
        position: absolute;
        top: -1em;
        left: 0.5em;
        content: '${(props:IStepProps) => `${props.number}.`}';
        color:white;
        display: block;
        background-color: ${(props:IStepProps) => props.colour};
        border-radius: 100%;
        width: 2em;
        height: 2em;
        font-size: 2em;
        line-height: 1.75em;
        text-align: center;
    }
    
    
    flex-direction: column;
`;

const ValuePropSection = styled.section`
    background-color: ${bodyBgColour};
    padding: 5em 0;
    & > div{
        width: 80vw;
        max-width: 70em;
        margin: auto;
        display: flex;
        & > div{
            width: 50%;
        }
    }
`;

const PopoutSection = styled.section`
    position: relative;
    width: 80vw;
    max-width: 70em;
    margin: 5em auto;
    margin-right: 10em;
`;

const Bubble = styled.div`
    border-radius: 100%;
    background-color: ${PrimaryLightColour};
    width: ${(props:IBubbleProps) => props.size}em;
    height: ${(props:IBubbleProps) => props.size}em;
    top: ${(props:IBubbleProps) => props.y}em;
    left: ${(props:IBubbleProps) => props.x}em;
    position: absolute;
`;

const Popout = styled.div`
    display: flex;
    align-items: center;
    & > img{
        width: 70%;
        z-index: 0;
    }
    & > div{
        padding: 3em 2em;
        background-color: #FFFFFFD0;
        width: 50%;
        z-index: 1;
        margin-right: -30%;
    }
`;


const Hero = styled.div`
    height: 100vh;
`;


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
        <Wrapper>
            <LandingImageEl src={isImgSrc} alt=""></LandingImageEl>
            <Hero>
                <NavBar />
                <LandingText isLandingText={isLandingText} />
                <LandingFooter
                    changeIncreaseIndex={changeIncreaseIndex}
                    changeDecreaseIndex={changeDecreaseIndex}
                    isRectangleOne={isRectangleOne}
                    isRectangleTwo={isRectangleTwo}
                    isRectangleThree={isRectangleThree}
                />
            </Hero>
            <PopoutSection>
                <Bubble x={-8} y={1} size={15}/>
                <Bubble x={7} y={0} size={5}/>
                <Bubble x={-10} y={17} size={8}/>
                <Popout>
                    <div>
                        <h2>We help you find suburbs you can afford!</h2>
                        <p>We understand the challenges in finding a property within your borrowing capacity. With FindMyAbode, simply enter your financial information, and we will work out the suburbs you can afford.</p>
                    </div>
                    <img src={Homes} alt="" />
                </Popout>
            </PopoutSection>
            <ValuePropSection>
                <div>
                    <div>
                        <h2>Why choose us?</h2>
                        <br />
                        Forget real estate agents who have limited knowledge and ulterior motives - use FindMyAbode to find the best suburb for <b>you!</b>
                        <br />
                        <br />
                        Our service is catered towards your individual needs and personal financial capabilities so that your first home buying experience is smooth, and financially successful.
                        <br />
                        <br />
                        <ul>
                            <li>Display affordable suburbs</li>
                            <li>Find loan borrowing capacity</li>
                            <li>Calculate total cost of purchase</li>
                        </ul>
                        <br />
                        We provide an easy-to-use calculator to work out the finances for people looking to buy a first home. We then help to provide a snapshot of an area, showing the Local Government Areas that best match your requirements. You can also apply filters such as how many bedrooms and bathrooms are needed so that you can further narrow-down your desired purchase location.
                    </div>
                    <StepsWrapper>
                        <Step colour={secondaryColour} number='1'>
                            Enter your financial details
                        </Step>
                        <Step colour={tertiaryColour} number='2'>
                            Select your prefered property type
                        </Step>
                        <Step colour={secondaryColour} number='3'>
                            Choose your preferred view (map/list)
                        </Step>
                    </StepsWrapper>
                </div>
            </ValuePropSection>
            <FeaturesSection>
                <div>
                    <h2>We provide quick and easy features!</h2>
                    <hr />
                    <FeaturesWrapper>
                        <div>
                            <img src={Feature2} alt="Feature2" />
                            <h4>Tailored suggestions</h4>
                            Capitalise on your oppurtunities and associate your financial circumstances to your profile. FindMyAbode can then show you areas, relevant to you!
                        </div>
                        <div>
                            <img src={Feature1} alt="Feature1" />
                            <h4>Calculate</h4>
                            Get detailed reports on your financial borrowing capability, based on your own details to find out how much can you really afford to borrow
                        </div>
                        <div>
                            <img src={Feature3} alt="Feature3" />
                            <h4>Explore</h4>
                            Explore suburbs in Melbourne which are most affordable. Add filters to refine your search, and narrow down the best place for your next home
                        </div>
                    </FeaturesWrapper>
                </div>
            </FeaturesSection>
            <QuoteSection>
                <div>
                    <Quote>
                        <Profile src={QuoteProfile1}/>
                        <br />
                        <p>Me and my husband used FindMyAbode to search for our first home. We'd tried to enter the property market before the pandemic, we just kept on finding properties that were out of our financial capability. We tried getting advice from real estate agents but they only new their local areas. Finally, FindMyAbode helped us find the suburb which we could actually afford!</p>
                        <br />
                        <b>Gregory Hatter</b>
                        <br />
                        (user since 2021)
                    </Quote>
                    <Quote >
                        <Profile src={QuoteProfile2}/>
                        <br />
                        <p>Being a single mum I thought that purchasing property was out of my reach - I was just doomed to continue renting for the rest of my life. But with the help of a financial adviser and using FindMyAbode's loan calculator, I was able to figure out a plan to buy my own place. With FindMyAbode I narrowed down the area, and as of last year - the unit that I could buy.</p>
                        <br />
                        <b>Tamara Fulton</b>
                        <br />
                        (user since 2019)
                    </Quote>
                </div>
            </QuoteSection>
            <CtaSection>
                <h2>Start exploring affordable suburbs!</h2>
                <CTA>Get Started</CTA>
            </CtaSection>
        </Wrapper>
    );
};

export default LandingView;
