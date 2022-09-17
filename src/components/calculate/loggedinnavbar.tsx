import * as React from "react";
import {
    Nav,
    NavLink,
    NavMenu,
    NavBtn,
} from "../../styles/LoggedInNavBarElements";
import LogoColoured from "../../assets/logo-coloured.png";
import Notification from "../../assets/notification.png";
import Profile from "../../assets/profile-icon.png";

const LoggedInNavBar = () => {
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
                </NavMenu>
                <NavBtn>
                    <NavLink to="/notfound">
                        <img
                            src={Notification}
                            alt=""
                            style={{
                                width: "45px",
                                height: "45px",
                                marginLeft: "-10px",
                            }}
                            className="Nav_Btn"
                        />
                    </NavLink>
                    <NavLink to="/notfound">
                        <img
                            src={Profile}
                            alt=""
                            style={{ width: "52px", height: "52px" }}
                            className="Nav_Btn"
                        />
                    </NavLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export default LoggedInNavBar;
