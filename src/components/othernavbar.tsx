import * as React from "react";
import {
    Nav,
    NavLink,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "../styles/OtherNavBarElements";
import LogoColoured from "../assets/logo-coloured.png";

const NavBar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <img
                        src={LogoColoured}
                        alt=""
                        style={{
                            width: "300px",
                            height: "39px",
                        }}
                    />
                </NavLink>
                <NavMenu>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/calculate">Calculate</NavLink>
                    <NavLink to="/suburbs">Suburbs</NavLink>
                    <NavLink to="/createaccount">Sign Up</NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">Login</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export default NavBar;
