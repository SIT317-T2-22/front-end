import * as React from "react";
import {
    Nav,
    NavLink,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "../styles/NavBarElements";
import Logo from "../assets/logo-white.png";

const NavBar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <img
                        src={Logo}
                        alt=""
                        style={{
                            width: "248px",
                            height: "69px",
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
