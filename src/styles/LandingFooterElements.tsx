import styled from "styled-components";

export const FooterBox = styled.div`
    display: flex;
    height: 80px;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1200px) / 2);
    margin-bottom: 30px;
    bottom: 0;
    position: absolute;
    width: 100%;
    align-items: center;
`;

export const FooterColumnLeft = styled.div`
    display: flex;

    .insta_icon {
        display: flex;
        margin-top: 12px;
        margin-right: 14px;
        height: 34px;
        width: 30px;
        cursor: pointer;
        color: white;
    }
`;

export const FooterColumnMiddle = styled.div`
    display: flex;
    margin: 50px;
`;

export const FooterColumnRight = styled.div`
    display: flex;
    justify-content: flex-end;
    float: right;
    margin-left: -430px;
`;

export const Icon = styled.img`
    display: flex;
    margin: 14px;
    height: 30px;
    width: 30px;
    cursor: pointer;
`;
