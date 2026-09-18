import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNav = styled.nav`
    position:fixed;
    top: 0px;
    display: flex;
    gap: 20px;
    width: 100vw;
    height: 50px;
    padding: 10px 20px;
    box-shadow: 0px 5px 20px 0px #0000007F;
    backdrop-filter: blur(6px);
    z-index: 10;
`

export const StyledLink = styled(NavLink)`
    font-size: 24px;
    color: #006aff;

    &.active {
        color: #ff00ff;
    }
`