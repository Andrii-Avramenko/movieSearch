import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const BgWrapper = styled.div`
  width: 100vw;
  background-color: black;
`;

export const BgImage = styled.img`
  display: block;
  width: 100vw;
  max-height: 700px;
  object-fit: cover;
`;

export const InfoWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 1440px;
  padding: 0 30px;
`;

export const Title = styled.h2`
  position: absolute;
  top: -100px;
  font-size: 64px;
  color: white;
`;

export const StyledNav = styled.nav`
  display: flex;
  gap: 20px;
  justify-content: center;
  padding: 10px 0;
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 20px;
  color: #006aff;

  &.active {
    color: #ff00ff;
  }
`;
