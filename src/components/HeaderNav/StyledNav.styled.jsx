import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNav = styled.nav`
    display: flex;
    gap: 20px;
    width: 100vw;
    padding: 10px 20px;
    margin-bottom: 25px;
    box-shadow: 0px 5px 20px 0px #0000007F;
`

export const StyledLink = styled(NavLink)`
    font-size: 24px;
    color: #006aff;

    &.active {
        color: #ff00ff;
    }
`