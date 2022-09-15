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

export const ColumnOne = styled.div`
    position: absolute;
    margin-left: 60px;
    margin-top: 16px;

    .subheading {
        font-family: "Raleway", sans-serif;
        font-weight: 700;
        font-size: 16px;
        color: #4e4e4e;
    }

    .search {
        padding: 8px 0px 8px 4px;
        background: #fff;
        border: 1px solid #b8bbc2;
        border-radius: 10px;
        position: relative;
        margin-left: -3px;
        margin-top: 3px;
        overflow: hidden;
    }

    .select {
        width: 90%;
        background: url("arrow.png") no-repeat;
        background-position: 80% center;
        font-family: "Raleway", sans-serif;
        font-weight: 500;
        font-size: 13px;
        color: #575757;
        margin-right: -6px;
        margin-left: 4px;
        position: relative;

        select {
            background: transparent;
            border: 0;
            padding: 0;
            border-radius: 0;
            width: 100%;
            position: relative;
            z-index: 10;
            outline: none;
            cursor: pointer;
        }
    }
`;

export const ColumnTwo = styled.div`
    position: absolute;
    margin-left: 273px;
    margin-top: 16px;

    select {
        margin-left: 20px;
    }

    .span_min {
        font-family: "Raleway", sans-serif;
        font-weight: 700;
        font-size: 12px;
        color: #929292;
        position: relative;
        padding: 8px 20px 8px 20px;
        margin-left: -50px;
        margin-bottom: 10px;
        margin-top: 5px;
    }

    .span_max {
        font-family: "Raleway", sans-serif;
        font-weight: 700;
        font-size: 12px;
        color: #929292;
        position: relative;
        padding: 8px 20px 8px 20px;
        margin-left: 125px;
        margin-bottom: 10px;
        margin-top: -35px;
    }

    .subheading {
        font-family: "Raleway", sans-serif;
        font-weight: 700;
        font-size: 16px;
        color: #4e4e4e;
    }

    .search_one {
        padding: 8px 4px 8px 4px;
        background: #fff;
        border: 1px solid #b8bbc2;
        border-radius: 10px;
        position: relative;
        margin-left: -1px;
        margin-top: -45px;
        margin-right: 231px;
        overflow: hidden;
    }

    .select_one {
        width: 120%;
        background: url("arrow.png") no-repeat;
        background-position: 120% center;
        font-family: "Raleway", sans-serif;
        font-weight: 500;
        font-size: 13px;
        color: #575757;
        position: relative;
        margin-left: -18px;
        select {
            background: transparent;
            border: 0;
            padding: 0;
            border-radius: 0;
            width: 80%;
            position: relative;
            z-index: 10;
            outline: none;
            cursor: pointer;
        }
    }

    .search_two {
        padding: 8px 4px 8px 4px;
        background: #fff;
        border: 1px solid #b8bbc2;
        border-radius: 10px;
        position: relative;
        margin-left: 178px;
        margin-top: -47px;
        margin-bottom: 66px;
        margin-right: 55px;
        overflow: hidden;
    }

    .select_two {
        width: 100%;
        background: url("arrow.png") no-repeat;
        background-position: 100% center;
        font-family: "Raleway", sans-serif;
        font-weight: 500;
        font-size: 13px;
        color: #575757;
        margin-right: 68px;
        margin-left: -20px;
        padding-right: 2px;
        position: relative;

        select {
            background: transparent;
            border: 0;
            padding: 0;
            border-radius: 0;
            width: 100%;
            position: relative;
            z-index: 10;
            outline: none;
            cursor: pointer;
        }
`;

export const ColumnThree = styled.div`
    position: absolute;
    margin-left: 643px;
    margin-top: 16px;

    .subheading {
        font-family: "Raleway", sans-serif;
        font-weight: 700;
        font-size: 16px;
        color: #4e4e4e;
    }

    .search {
        padding: 8px 0px 8px 4px;
        background: #fff;
        border: 1px solid #b8bbc2;
        border-radius: 10px;
        position: relative;
        margin-left: -3px;
        margin-right: -43px;
        margin-top: 3px;
        overflow: hidden;
    }

    .select {
        width: 90%;
        background: url("arrow.png") no-repeat;
        background-position: 80% center;
        font-family: "Raleway", sans-serif;
        font-weight: 500;
        font-size: 13px;
        color: #575757;
        position: relative;
        margin-left: 4px;

        select {
            background: transparent;
            border: 0;
            padding: 0;
            border-radius: 0;
            width: 100%;
            position: relative;
            z-index: 10;
            outline: none;
            cursor: pointer;
        }
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
