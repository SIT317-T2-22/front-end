import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const OuterContainer = styled.div`
    position: relative;
    background: #3d342b;
`;

export const OuterInnerContainer = styled.div`
    display: grid;
    justify-content: end;
    align-content: end;
    margin-bottom: -70px;
    margin-right: -20px;
`;

export const InnerContainer = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    padding: 50px 100px;
    margin-top: -30px;
`;

export const InnerInnerContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    grid-gap: 20px;
    .sec {
        position: relative;
    }
`;

export const ColumnOne = styled.div`
    margin-left: 80px;
    .logo {
        margin-top: 5px;
    }
    p {
        font-family: "Poppins", sans-serif;
        font-weight: 600;
        font-size: 14px;
        color: #ffffff;
        margin-top: 35px;
        margin-left: 5px;
    }
`;

export const ColumnTwo = styled.div`
    position: relative;
    div {
        font-family: "Poppins", sans-serif;
        font-weight: 700;
        font-size: 22px;
        color: #f5cb9a;
    }
    li {
        list-style: none;
    }
    ul {
        margin-left: 40px;
        margin-top: 15px;
        margin-bottom: 10px;
    }
`;

export const ColumnThree = styled.form`
    margin-top: 60px;
    div {
        font-family: "Poppins", sans-serif;
        font-weight: 700;
        font-size: 22px;
        line-height: 33px;
        color: #f5cb9a;
    }

    input[type="submit"] {
        margin-left: -95px;
        font-family: "Poppins", sans-serif;
        font-size: 20px;
        line-height: 30px;
        font-weight: 900;
        background: none;
        border: none;
        color: #3d342b;
        cursor: pointer;
    }
`;

export const Foot = styled.div`
    background: #b38551;
    text-align: center;
    div {
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        font-size: 16px;
        color: #ffffff;
        line-height: 99px;
        margin-left: -75px;
    }
`;

export const Icon = styled.img`
    margin-top: 60px;
    margin-right: 40px;
    height: 30px;
    width: 30px;
    cursor: pointer;
`;

export const LinkLink = styled(Link)`
    cursor: pointer;
    color: #414141;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 16px;
    text-decoration-line: underline;
    color: #fff;
    display: inline-block;
    margin-left: -37px;
    margin-bottom: 25px;
`;

export const InputEl = styled.input`
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: #black;
    margin-bottom: 35px;
    height: 59px;
    border-radius: 10px;
    padding-right: 120px;
    padding-left: 25px;
    margin-top: 20px;
    border: none;
`;
