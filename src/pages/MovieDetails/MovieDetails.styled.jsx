import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  padding-top: 50px;

  @media screen and (min-width: 480px) {
    padding: 0;
  }
`;

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
  bottom: 105%;
  max-width: 60%;
  text-align: bottom;
  font-size: 32px;
  color: white;

  @media screen and (min-width: 480px) {
    max-width: 70%;
    font-size: 48px;
  }

  @media screen and (min-width: 768px) {
    font-size: 64px;
  }
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
