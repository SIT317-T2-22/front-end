import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Nav = styled.nav`
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1200px) / 2);
    z-index: 1;
    background-color: #fff;
    border: 1px solid #fff;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
    overflow: hidden;
`;

export const NavLink = styled(Link)`
    color: #b38551;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-weight: bold;
    font-size: 20px;

    &.active {
        color: #b38551;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -216px;
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: -10px;

    img {
        margin-left: 60px;
        cursor: pointer;
    }
`;
