import styled from "styled-components";

export const OuterContainer = styled.div`
    position: relative;
    margin-top: -300px;
    z-index: 4;
    background: #fff;
    padding-bottom: 1px;
`;

export const InnerContainer = styled.div`
    display: block;
    width: 67%;
    border: 1px solid #898989;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 85px;

    .container {
        display: inline-block;
        margin-top: 40px;
        margin-bottom: 20px;
    }
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
    font-weight: bold;
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

export const ListInner = styled.div`
    display: grid;
    padding: 10px 90px;
    padding-bottom: 35px;
    grid-template-columns: 1fr 1fr 1.1fr 1fr 1fr 1.1fr;
    grid-column-gap: 70px;

    .sec {
    }

    .suburb {
        font-family: "Poppins", sans-serif;
        font-weight: 600;
        font-size: 14px;
        line-height: 21px;
        letter-spacing: 0.03em;
        color: #464e5f;
    }

    h2 {
        font-family: "Poppins", sans-serif;
        font-weight: 600;
        font-size: 14px;
        line-height: 21px;
        letter-spacing: 0.03em;
        color: #b5b5c3;
    }

    .sec .props {
        text-align: center;
        grid-auto-rows: 1fr;
        grid-row-gap: 19px;
        display: grid;
    }

    .sec .no_name {
        opacity: 0;
        cursor: default;
    }

    .sec .props li {
        font-family: "Poppins", sans-serif;
        font-weight: 600;
        font-size: 12px;
        line-height: 18px;
        color: #1bc5bd;
        cursor: pointer;
        background: #c9f7f5;
        border-radius: 6px;
        width: 104px;
        padding: 7px 5px;
    }

    .sec ul li {
        margin-top: 30px;
        list-style: none;
        font-family: "Poppins", sans-serif;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        color: #464e5f;
    }

    .sec ul span {
        text-decoration: none;
        font-family: "Poppins", sans-serif;
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;
        color: #b5b5c3;
    }

    .fa-star {
        color: #ffa800;
    }
`;
