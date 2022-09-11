import styled from "styled-components";

export const OuterContainer = styled.div`
    margin: auto;
    text-align: center;
    width: 50%;
`;

export const OuterForm = styled.div`
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
    display: flex;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 26px;
    color: #898989;
    margin-bottom: 35px;
    height: 80px;
    border: 1px solid #414141;
    border-radius: 15px;
    padding-right: 25px;
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
