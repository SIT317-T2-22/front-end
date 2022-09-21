import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const OuterContainer = styled.div`
    text-align: center;
    width: 50%;
    margin: auto;
    background-color: #fff5e9;
    height: 100%;
`;

export const OuterForm = styled.div`
    margin-top: 107px;
    padding-top: 15px;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    @media (max-width: 1300px) {
        flex-direction: column;
        padding-top: 30px;
    }
    .error_wrapper {
        margin-top: -25px;
        margin-bottom: 10px;
        margin-left: 100px;
    }
`;

export const FormInner = styled.form`
    box-shadow: 0px 5px 14px 4px rgb(0 55 123 / 35%);
    border-radius: 12px;
    padding: 50px 55px 50px 55px;
    width: 100%;
    margin: auto;
    max-width: 662px;
    background: #fff;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

    .mail_lock {
        margin-right: -72px;
        display: inline-block;
        height: 58px;
        width: 58px;
        margin-bottom: -20px;
        position: relative;
    }

    .lock {
        margin-right: -59px;
        display: inline-block;
        height: 54px;
        width: 46px;
        margin-bottom: -18px;
        position: relative;
    }

    .password_text {
        padding-right: 26px;
    }
`;

export const Header = styled.div`
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 32px;
    color: #414141;
    margin-bottom: 12px;
`;

export const Body = styled.div`
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: #414141;
    margin-bottom: 33px;
`;

export const InputEl = styled.input`
    display: inline-block;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 26px;
    color: #898989;
    margin-bottom: 35px;
    height: 83px;
    border: 1px solid #414141;
    border-radius: 15px;
    padding-right: 25px;
    padding-left: 90px;
`;

export const Button = styled.button`
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 26px;
    background: #b09a80;
    border-radius: 15px;
    border: none;
    height: 80px;
    align-items: center;
    color: #ffffff;
    margin-bottom: 25px;
    margin-top: 20px;
`;

export const SubText = styled.div`
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: #414141;
`;

export const SignInLink = styled(Link)`
    cursor: pointer;
    text-decoration: none;
    color: #414141;
`;

export const ForgotPasswordLink = styled(Link)`
    cursor: pointer;
    text-decoration: none;
    color: #414141;
`;

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-weight: bold;
    font-size: 20px;

    &.active {
        color: #e2a867;
    }
`;
