import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  gap: 20px;
  box-sizing: border-box;
  width: 100vw;
  height: 50px;
  padding: 10px 20px;
  box-shadow: 0px 5px 20px 0px #0000007f;
  z-index: 10;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
  }
`;

export const StyledLink = styled(NavLink)`
  font-size: 24px;
  color: #006aff;

  &.active {
    color: #ff00ff;
  }
`;

export const BackBtn = styled(Link)`
  text-decoration: none;
  margin-left: auto;

  button {
    display: flex;
    gap: 5px;
    align-items: center;
    border: 2px solid transparent;
    background-color: transparent;
    font-size: 16px;
    color: #006aff;
    transition: all 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  &:hover,
  &:focus {
    button {
      border-color: #ffffff;
      color: #ff00ff;
    }
  }

  @media screen and (min-width: 768px) {
    position: fixed;
    top: 75px;
    left: 30px;
    z-index: 10;
    border-radius: 30px;
    box-shadow: 0px 5px 20px 0px #0000007f;

    button {
      border-radius: 30px;
      padding: 10px 20px;
      backdrop-filter: blur(6px);
      font-size: 16px;
    }
  }
`;
