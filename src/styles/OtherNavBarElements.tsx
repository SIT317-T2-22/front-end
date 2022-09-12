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
    margin-right: -234px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 74px;
    /* Third Nav */
    /* justify-content: flex-end;
  width: 100vw; */
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(Link)`
    border: 1px solid #b38551;
    padding: 10px 22px;
    background: none;
    color: #b38551;
    outline: #b38551;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    font-weight: bold;
    font-size: 20px;

    /* Second Nav */
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #b38551;
        color: #fff;
    }
`;
