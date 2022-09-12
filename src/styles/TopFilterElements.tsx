import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Image = styled.img`
    position: absolute;
    height: 100%;
    overflow: hidden;
    z-index: -1;
    width: 100%;
`;

export const TextContainer = styled.div`
    position: relative;
    width: 100%;
    margin: auto;
    height: 100%;
    text-align: left;
`;

export const Heading = styled.div`
    font-family: "Poppins", sans-serif;
    font-weight: 800;
    font-size: 35px;
    color: #ffffff;
    position: absolute;
    bottom: 85%;
    width: 67%;
    margin: auto;
    display: block;
    left: 0;
    right: 0;
`;

export const SubHeading = styled.div`
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: #ffffff;
    position: absolute;
    bottom: 82%;
    width: 67%;
    margin: auto;
    display: block;
    left: 0;
    right: 0;
`;

export const SubBoldHeading = styled.div`
    font-family: "Raleway", sans-serif;
    font-weight: 700;
    font-size: 18px;
    color: #ffffff;
    position: absolute;
    bottom: 78%;
    width: 67%;
    margin: auto;
    display: block;
    left: 0;
    right: 0;
`;

export const NavLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    cursor: pointer;
`;
