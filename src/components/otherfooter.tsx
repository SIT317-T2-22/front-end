import * as React from "react";
import Logo from "../assets/logo-white.png";
import Insta from "../assets/insta.png";
import LinkedIn from "../assets/linkedin.png";
import Facebook from "../assets/facebook.png";
import {
    OuterContainer,
    InnerContainer,
    ColumnOne,
    ColumnTwo,
    ColumnThree,
    Foot,
    Icon,
    LinkLink,
    InnerInnerContainer,
    InputEl,
    OuterInnerContainer,
} from "../styles/OtherFooterElements";

const OtherFooter = () => {
    return (
        <>
            <OuterContainer>
                <OuterInnerContainer>
                    <InnerContainer>
                        <InnerInnerContainer>
                            <ColumnOne className="sec">
                                <img
                                    className="logo"
                                    src={Logo}
                                    alt=""
                                    style={{
                                        width: "297px",
                                        height: "47px",
                                    }}
                                />
                                <p>
                                    We will maximise your financial capability.{" "}
                                    <br />
                                    We will find the best suburb you can afford.{" "}
                                    <br />
                                    We believe that no one should settle for
                                    less.
                                </p>
                                <Icon src={Insta} alt="" />
                                <Icon src={LinkedIn} alt="" />
                                <Icon src={Facebook} alt="" />
                            </ColumnOne>
                            <ColumnTwo className="sec">
                                <div>Quick Links</div>
                                <ul>
                                    <li>
                                        <LinkLink to="/">Home</LinkLink>
                                    </li>
                                    <li>
                                        <LinkLink to="/">About Us</LinkLink>
                                    </li>
                                    <li>
                                        <LinkLink to="/">Testimonials</LinkLink>
                                    </li>
                                    <li>
                                        <LinkLink to="/">
                                            Terms and Conditions
                                        </LinkLink>
                                    </li>
                                    <li>
                                        <LinkLink to="/">
                                            Partner With Us
                                        </LinkLink>
                                    </li>
                                </ul>
                            </ColumnTwo>
                            <ColumnThree className="sec">
                                <div>Subscribe to our Newsletter!</div>
                                <div>
                                    <InputEl
                                        placeholder="Your Email"
                                        type="email"
                                        name="email"
                                        autoFocus={false}
                                    />
                                    <input type="submit" value="Submit" />
                                </div>
                            </ColumnThree>
                        </InnerInnerContainer>
                    </InnerContainer>
                </OuterInnerContainer>
                <Foot>
                    <div>&copy; Copyright 2022 Deakin University SIT317</div>
                </Foot>
            </OuterContainer>
        </>
    );
};

export default OtherFooter;
