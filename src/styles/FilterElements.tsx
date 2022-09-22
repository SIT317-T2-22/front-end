import styled from "styled-components";

import Arrow from "../assets/Arrow.png";

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
        background-position: 80% center;
        font-family: "Raleway", sans-serif;
        font-weight: 500;
        font-size: 13px;
        color: #575757;
        margin-right: -6px;
        margin-left: 4px;
        position: relative;

        select {
            width: 100%;
            border: 0;
            outline: none;
            cursor: pointer;
            appearance: none;
            -moz-appearance: none;
            -webkit-appearance: none;
            padding-right: 15px;
            background-image: url("https://i.imgur.com/5v17RRC.png");
            background-repeat: no-repeat;
            background-position: 95px 0px;
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
        background-position: 120% center;
        font-family: "Raleway", sans-serif;
        font-weight: 500;
        font-size: 13px;
        color: #575757;
        position: relative;
        margin-left: -18px;
        select {
            width: 80%;
            border: 0;
            outline: none;
            cursor: pointer;
            appearance: none;
            -moz-appearance: none;
            -webkit-appearance: none;
            padding-right: 15px;
            background-image: url("https://i.imgur.com/5v17RRC.png");
            background-repeat: no-repeat;
            background-position: 91px 0px;
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
            width: 100%;
            border: 0;
            outline: none;
            cursor: pointer;
            appearance: none;
            -moz-appearance: none;
            -webkit-appearance: none;
            padding-right: 15px;
            background-image: url("https://i.imgur.com/5v17RRC.png");
            background-repeat: no-repeat;
            background-position: 90px 0px;
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
        background-position: 80% center;
        font-family: "Raleway", sans-serif;
        font-weight: 500;
        font-size: 13px;
        color: #575757;
        position: relative;
        margin-left: 4px;

        select {
            width: 100%;
            border: 0;
            outline: none;
            cursor: pointer;
            appearance: none;
            -moz-appearance: none;
            -webkit-appearance: none;
            padding-right: 15px;
            background-image: url("https://i.imgur.com/5v17RRC.png");
            background-repeat: no-repeat;
            background-position: 97px 0px;
        }
    }
`;
