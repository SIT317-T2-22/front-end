import styled from "styled-components";

export const OuterContainer = styled.div`
    margin-top: -300px;
    z-index: 4;
    background: #fff;
    padding-bottom: 1px;
`;

export const InnerContainer = styled.div`
    width: 67%;
    border: 1px solid #898989;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 85px;
`;

export const ListInner = styled.div`
    display: grid;
    padding: 60px 80px 60px 120px;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 70px;
`;

export const BoxOne = styled.div`
    display: grid;
    background: #eeeeee;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    height: 600px;
    width: 480px;
    padding: 30px 40px 30px 40px;
`;

export const BoxTwo = styled.div`
    background: #eeeeee;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    height: 600px;
    width: 480px;
    padding: 30px 40px 30px 40px;
`;

export const BlueButton = styled.div`
    background: #3699ff;
    border-radius: 6px;
    width: 83px;
    height: 34px;
    margin-right: 10px;
    display: inline-block;
    margin-left: 705px;
    cursor: pointer;
    text-align: center;

    div {
        font-family: "Poppins", sans-serif;
        font-weight: 500;
        font-size: 12px;
        color: #ffffff;
        line-height: 34px;
    }
`;

export const RedButton = styled.div`
    background: #f64e60;
    border-radius: 6px;
    width: 104px;
    height: 34px;
    display: inline-block;
    margin-left: 2px;
    cursor: pointer;
    text-align: center;
    margin-bottom: 20px;

    div {
        font-family: "Poppins", sans-serif;
        font-weight: 500;
        font-size: 12px;
        color: #ffffff;
        line-height: 34px;
    }
`;

export const Heading = styled.div`
    display: inline-block;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 21px;
    color: #212121;
    margin-left: 90px;
`;

export const SubHeading = styled.div`
    position: absolute;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: #b5b5c3;
    margin-top: -22px;
    margin-left: 90px;
`;

export const NotFoundTextBox = styled.div`
    border-radius: 12px;
    padding: 40px 45px 40px 45px;
    margin: auto;
    width: 77%;
    margin-bottom: 300px;
    background: #fff;
`;

export const NotFoundTextEl = styled.div`
    font-weight: 500;
    font-size: 42px;
    color: #414141;
    float: left;
    text-align: left;
    width: 100%;
    margin-top: 35px;
    margin-left: -80px;
`;

export const Button = styled.button`
    font-family: "Raleway", sans-serif;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    background: #b09a80;
    border-radius: 18px;
    border: none;
    height: 80px;
    align-items: center;
    color: #ffffff;
    margin-bottom: 25px;
    margin-top: 20px;
    padding: 10px 80px 10px 80px;
    margin-left: 475px;
    cursor: pointer;
`;
