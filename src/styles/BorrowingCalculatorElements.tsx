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
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;

    .first_row {
        .select {
            background-position: 80% center;
            font-family: "Raleway", sans-serif;
            font-weight: 500;
            font-size: 13px;
            display: inline-block;
            margin-top: 6px;
            margin-right: 58px;

            select {
                background: transparent;
                height: 34px;
                width: 127px;
                border: 0;
                padding: 0;
                border: 1px solid #b8bbc2;
                border-radius: 10px;
                position: relative;
                z-index: 10;
                outline: none;
                cursor: pointer;
            }
        }
    }

    .line {
        width: 300px;
        height: 0px;
        border: 1px solid #b8bbc2;
        transform: rotate(-0.18deg);
    }
`;

export const BoxTwo = styled.div`
    background: #eeeeee;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    height: 600px;
    width: 480px;
    padding: 30px 40px 30px 40px;
`;

export const Heading = styled.div`
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: #3d3d3d;
`;

export const SubHeading = styled.div`
    font-family: "Raleway", sans-serif;
    font-weight: 700;
    font-size: 13px;
    line-height: 15px;
    color: #4e4e4e;
    margin-top: 14px;
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
