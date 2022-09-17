import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const OuterContainer = styled.div`
    position: relative;
    height: 100%;
`;

export const Image = styled.img`
    position: absolute;
    overflow: hidden;
    z-index: -1;
    width: 100%;
    margin-top: -450px;
`;

export const TextContainer = styled.div`
    position: relative;
    height: 100%;
    margin-bottom: -625px;
    text-align: left;
`;

export const Heading = styled.div`
    font-family: "Poppins", sans-serif;
    font-weight: 800;
    font-size: 35px;
    line-height: 52px;
    color: #3f3f3f;
    position: absolute;
    bottom: 69%;
    width: 67%;
    margin: auto;
    display: block;
    left: 0;
    right: 0;
`;

export const SubHeading = styled.div`
    font-family: "Raleway", sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #3f3f3f;
    position: absolute;
    bottom: 67%;
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
    bottom: 70%;
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

export const FilterContainer = styled.div`
    position: relative;
    width: 45%;
    height: 10%;
    background: #fff;
    border: 1px solid #858585;
    border-radius: 80px;
    margin-left: 315px;

    .span_one {
        position: absolute;
        border: 1px solid #6c6c6c;
        transform: rotate(90deg);
        height: 0px;
        width: 77px;
        margin-left: 190px;
        margin-top: 47px;
    }

    .span_two {
        position: absolute;
        border: 1px solid #6c6c6c;
        transform: rotate(90deg);
        height: 0px;
        width: 77px;
        margin-left: 575px;
        margin-top: 47px;
    }
`;

export const TabsContainer = styled.div`
    position: absolute;
    margin-top: 268px;
`;

export const SmallerContainerMap = styled.div`
    background: #b09a80;
    border: 1px solid #898989;
    border-radius: 20px 20px 0px 0px;
    width: 328px;
    position: absolute;
    margin-left: 315px;
    div {
        font-family: "Raleway";
        font-weight: 700;
        font-size: 18px;
        color: #ffffff;
        text-align: center;
        line-height: 55.55px;
        cursor: pointer;
    }
`;

export const SmallerContainerList = styled.div`
    background: #d9d9d9;
    border: 1px solid #898989;
    border-radius: 20px 20px 0px 0px;
    width: 328px;
    position: absolute;
    margin-left: 670px;
    div {
        font-family: "Raleway";
        font-weight: 700;
        font-size: 18px;
        color: #383838;
        text-align: center;
        line-height: 55.55px;
        cursor: pointer;
    }
`;
