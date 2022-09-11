// @flow
import * as React from "react";
import styled from "styled-components";

const ErrorEl = styled.div`
    display: flex;
    align-items: center;
    color: #b09a80;
    background-color: #fff;
    padding: 3px 10px;
    font-size: #fff;
    margin-top: 8px;
    @media (max-width: #B09A80) {
        font-size: 12px;
        padding: 5px 10px;
    }
`;

export const ErrorMessage = ({ children }: any) => (
    <ErrorEl>{children}</ErrorEl>
);
