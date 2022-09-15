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
    color: #ffffff;
    position: absolute;
    bottom: 78%;
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
    bottom: 74%;
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
`;

export const ColumnOne = styled.div`
    font-weight: 800;
    font-size: 35px;
    color: #4e4e4e;
    position: absolute;
    div {
        font-family: "Raleway", sans-serif;
        font-weight: 700;
        font-size: 16px;
        color: #4e4e4e;
    }
`;

export const ColumnTwo = styled.div`
    position: absolute;
    div {
        font-family: "Raleway", sans-serif;
        font-weight: 700;
        font-size: 16px;
        color: #4e4e4e;
    }
`;

export const ColumnThree = styled.div`
    position: absolute;
    margin-left: 700px;
    div {
        font-family: "Raleway", sans-serif;
        font-weight: 700;
        font-size: 16px;
        color: #4e4e4e;
    }
`;

export const TabsContainer = styled.div`
    position: absolute;
    margin-top: 173px;
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
    }
`;
