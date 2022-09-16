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
